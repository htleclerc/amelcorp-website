import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import CTASection from '@/components/CTASection';
import styles from './retainer.module.css';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export const metadata = {
    title: 'Import/Export Trade Management - Amelcorp Logistics',
};

export default function RetainerService() {
    const t = useTranslations('ServicesRetainer');

    return (
        <div className={styles.retainerPage}>
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
                                </div>
                            </div>

                            {/* Benefits Card */}
                            <div className={styles.benefitsCard}>
                                <h3 className={styles.benefitsTitle}>{t('impact.title')}</h3>
                                <div className={styles.benefitsList}>
                                    <div className={styles.benefitItem}>
                                        <div className={`${styles.benefitIcon} ${styles.iconBlue}`}>
                                            <i className="fa-solid fa-clock"></i>
                                        </div>
                                        <div>
                                            <div className={styles.benefitValue}>{t('impact.time.value')}</div>
                                            <div className={styles.benefitLabel}>{t('impact.time.label')}</div>
                                        </div>
                                    </div>
                                    <div className={styles.benefitItem}>
                                        <div className={`${styles.benefitIcon} ${styles.iconGreen}`}>
                                            <i className="fa-solid fa-file-circle-check"></i>
                                        </div>
                                        <div>
                                            <div className={styles.benefitValue}>{t('impact.compliance.value')}</div>
                                            <div className={styles.benefitLabel}>{t('impact.compliance.label')}</div>
                                        </div>
                                    </div>
                                    <div className={styles.benefitItem}>
                                        <div className={`${styles.benefitIcon} ${styles.iconPurple}`}>
                                            <i className="fa-solid fa-headset"></i>
                                        </div>
                                        <div>
                                            <div className={styles.benefitValue}>{t('impact.manager.value')}</div>
                                            <div className={styles.benefitLabel}>{t('impact.manager.label')}</div>
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
                                {/* What We Manage */}
                                <div id="what-we-manage">
                                    <h2 className={styles.sectionTitle}>{t('whatWeManage.title')}</h2>
                                    <div className={styles.titleUnderline}></div>
                                    <p className={styles.sectionLead}>
                                        {t('whatWeManage.lead')}
                                    </p>

                                    <div className={styles.featureGrid}>
                                        {t.raw('whatWeManage.items').map((item, idx) => (
                                            <div className={styles.featureItemDetailed} key={idx}>
                                                <div className={styles.featureIconCircle}>
                                                    <i className={`fa-solid ${idx === 0 ? 'fa-comments' :
                                                        idx === 1 ? 'fa-list-check' :
                                                            idx === 2 ? 'fa-scale-balanced' :
                                                                idx === 3 ? 'fa-file-invoice-dollar' :
                                                                    idx === 4 ? 'fa-ship' : 'fa-handshake-angle'
                                                        }`}></i>
                                                </div>
                                                <div className={styles.featureInfoDetailed}>
                                                    <h4>{item.title}</h4>
                                                    <p>{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Engagement Model Banner */}
                                <div className={styles.engagementBanner}>
                                    <div className={styles.engagementText}>
                                        <h3 className={styles.engagementTitle}>{t('engagement.title')}</h3>
                                        <p className={styles.engagementDesc}>
                                            {t('engagement.desc')}
                                        </p>
                                        <div className={styles.engagementDetails}>
                                            <div className={styles.detailItem}>
                                                <i className={`${styles.detailIcon} fa-solid fa-calendar-check`}></i>
                                                <span className={styles.detailLabel}>{t('engagement.commitment')}</span>
                                            </div>
                                            <div className={styles.detailItem}>
                                                <i className={`${styles.detailIcon} fa-solid fa-rotate`}></i>
                                                <span className={styles.detailLabel}>{t('engagement.rolling')}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.engagementPricing}>
                                        <p className={styles.priceLabel}>{t('engagement.startingAt')}</p>
                                        <p className={styles.priceMain}>$2,500<span className={styles.priceUnit}>{t('engagement.unit')}</span></p>
                                        <p className={styles.priceNote}>{t('engagement.note')}</p>
                                    </div>
                                </div>

                                {/* Who Needs This Section */}
                                <div id="who-needs">
                                    <h2 className={styles.sectionTitle}>{t('audience.title')}</h2>
                                    <div className={styles.titleUnderline}></div>

                                    <div className={styles.audienceGrid}>
                                        {t.raw('audience.items').map((item, idx) => (
                                            <div className={styles.audienceCard} key={idx}>
                                                <div className={styles.audienceIcon}>
                                                    <i className={`fa-solid ${idx === 0 ? 'fa-building' :
                                                        idx === 1 ? 'fa-tags' : 'fa-truck-fast'
                                                        }`}></i>
                                                </div>
                                                <h5 className={styles.audienceTitle}>{item.title}</h5>
                                                <p className={styles.audienceDesc}>{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <aside>
                                <div className={styles.sidebar}>
                                    <div className={styles.pricingCard}>
                                        <div className={styles.cardHeader}>
                                            <h3 className={styles.cardTitle}>{t('sidebar.title')}</h3>
                                            <span className={styles.popularBadge}>{t('sidebar.badge')}</span>
                                        </div>
                                        <p className={styles.cardDesc}>
                                            {t('sidebar.desc')}
                                        </p>

                                        <div className={styles.feeBox}>
                                            <div className={styles.feeRow}>
                                                <span className={styles.feeLabel}>{t('sidebar.feeLabel')}</span>
                                                <span className={styles.feeValue}>$2,500 - $6,000</span>
                                            </div>
                                            <p className={styles.feeSubtext}>{t('sidebar.feeNote')}</p>
                                        </div>

                                        <ul className={styles.featureList}>
                                            {t.raw('sidebar.features').map((feature, idx) => (
                                                <li className={styles.featureCheck} key={idx}>
                                                    <i className={`fa-solid fa-check ${styles.checkIconGreen}`}></i>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Link href="/book" className={styles.btnBook}>
                                            {t('sidebar.btn')}
                                        </Link>
                                        <p className={styles.linkNote}>
                                            {t('sidebar.note')}
                                        </p>
                                    </div>

                                    {/* Case Study */}
                                    <div className={styles.caseStudyCard}>
                                        <span className={styles.caseTag}>{t('sidebar.caseStudy.tag')}</span>
                                        <h4 className={styles.caseTitle}>{t('sidebar.caseStudy.title')}</h4>
                                        <p className={styles.caseQuote}>
                                            {t('sidebar.caseStudy.quote')}
                                        </p>
                                        <div className={styles.caseStats}>
                                            <div className={styles.statItem}>
                                                <p>{t('sidebar.caseStudy.volumeLabel')}</p>
                                                <p>{t('sidebar.caseStudy.volumeValue')}</p>
                                            </div>
                                            <div className={`${styles.statItem} ${styles.statItemRight}`}>
                                                <p>{t('sidebar.caseStudy.savingsLabel')}</p>
                                                <p className={styles.savingsValue}>{t('sidebar.caseStudy.savingsValue')}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>

                        </div>
                    </div>
                </section>

                {/* Bottom CTA Strip */}
                <CTASection
                    title={t('footer.title')}
                    desc={t('footer.desc')}
                    primaryCtaText={t('footer.bookNow')}
                    primaryCtaLink="/book"
                    secondaryCtaText={t('footer.viewOther')}
                    secondaryCtaLink="/services-overview"
                    variant="horizontal"
                />
            </main>

            <Footer />
        </div>
    );
}

