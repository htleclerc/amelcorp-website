import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import styles from './sourcing.module.css';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function SourcingService() {
    const t = useTranslations('ServicesSourcing');

    return (
        <div className={styles.sourcingPage}>
            <Header />

            <main>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <div className={styles.heroText}>
                                <div className={styles.badge}>
                                    <span className={styles.badgeDot}></span>
                                    <span className={styles.badgeText}>{t('hero.badge')}</span>
                                </div>
                                <h1 className={styles.heroTitle}>
                                    {t.rich('hero.title', {
                                        highlight: (chunks) => <span className={styles.heroTitleHighlight}>{chunks}</span>,
                                        br: (chunks) => <br />
                                    })}
                                </h1>
                                <p className={styles.heroDesc}>
                                    {t('hero.desc')}
                                </p>
                                <div className={styles.heroActions}>
                                    <Link href="/book" className={styles.btnPrimary}>
                                        {t('hero.btn')} <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                    <span className={styles.verifiedInfo}>
                                        <i className="fa-solid fa-shield-halved"></i> {t('hero.verified')}
                                    </span>
                                </div>
                            </div>

                            {/* Impact Card */}
                            <div className={styles.impactCard}>
                                <h3 className={styles.impactTitle}>{t('impact.title')}</h3>
                                <div className={styles.impactList}>
                                    <div className={styles.impactItem}>
                                        <div className={`${styles.impactIcon} ${styles.iconBlue}`}>
                                            <i className="fa-solid fa-hand-holding-dollar"></i>
                                        </div>
                                        <div>
                                            <div className={styles.impactValue}>{t('impact.cost.value')}</div>
                                            <div className={styles.impactLabel}>{t('impact.cost.label')}</div>
                                        </div>
                                    </div>
                                    <div className={styles.impactItem}>
                                        <div className={`${styles.impactIcon} ${styles.iconGreen}`}>
                                            <i className="fa-solid fa-user-shield"></i>
                                        </div>
                                        <div>
                                            <div className={styles.impactValue}>{t('impact.fraud.value')}</div>
                                            <div className={styles.impactLabel}>{t('impact.fraud.label')}</div>
                                        </div>
                                    </div>
                                    <div className={styles.impactItem}>
                                        <div className={`${styles.impactIcon} ${styles.iconPurple}`}>
                                            <i className="fa-solid fa-globe"></i>
                                        </div>
                                        <div>
                                            <div className={styles.impactValue}>{t('impact.hubs.value')}</div>
                                            <div className={styles.impactLabel}>{t('impact.hubs.label')}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className={styles.mainWrapper}>
                    <div className="container">
                        <div className={styles.contentGrid}>

                            {/* Left Content */}
                            <div>
                                {/* What We Do */}
                                <div id="what-we-do">
                                    <h2 className={styles.sectionTitle}>{t('whatWeDo.title')}</h2>
                                    <div className={styles.titleUnderline}></div>
                                    <p className={styles.sectionLead}>
                                        {t('whatWeDo.lead')}
                                    </p>

                                    <div className={styles.cardGrid}>
                                        {t.raw('whatWeDo.items').map((benefit, idx) => (
                                            <div className={styles.benefitCard} key={idx}>
                                                <div className={styles.benefitIcon}>
                                                    <i className={`fa-solid ${idx === 0 ? 'fa-check-double' : idx === 1 ? 'fa-box-open' : idx === 2 ? 'fa-handshake' : 'fa-file-contract'}`}></i>
                                                </div>
                                                <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                                                <p className={styles.benefitDesc}>{benefit.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* How It Works */}
                                <div id="process">
                                    <h2 className={styles.sectionTitle}>{t('process.title')}</h2>
                                    <div className={styles.titleUnderline}></div>

                                    <div className={styles.processSteps}>
                                        {t.raw('process.steps').map((step, idx) => (
                                            <div className={styles.stepConnector} key={idx}>
                                                <div className={`${styles.stepNumber} ${idx === 0 ? styles.stepActive : idx === 3 ? styles.stepFinal : ''}`}>{idx + 1}</div>
                                                <div className={styles.stepInfo}>
                                                    <h5 className={styles.stepTitle}>{step.title}</h5>
                                                    <p className={step.description}>{step.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Risks Section */}
                                <div className={styles.risksSection}>
                                    <h2 className={styles.sectionTitle}>{t('risks.title')}</h2>
                                    <div className={styles.titleUnderlineRed}></div>

                                    <div className={styles.riskList}>
                                        {t.raw('risks.items').map((risk, idx) => (
                                            <div className={styles.riskItem} key={idx}>
                                                <i className={`${styles.riskIcon} fa-solid fa-triangle-exclamation`}></i>
                                                <div>
                                                    <h5 className={styles.riskTitle}>{risk.title}</h5>
                                                    <p className={styles.riskDesc}>{risk.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <aside>
                                <div className={styles.sidebar}>
                                    <div className={styles.priceCard}>
                                        <h3 className={styles.sidebarTitle}>{t('sidebar.title')}</h3>
                                        <div className={styles.idealList}>
                                            {t.raw('sidebar.ideal').map((ideal, idx) => (
                                                <div className={styles.idealItem} key={idx}>
                                                    <div className={styles.checkCircle}><i className="fa-solid fa-check"></i></div>
                                                    <div className={styles.idealInfo}>
                                                        <p>{ideal.title}</p>
                                                        <p>{ideal.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className={styles.pricingModel}>
                                            <h4 className={styles.pricingTitle}>{t('sidebar.pricing.title')}</h4>
                                            <p className={styles.pricingDesc}>{t('sidebar.pricing.desc')}</p>
                                            <ul className={styles.pricingFees}>
                                                {t.raw('sidebar.pricing.fees').map((fee, idx) => (
                                                    <li className={styles.feeItem} key={idx}>
                                                        <span className={styles.feeLabel}>{fee.label}</span>
                                                        <span className={styles.feeValue}>{fee.value}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <Link href="/book" className={styles.btnBook}>
                                                {t('sidebar.pricing.btn')}
                                            </Link>
                                            <p className={styles.feeNote}>{t('sidebar.pricing.note')}</p>
                                        </div>
                                    </div>

                                    {/* Testimonial */}
                                    <div className={styles.testimonialCard}>
                                        <div className={styles.stars}>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <p className={styles.quote}>{t('sidebar.testimonial.quote')}</p>
                                        <div className={styles.author}>
                                            <Image
                                                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                                                alt={t('sidebar.testimonial.author')}
                                                width={40}
                                                height={40}
                                                className={styles.avatar}
                                            />
                                            <div>
                                                <p className={styles.authorName}>{t('sidebar.testimonial.author')}</p>
                                                <p className={styles.authorRole}>{t('sidebar.testimonial.role')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>

                        </div>
                    </div>
                </section>

                {/* Bottom CTA Strip */}
                <section className={styles.bottomCta}>
                    <div className="container">
                        <div className={styles.ctaFlex}>
                            <div>
                                <h3 className={styles.ctaTitle}>{t('footerCta.title')}</h3>
                                <p className={styles.ctaDesc}>{t('footerCta.desc')}</p>
                            </div>
                            <div className={styles.ctaButtons}>
                                <Link href="/services-overview" className={styles.btnSecondary}>
                                    {t('footerCta.viewOther')}
                                </Link>
                                <Link href="/book" className={styles.btnSmallRed}>
                                    {t('footerCta.bookNow')} <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
