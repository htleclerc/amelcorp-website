'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './contact.module.css';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
    const t = useTranslations('Contact');

    // Default values matched with translation keys/values
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        businessType: 'llc',
        industry: 'electronics',
        country: 'China',
        orderValue: 'Under $5,000',
        timeline: 'Immediate (0-30 days)',
        volume: 'Prototype / Sample Only',
        details: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className={styles.contactPage}>
            <Header />

            <main className={styles.container}>
                <div className={styles.hero}>
                    <h1 className="h1" style={{ color: 'var(--slate-900)' }}>{t('hero.title')}</h1>
                    <p>{t('hero.desc')}</p>
                </div>

                <div className={styles.grid}>
                    {/* Left Column */}
                    <aside className={styles.leftCol}>
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>{t('info.title')}</h3>
                            <div className={styles.contactInfoList}>
                                <div className={styles.infoItem}>
                                    <div className={styles.infoIconBox}>
                                        <i className="fa-solid fa-location-dot text-xl"></i>
                                    </div>
                                    <div className={styles.infoContent}>
                                        <h4>{t('info.headquarters.title')}</h4>
                                        <p style={{ whiteSpace: 'pre-line' }}>
                                            {t('info.headquarters.address')}
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIconBox}>
                                        <i className="fa-solid fa-envelope text-xl"></i>
                                    </div>
                                    <div className={styles.infoContent}>
                                        <h4>{t('info.email.title')}</h4>
                                        <p>contact@amelcorp.com</p>
                                        <p>support@amelcorp.com</p>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoIconBox}>
                                        <i className="fa-solid fa-phone text-xl"></i>
                                    </div>
                                    <div className={styles.infoContent}>
                                        <h4>{t('info.phone.title')}</h4>
                                        <p>+1 (555) 123-4567</p>
                                        <p style={{ color: 'var(--slate-400)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{t('info.phone.hours')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.inquiriesCard}>
                            <h3>{t('inquiries.title')}</h3>
                            <p>{t('inquiries.desc')} <a href="mailto:partners@amelcorp.com" className="text-blue-600 underline">partners@amelcorp.com</a></p>
                            <div className={styles.person}>
                                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/16e7134a42-9ff90d7b6139599375bb.png" alt={t('inquiries.person.name')} className={styles.personImg} />
                                <div className={styles.personInfo}>
                                    <p>{t('inquiries.person.name')}</p>
                                    <p>{t('inquiries.person.role')}</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Right Column */}
                    <div className={styles.rightCol}>
                        <div className={styles.formCard}>
                            <div className={styles.formCardHeader}>
                                <div>
                                    <h3>{t('form.header')}</h3>
                                    <p>{t('form.subhead')}</p>
                                </div>
                                <div className={styles.secureBadge}>
                                    <i className="fa-solid fa-shield-halved"></i>
                                    <span>{t('form.secure')}</span>
                                </div>
                            </div>

                            <form className={styles.formBody}>
                                <section>
                                    <h4 className={styles.sectionHeader}>{t('form.sections.business')}</h4>
                                    <div className={styles.formGrid}>
                                        <div className={styles.formControl}>
                                            <label className={styles.label}>{t('form.fields.fullName')}</label>
                                            <input type="text" name="fullName" placeholder="John Doe" className={styles.input} value={formData.fullName} onChange={handleInputChange} />
                                        </div>
                                        <div className={styles.formControl}>
                                            <label className={styles.label}>{t('form.fields.email')}</label>
                                            <input type="email" name="email" placeholder="john@company.com" className={styles.input} value={formData.email} onChange={handleInputChange} />
                                        </div>
                                        <div className={styles.formControl}>
                                            <label className={styles.label}>{t('form.fields.phone')}</label>
                                            <input type="tel" name="phone" placeholder="+1 (555) 000-0000" className={styles.input} value={formData.phone} onChange={handleInputChange} />
                                        </div>
                                        <div className={styles.formControl}>
                                            <label className={styles.label}>{t('form.fields.companyName')}</label>
                                            <input type="text" name="companyName" placeholder="Your Company LLC" className={styles.input} value={formData.companyName} onChange={handleInputChange} />
                                        </div>
                                        <div className={styles.fullWidth}>
                                            <label className={styles.label} style={{ marginBottom: '0.5rem', display: 'block' }}>{t('form.fields.businessType')}</label>
                                            <div className={styles.radioRow}>
                                                {[
                                                    { id: 'biz-llc', val: 'llc', label: t('form.types.llc') },
                                                    { id: 'biz-sole', val: 'sole', label: t('form.types.sole') },
                                                    { id: 'biz-indiv', val: 'individual', label: t('form.types.individual') }
                                                ].map(item => (
                                                    <label key={item.id} className={styles.radioLabel}>
                                                        <input type="radio" name="businessType" value={item.val} className={styles.radioInput} checked={formData.businessType === item.val} onChange={handleInputChange} />
                                                        <div className={styles.radioUI}>
                                                            <div className={styles.radioCircle}></div>
                                                            <span className={styles.radioText}>{item.label}</span>
                                                        </div>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h4 className={styles.sectionHeader}>{t('form.sections.sourcing')}</h4>
                                    <div className={styles.formGrid}>
                                        <div className={styles.fullWidth}>
                                            <label className={styles.label} style={{ marginBottom: '0.5rem', display: 'block' }}>{t('form.fields.industry')}</label>
                                            <div className={styles.radioRow}>
                                                {[
                                                    { id: 'ind-tech', val: 'electronics', label: t('form.industries.tech'), icon: 'fa-microchip' },
                                                    { id: 'ind-beauty', val: 'beauty', label: t('form.industries.beauty'), icon: 'fa-spray-can-sparkles' },
                                                    { id: 'ind-textile', val: 'textiles', label: t('form.industries.textiles'), icon: 'fa-shirt' }
                                                ].map(item => (
                                                    <label key={item.id} className={styles.radioLabel}>
                                                        <input type="radio" name="industry" value={item.val} className={styles.radioInput} checked={formData.industry === item.val} onChange={handleInputChange} />
                                                        <div className={styles.radioUI}>
                                                            <i className={`fa-solid ${item.icon} ${styles.industryIcon}`}></i>
                                                            <div className={styles.radioText} style={{ fontSize: '0.75rem' }}>{item.label}</div>
                                                        </div>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className={styles.formControl}>
                                            <label className={styles.label}>{t('form.fields.country')}</label>
                                            <select name="country" className={styles.select} value={formData.country} onChange={handleInputChange}>
                                                {t.raw('form.countries').map((option, idx) => (
                                                    <option key={idx} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className={styles.formControl}>
                                            <label className={styles.label}>{t('form.fields.orderValue')}</label>
                                            <select name="orderValue" className={styles.select} value={formData.orderValue} onChange={handleInputChange}>
                                                {t.raw('form.orderValues').map((option, idx) => (
                                                    <option key={idx} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className={styles.formControl}>
                                            <label className={styles.label}>{t('form.fields.timeline')}</label>
                                            <select name="timeline" className={styles.select} value={formData.timeline} onChange={handleInputChange}>
                                                {t.raw('form.timelines').map((option, idx) => (
                                                    <option key={idx} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className={styles.formControl}>
                                            <label className={styles.label}>{t('form.fields.volume')}</label>
                                            <select name="volume" className={styles.select} value={formData.volume} onChange={handleInputChange}>
                                                {t.raw('form.volumes').map((option, idx) => (
                                                    <option key={idx} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <label className={styles.label} style={{ marginBottom: '0.5rem', display: 'block' }}>{t('form.fields.details')}</label>
                                    <textarea name="details" rows="3" placeholder={t('form.fields.detailsPlaceholder')} className={styles.textarea} value={formData.details} onChange={handleInputChange}></textarea>
                                </section>

                                <footer className={styles.formFooter}>
                                    <div className={styles.lockIcon}>
                                        <i className="fa-solid fa-lock"></i>
                                        <span>{t('form.footer.secure')}</span>
                                    </div>
                                    <button type="submit" className={styles.submitBtn}>
                                        {t('form.footer.submit')}
                                    </button>
                                </footer>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
