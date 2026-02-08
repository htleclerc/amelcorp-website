import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import styles from './audit.module.css';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export const metadata = {
    title: 'Supplier Audits & QC - Amelcorp Logistics',
};

export default function AuditQCService() {
    const t = useTranslations('ServicesAudit');

    return (
        <div className={styles.auditPage}>
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
                                        br: () => <br />,
                                        highlight: (chunks) => <span className={styles.heroTitleHighlight}>{chunks}</span>
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

                            {/* Impact Card */}
                            <div className={styles.impactCard}>
                                <h3 className={styles.impactTitle}>{t('impact.title')}</h3>
                                <div className={styles.impactList}>
                                    <div className={styles.impactItem}>
                                        <div className={`${styles.impactIcon} ${styles.iconRed}`}>
                                            <i className="fa-solid fa-ban"></i>
                                        </div>
                                        <div>
                                            <div className={styles.impactValue}>{t('impact.defect.value')}</div>
                                            <div className={styles.impactLabel}>{t('impact.defect.label')}</div>
                                        </div>
                                    </div>
                                    <div className={styles.impactItem}>
                                        <div className={`${styles.impactIcon} ${styles.iconBlue}`}>
                                            <i className="fa-solid fa-magnifying-glass-chart"></i>
                                        </div>
                                        <div>
                                            <div className={styles.impactValue}>{t('impact.turnaround.value')}</div>
                                            <div className={styles.impactLabel}>{t('impact.turnaround.label')}</div>
                                        </div>
                                    </div>
                                    <div className={styles.impactItem}>
                                        <div className={`${styles.impactIcon} ${styles.iconAmber}`}>
                                            <i className="fa-solid fa-shield-halved"></i>
                                        </div>
                                        <div>
                                            <div className={styles.impactValue}>{t('impact.fraud.value')}</div>
                                            <div className={styles.impactLabel}>{t('impact.fraud.label')}</div>
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
                                {/* Audit Coordination */}
                                <div id="audit-coordination">
                                    <h2 className={styles.sectionTitle}>{t('audit.title')}</h2>
                                    <div className={styles.titleUnderline}></div>
                                    <p className={styles.sectionLead}>
                                        {t('audit.lead')}
                                    </p>

                                    <div className={styles.featureGrid}>
                                        {t.raw('audit.items').map((item, idx) => (
                                            <div className={styles.featureItem} key={idx}>
                                                <div className={styles.featureIconCircle}>
                                                    <i className={`fa-solid ${idx === 0 ? 'fa-building-circle-check' : 'fa-industry'}`}></i>
                                                </div>
                                                <div className={styles.featureInfo}>
                                                    <h4>{item.title}</h4>
                                                    <p>{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* QC Inspection Scheduling */}
                                <div id="qc-inspection">
                                    <h2 className={styles.sectionTitle}>{t('qc.title')}</h2>
                                    <div className={styles.titleUnderline}></div>
                                    <p className={styles.sectionLead}>
                                        {t('qc.lead')}
                                    </p>

                                    <div className={styles.phaseList}>
                                        {t.raw('qc.phases').map((phase, idx) => (
                                            <div className={`${styles.phaseCard} ${idx === 2 ? styles.phaseCardActive : ''}`} key={idx}>
                                                <div className={styles.phaseIndicator}>
                                                    <span className={styles.phaseLabel}>Phase</span>
                                                    <span className={styles.phaseNumber}>0{idx + 1}</span>
                                                </div>
                                                <div className={styles.phaseInfo}>
                                                    <h4>{phase.title}</h4>
                                                    <p>{phase.desc}</p>
                                                    {phase.badge && <span className={styles.popularBadge}>{phase.badge}</span>}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Compliance Banner */}
                                <div className={styles.complianceBanner}>
                                    <div className={styles.complianceIconBox}>
                                        <i className="fa-solid fa-file-contract"></i>
                                    </div>
                                    <div>
                                        <h3 className={styles.complianceTitle}>{t('compliance.title')}</h3>
                                        <p className={styles.complianceDesc}>
                                            {t('compliance.desc')}
                                        </p>
                                        <ul className={styles.complianceList}>
                                            {t.raw('compliance.items').map((item, idx) => (
                                                <li className={styles.complianceListItem} key={idx}>
                                                    <i className={`fa-solid fa-check ${styles.checkIcon}`}></i> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Deliverables Section */}
                                <div className={styles.deliverablesSection}>
                                    <h2 className={styles.sectionTitle}>{t('deliverables.title')}</h2>
                                    <div className={styles.titleUnderline}></div>

                                    <div className={styles.deliverableGrid}>
                                        {t.raw('deliverables.items').map((item, idx) => (
                                            <div className={styles.deliverableCard} key={idx}>
                                                <div className={styles.deliverableIcon}>
                                                    <i className={`fa-solid ${idx === 0 ? 'fa-camera' :
                                                        idx === 1 ? 'fa-chart-pie' : 'fa-thumbs-up'
                                                        }`}></i>
                                                </div>
                                                <h5 className={styles.deliverableTitle}>{item.title}</h5>
                                                <p className={styles.deliverableDesc}>{item.desc}</p>
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
                                            <span className={styles.badgeOnDemand}>{t('sidebar.badge')}</span>
                                        </div>
                                        <p className={styles.cardDesc}>
                                            {t('sidebar.desc')}
                                        </p>

                                        <div className={styles.feeBox}>
                                            <div className={styles.feeRow}>
                                                <span className={styles.feeLabel}>{t('sidebar.feeLabel')}</span>
                                                <span className={styles.feeValue}>$1,500 - $4,000</span>
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

                                    {/* Risk Reality Card */}
                                    <div className={styles.riskRealityCard}>
                                        <span className={styles.riskTag}>
                                            <i className="fa-solid fa-triangle-exclamation"></i>
                                            {t('sidebar.riskReality.tag')}
                                        </span>
                                        <h4 className={styles.riskTitle}>{t('sidebar.riskReality.title')}</h4>
                                        <p className={styles.riskQuote}>
                                            {t('sidebar.riskReality.quote')}
                                        </p>
                                        <div className={styles.riskStats}>
                                            <div className={styles.statItem}>
                                                <p>{t('sidebar.riskReality.costLabel')}</p>
                                                <p>{t('sidebar.riskReality.costValue')}</p>
                                            </div>
                                            <div className={`${styles.statItem} ${styles.statItemRight}`}>
                                                <p>{t('sidebar.riskReality.delayLabel')}</p>
                                                <p>{t('sidebar.riskReality.delayValue')}</p>
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
                                <h3 className={styles.ctaTitle}>{t('footer.title')}</h3>
                                <p className={styles.ctaDesc}>{t('footer.desc')}</p>
                            </div>
                            <div className={styles.ctaButtons}>
                                <Link href="/services-overview" className={styles.btnSecondary}>
                                    {t('footer.viewOther')}
                                </Link>
                                <Link href="/book" className={styles.btnSmallRed}>
                                    {t('footer.bookNow')} <i className="fa-solid fa-arrow-right"></i>
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

