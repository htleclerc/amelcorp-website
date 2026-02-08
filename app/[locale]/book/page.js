'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingCalendar from '@/components/BookingCalendar';
import PaymentForm from '@/components/PaymentForm';
import styles from './book.module.css';

const enablePayment = process.env.NEXT_PUBLIC_ENABLE_PAYMENT === 'true';

export default function BookingPage() {
    const t = useTranslations('Booking');
    const tCommon = useTranslations('Common');
    const [step, setStep] = useState(1);
    const [bookingId, setBookingId] = useState(null);
    const [formData, setFormData] = useState({
        // Step 1: Qualification
        businessStructure: 'llc',
        primaryIndustry: 'electronics',
        orderValue: 'under_5k',
        targetCountry: 'china',
        launchTimeline: 'urgent',
        // Step 2 & 3: Contact & Billing
        firstName: '',
        lastName: '',
        email: '',
        paymentMethod: 'stripe', // Default to stripe
        agreedToTerms: true
    });

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    // Scroll to top on step change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [step]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const isStep1Valid = () => {
        return (
            formData.businessStructure &&
            formData.primaryIndustry &&
            formData.orderValue &&
            formData.targetCountry &&
            formData.launchTimeline
        );
    };

    const isStep2Valid = () => {
        return (
            selectedDate && selectedTime
        );
    };

    // Generic submission function for any stage
    const submitStage = async (stageStatus, nextStepNum = null, isFinal = false) => {
        if (stageStatus === 'qualification' && !formData.email && step > 1) {
            setError(t('errors.emailRequired'));
            return;
        }

        setIsSubmitting(true);
        setError('');

        try {
            const res = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: bookingId,
                    fullName: formData.firstName && formData.lastName ? `${formData.firstName} ${formData.lastName}` : undefined,
                    ...formData,
                    date: selectedDate,
                    timeSlot: selectedTime,
                    status: stageStatus,
                }),
            });

            const contentType = res.headers.get('content-type');
            let data;
            if (contentType && contentType.includes('application/json')) {
                data = await res.json();
            } else {
                const text = await res.text();
                console.error('Non-JSON response received:', text.substring(0, 200));
                throw new Error('Server returned an unexpected response format. Please try again later.');
            }

            if (data.success) {
                if (data.booking.id) setBookingId(data.booking.id);
                if (isFinal) {
                    setIsSuccess(true);
                } else if (nextStepNum) {
                    setStep(nextStepNum);
                }
            } else {
                setError(data.error || 'Failed to save progress. Please try again.');
            }
        } catch (err) {
            console.error('Submission error:', err);
            setError('A network error occurred. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const goToStep = (targetStep) => {
        if (targetStep === 1) {
            setStep(1);
        } else if (targetStep === 2) {
            if (!isStep1Valid()) {
                setError(t('errors.qualificationRequired'));
                return;
            }
            setStep(2);
        } else if (targetStep === 3) {
            if (!isStep1Valid()) {
                setError(t('errors.qualificationRequired'));
                return;
            }
            // Step 2 is calendar, we allow moving to payment even without a date (Pay Later logic)
            setStep(3);
        }
        setError('');
    };

    const renderProgress = () => {
        return (
            <div className={styles.progressContainer}>
                <div className={styles.progressLine}>
                    <div
                        className={styles.progressLineActive}
                        style={{ width: `${((step - 1) / 2) * 100}%` }}
                    ></div>
                </div>
                <div className={styles.stepsWrapper}>
                    {/* Step 1 */}
                    <div
                        className={`${styles.step} ${step > 1 ? styles.stepCompleted : ''} ${step === 1 ? styles.stepActive : ''} cursor-pointer`}
                        onClick={() => goToStep(1)}
                    >
                        <div className={styles.stepNumber}>
                            {step > 1 ? <i className="fa-solid fa-check"></i> : '1'}
                        </div>
                        <span className={styles.stepLabel}>{t('steps.qualification')}</span>
                    </div>

                    {/* Step 2 */}
                    <div
                        className={`${styles.step} ${step > 2 ? styles.stepCompleted : ''} ${step === 2 ? styles.stepActive : ''} ${isStep1Valid() ? 'cursor-pointer' : 'opacity-50'}`}
                        onClick={() => goToStep(2)}
                    >
                        <div className={styles.stepNumber}>
                            {step > 2 ? <i className="fa-solid fa-check"></i> : '2'}
                        </div>
                        <span className={styles.stepLabel}>{t('steps.schedule')}</span>
                    </div>

                    {/* Step 3 */}
                    {enablePayment && (
                        <div
                            className={`${styles.step} ${step > 3 ? styles.stepCompleted : ''} ${step === 3 ? styles.stepActive : ''} ${isStep1Valid() ? 'cursor-pointer' : 'opacity-50'}`}
                            onClick={() => goToStep(3)}
                        >
                            <div className={styles.stepNumber}>
                                {step > 3 ? <i className="fa-solid fa-check"></i> : '3'}
                            </div>
                            <span className={styles.stepLabel}>{t('steps.payment')}</span>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const renderStep1 = () => (
        <div className={styles.grid}>
            <div className={styles.sidebarCard}>
                <h1 className={styles.sidebarTitle}>{t('step1.sidebarTitle')}</h1>
                <p className={styles.sidebarDesc}>
                    {t('step1.sidebarDesc')}
                </p>
                <div className={styles.benefitList}>
                    <div className={styles.benefitItem}>
                        <div className={styles.benefitIcon}>
                            <i className="fa-solid fa-shield-halved"></i>
                        </div>
                        <div className={styles.benefitText}>
                            <h4>{t('step1.riskTitle')}</h4>
                            <p>{t('step1.riskDesc')}</p>
                        </div>
                    </div>
                    <div className={styles.benefitItem}>
                        <div className={styles.benefitIcon}>
                            <i className="fa-solid fa-user-check"></i>
                        </div>
                        <div className={styles.benefitText}>
                            <h4>{t('step1.expertTitle')}</h4>
                            <p>{t('step1.expertDesc')}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.sidebarNote}>
                    <i className="fa-solid fa-circle-info"></i>
                    <p>{t('step1.note')}</p>
                </div>
            </div>

            <div className={styles.formCard}>
                <div className={styles.formHeader}>
                    <h2>{t('step1.formTitle')}</h2>
                    <p>{t('step1.formSubtitle')}</p>
                </div>
                <div className={styles.formBody}>
                    <div className={styles.formSections}>
                        <div className={styles.sectionGroup}>
                            <h3 className={styles.sectionLabel}>
                                <span className={styles.sectionLabelDot}></span> {t('step1.contactInfo')}
                            </h3>
                            <div className={styles.formGrid}>
                                <div className={styles.formControl}>
                                    <label className={styles.label}>{t('step1.firstName')}</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className={styles.input}
                                        placeholder="John"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={styles.formControl}>
                                    <label className={styles.label}>{t('step1.lastName')}</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className={styles.input}
                                        placeholder="Doe"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={`${styles.formControl} ${styles.formControlFull}`}>
                                    <label className={styles.label}>{t('step1.email')}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className={styles.input}
                                        placeholder="john@company.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.sectionGroup}>
                            <h3 className={styles.sectionLabel}>
                                <span className={styles.sectionLabelDot}></span> {t('step1.businessProfile')}
                            </h3>
                            <div className={styles.formGrid}>
                                <div className={styles.formControl}>
                                    <label className={styles.label}>{t('step1.structure')}</label>
                                    <select
                                        name="businessStructure"
                                        className={styles.select}
                                        value={formData.businessStructure}
                                        onChange={handleInputChange}
                                    >
                                        <option value="" disabled>Select structure...</option>
                                        <option value="llc">LLC (Limited Liability Company)</option>
                                        <option value="corp">Corporation (C-Corp / S-Corp)</option>
                                        <option value="sole">Sole Proprietorship</option>
                                        <option value="individual">Individual / Pre-Launch</option>
                                    </select>
                                </div>
                                <div className={styles.formControl}>
                                    <label className={styles.label}>{t('step1.industry')}</label>
                                    <select
                                        name="primaryIndustry"
                                        className={styles.select}
                                        value={formData.primaryIndustry}
                                        onChange={handleInputChange}
                                    >
                                        <option value="" disabled>Select industry...</option>
                                        <option value="electronics">Electronics & Consumer Tech</option>
                                        <option value="beauty">Beauty & Cosmetics</option>
                                        <option value="textiles">Textiles & Apparel</option>
                                        <option value="home">Home & Garden</option>
                                        <option value="industrial">Industrial & Machinery</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className={styles.sectionGroup}>
                            <h3 className={styles.sectionLabel}>
                                <span className={styles.sectionLabelDot}></span> {t('step1.volumeScope')}
                            </h3>
                            <div className={styles.formControl}>
                                <label className={styles.label}>{t('step1.orderValue')}</label>
                                <div className={styles.radioGrid}>
                                    {[
                                        { val: 'under_5k', label: 'Under $5,000', sub: 'Micro / Test' },
                                        { val: '5k_20k', label: '$5,000 - $20,000', sub: 'Standard SMB' },
                                        { val: 'over_20k', label: '$20,000+', sub: 'Enterprise / Volume' }
                                    ].map(item => (
                                        <label key={item.val} className={styles.radioCard}>
                                            <input
                                                type="radio"
                                                name="orderValue"
                                                value={item.val}
                                                className={styles.radioInput}
                                                checked={formData.orderValue === item.val}
                                                onChange={handleInputChange}
                                            />
                                            <div className={styles.radioUI}>
                                                <div className={styles.radioTitle}>{item.label}</div>
                                                <div className={styles.radioSub}>{item.sub}</div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.formGrid}>
                                <div className={styles.formControl}>
                                    <label className={styles.label}>{t('step1.targetCountry')}</label>
                                    <select
                                        name="targetCountry"
                                        className={styles.select}
                                        value={formData.targetCountry}
                                        onChange={handleInputChange}
                                    >
                                        <option value="" disabled>Select country...</option>
                                        <option value="china">China</option>
                                        <option value="uae">United Arab Emirates (Dubai)</option>
                                        <option value="turkey">Turkey</option>
                                        <option value="vietnam">Vietnam</option>
                                        <option value="undecided">Not Sure / Need Advice</option>
                                    </select>
                                </div>
                                <div className={styles.formControl}>
                                    <label className={styles.label}>{t('step1.timeline')}</label>
                                    <select
                                        name="launchTimeline"
                                        className={styles.select}
                                        value={formData.launchTimeline}
                                        onChange={handleInputChange}
                                    >
                                        <option value="" disabled>Select timeline...</option>
                                        <option value="urgent">Immediate (0-30 days)</option>
                                        <option value="standard">Standard (30-90 days)</option>
                                        <option value="planning">Planning (90+ days)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {error && (
                        <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-4 text-red-600 animate-pulse">
                            <i className="fa-solid fa-circle-exclamation text-lg"></i>
                            <div>
                                <h4 className="font-bold text-sm">{t('errors.actionRequired')}</h4>
                                <p className="text-xs">{error}</p>
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles.formFooter} style={{ gap: '1rem' }}>
                    <button
                        onClick={() => submitStage('qualification', null, true)}
                        className={styles.secondaryBtn}
                        disabled={isSubmitting || !formData.email}
                        title={!formData.email ? 'Email required' : ''}
                    >
                        {isSubmitting ? tCommon('loading') : t('step1.submitOnly')}
                    </button>
                    <button
                        onClick={() => submitStage('qualification', 2)}
                        className={styles.submitBtn}
                        disabled={isSubmitting || !isStep1Valid()}
                    >
                        <span>{isSubmitting ? tCommon('loading') : t('step1.saveContinue')}</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );

    const renderStep2 = () => (
        <div className={styles.schedulingGrid}>
            <div className={styles.step2Grid}>
                <div className={styles.formCard}>
                    <div className={styles.formHeader}>
                        <h2>{t('step2.title')}</h2>
                        <p>{t('step2.subtitle')}</p>
                    </div>
                    <div className={styles.calendarBox}>
                        <BookingCalendar onSelectSlot={({ date, timeSlot }) => {
                            setSelectedDate(date);
                            setSelectedTime(timeSlot);
                        }} />
                    </div>
                    {error && (
                        <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100 italic font-bold">
                            <i className="fa-solid fa-triangle-exclamation mr-2"></i>
                            {error}
                        </div>
                    )}
                    <div className={styles.formFooterStep2}>
                        <div className={styles.btnGroupFull}>
                            <button
                                onClick={() => submitStage('scheduled', null, true)}
                                className={styles.secondaryBtn}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? tCommon('loading') : t('step2.submitPayLater')}
                            </button>
                            <button
                                className={styles.submitBtn}
                                style={{ background: 'var(--amelcorp-blue)' }}
                                onClick={() => enablePayment ? submitStage('scheduled', 3) : submitStage('scheduled', null, true)}
                                disabled={isSubmitting || !selectedDate || !selectedTime}
                            >
                                {isSubmitting ? tCommon('loading') : (enablePayment ? t('step2.continuePayment') : t('step1.submitOnly'))}
                                {enablePayment ? <i className="fa-solid fa-credit-card ml-2"></i> : <i className="fa-solid fa-check ml-2"></i>}
                            </button>
                        </div>
                        <div className={styles.selectionTextBottom}>
                            {selectedDate && selectedTime ? (
                                <>{t('step2.selectedSlot', { date: selectedDate, time: selectedTime })}</>
                            ) : (
                                <>{t('step2.noSlot')}</>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.checklistCard}>
                    <div className={styles.checklistHeader}>
                        <div className={styles.checklistIconBox}>
                            <i className="fa-solid fa-clipboard-list"></i>
                        </div>
                        <h3 className="font-bold text-slate-800">{t('step2.whyTitle')}</h3>
                    </div>
                    <p className="text-xs text-slate-500 mb-6">{t('step2.whySubtitle')}</p>
                    <div className={styles.checklistItems}>
                        {t.raw('step2.reasons').map((item, idx) => (
                            <div key={idx} className={styles.checklistItem}>
                                <i className={`${idx === 0 ? 'fa-solid fa-bolt' : idx === 1 ? 'fa-solid fa-clock' : 'fa-solid fa-calendar-check'} mt-1 text-slate-400`}></i>
                                <div className={styles.itemInfo}>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const renderStep3 = () => (
        <div className={styles.grid}>
            <div className={styles.sidebarCard} style={{ padding: 0, overflow: 'hidden' }}>
                <div className={styles.summaryHeader}>
                    <h3>{t('step3.summaryTitle')}</h3>
                </div>
                <div className={styles.summaryBody}>
                    <div className={styles.orderItem}>
                        <div>
                            <h4>{t('step3.consultationTitle')}</h4>
                            <p>{t('step3.consultationSub')}</p>
                            {selectedDate && <p className="text-xs text-slate-500 font-bold mt-1 text-blue-600">{selectedDate} at {selectedTime} EST</p>}
                        </div>
                        <div className={styles.orderPrice}>
                            <span className={styles.priceBig}>$199.00</span>
                            <span className={styles.currency}>USD</span>
                        </div>
                    </div>
                    <hr className="border-dashed border-slate-200 my-4" />
                    <div className={styles.whatsIncluded}>
                        <p className={styles.includedLabel}>{t('step3.whatsIncluded')}</p>
                        <div className={styles.includedList}>
                            {t.raw('step3.includedItems').map(item => (
                                <div key={item} className={styles.includedItem}>
                                    <i className="fa-solid fa-check"></i>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.creditBox}>
                    <div className={styles.creditIcon}>
                        <i className="fa-solid fa-arrow-rotate-left"></i>
                    </div>
                    <div className={styles.creditText}>
                        <h5>{t('step3.creditPolicyTitle')}</h5>
                        <p>{t('step3.creditPolicyDesc')}</p>
                    </div>
                </div>
                <div className={styles.brandLogos} style={{ padding: '0 1.5rem 1.5rem' }}>
                    <i className="fa-brands fa-cc-visa"></i>
                    <i className="fa-brands fa-cc-mastercard"></i>
                    <i className="fa-brands fa-cc-amex"></i>
                    <i className="fa-brands fa-stripe"></i>
                </div>
            </div>

            <div className={styles.formCard}>
                <div className={`${styles.formHeader} ${styles.paymentHeader}`}>
                    <div>
                        <h2>{t('step3.checkoutTitle')}</h2>
                        <p>{t('step3.checkoutSubtitle')}</p>
                    </div>
                    <div className={styles.secureBadge}>
                        <span className={styles.pulse}></span> {t('step3.secureConnection')}
                    </div>
                </div>
                <div className={styles.formBody}>
                    <div className="p-4">
                        <PaymentForm
                            bookingId={bookingId}
                            amount={199}
                            onSuccess={(details) => {
                                console.log('Payment success:', details);
                                // Update booking status
                                submitStage('scheduled', null, true);
                            }}
                            onError={(err) => setError('Payment failed. Please try again.')}
                        />
                    </div>

                    <div className={styles.termsBox}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                name="agreedToTerms"
                                className={styles.checkbox}
                                checked={formData.agreedToTerms}
                                onChange={handleInputChange}
                            />
                            <span className={styles.checkboxText}>
                                {t.rich('step3.termsText', {
                                    strong: (chunks) => <strong>{chunks}</strong>,
                                    Link: (chunks) => <Link href="#" className="text-blue-600 underline font-bold">{chunks}</Link>
                                })}
                            </span>
                        </label>
                    </div>
                </div>
                {/* Footer hidden as PaymentForm handles submission */}
            </div>
        </div>
    );

    const renderSuccess = () => (
        <div className={styles.successCard}>
            <div className={styles.successIcon}>
                <i className="fa-solid fa-check"></i>
            </div>
            <h1>{t('success.title')}</h1>
            <p>{t('success.desc')}</p>
            <div className={styles.successMeta}>
                <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>{t('success.trackingId')}</span>
                    <span className={styles.metaValue}>{bookingId || 'Pending...'}</span>
                </div>
                {selectedDate && (
                    <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>{t('success.scheduledDate')}</span>
                        <span className={styles.metaValue}>{selectedDate} at {selectedTime} EST</span>
                    </div>
                )}
                <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>{t('success.status')}</span>
                    <span className={styles.metaValue}>{t('success.statusPending')}</span>
                </div>
            </div>
            <p className={styles.successNote}>{t('success.note', { email: formData.email })}</p>
            <Link href="/" className={styles.homeBtn}>
                {t('success.homeBtn')}
            </Link>
        </div>
    );

    return (
        <div className={styles.bookingPage}>
            <Header />
            <main className={styles.container}>
                <section className={styles.heroSection}>
                    <div className="container mx-auto px-4 text-center">
                        <span className={styles.badge}>Strategic Growth</span>
                        <h1 className={styles.title}>
                            {step === 1 && t('step1.formTitle')}
                            {step === 2 && t('step2.title')}
                            {step === 3 && t('step3.checkoutTitle')}
                        </h1>
                        <p className={styles.subtitle}>
                            {step === 1 && t('step1.formSubtitle')}
                            {step === 2 && t('step2.subtitle')}
                            {step === 3 && t('step3.checkoutSubtitle')}
                        </p>
                    </div>
                </section>

                <div className={styles.formContainer}>
                    {!isSuccess && renderProgress()}

                    {isSuccess ? renderSuccess() : (
                        <>
                            {step === 1 && renderStep1()}
                            {step === 2 && renderStep2()}
                            {step === 3 && renderStep3()}
                        </>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
