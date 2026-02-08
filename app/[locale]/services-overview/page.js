import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import styles from './services.module.css';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ServicesOverview() {
    const t = useTranslations('ServicesOverview');

    return (
        <div className={styles.servicesOverview}>
            <Header />

            <main>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>{t('hero.title')}</h1>
                        <p className={styles.heroDesc}>
                            {t('hero.desc')}
                        </p>
                    </div>
                </section>

                {/* The Amelcorp Model */}
                <section className={styles.modelIntro}>
                    <div className="container">
                        <div className={styles.modelCard}>
                            <div className={styles.modelText}>
                                <span className={styles.modelLabel}>{t('model.label')}</span>
                                <h2 className={styles.modelTitle}>{t('model.title')}</h2>
                                <p className={styles.modelDesc}>
                                    {t('model.desc')}
                                </p>
                                <div className={styles.modelChecks}>
                                    {t.raw('model.checks').map((check, idx) => (
                                        <div className={styles.checkItem} key={idx}>
                                            <i className={`${styles.checkIcon} fas fa-check-circle`}></i> {check}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.modelVisual}>
                                <div className={styles.flowVisual}>
                                    <div className={styles.visualNode}>
                                        <div className={styles.nodeIcon}>
                                            <i className="fas fa-building"></i>
                                        </div>
                                        <span className={styles.nodeLabel}>{t('model.nodes.business')}</span>
                                    </div>

                                    <div className={styles.connector}>
                                        <div className={styles.line}></div>
                                    </div>

                                    <div className={`${styles.visualNode} ${styles.hubNode}`}>
                                        <div className={styles.hubBadge}>{t('model.hubLabel')}</div>
                                        <div className={styles.hubIcon}>A</div>
                                        <span className={styles.hubLabel}>{t('model.nodes.hub')}</span>
                                    </div>

                                    <div className={styles.connector}>
                                        <div className={styles.line}></div>
                                    </div>

                                    <div className={styles.stack}>
                                        <div className={styles.stackItem}>
                                            <div className={styles.smallIcon}>
                                                <i className="fas fa-industry"></i>
                                            </div>
                                            <span className={styles.smallLabel}>{t('model.nodes.factories')}</span>
                                        </div>
                                        <div className={styles.stackItem}>
                                            <div className={styles.smallIcon}>
                                                <i className="fas fa-truck-moving"></i>
                                            </div>
                                            <span className={styles.smallLabel}>{t('model.nodes.logistics')}</span>
                                        </div>
                                        <div className={styles.stackItem}>
                                            <div className={styles.smallIcon}>
                                                <i className="fas fa-file-contract"></i>
                                            </div>
                                            <span className={styles.smallLabel}>{t('model.nodes.customs')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Services List */}
                <section className={styles.servicesList}>
                    <div className="container">

                        {/* Service 1: Flagship */}
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceImgWrapper}>
                                <span className={styles.flagshipBadge}>{t('services.sourcing.badge')}</span>
                                <Image
                                    src="/assets/service_sourcing.png"
                                    alt="Sourcing Negotiation"
                                    width={800}
                                    height={800}
                                    className={styles.serviceImg}
                                />
                                <div className={styles.imgOverlay}></div>
                            </div>
                            <div className={styles.serviceInfo}>
                                <div className={styles.serviceHead}>
                                    <i className={`${styles.serviceIcon} fas fa-magnifying-glass-location`}></i>
                                    <h3 className={styles.serviceTitle}>{t('services.sourcing.title')}</h3>
                                </div>
                                <p className={styles.serviceDesc}>
                                    {t('services.sourcing.desc')}
                                </p>
                                <div className={styles.featureGrid}>
                                    {t.raw('services.sourcing.features').map((feature, idx) => (
                                        <div className={styles.featureItem} key={idx}>
                                            <i className={`${styles.featureIcon} fas fa-check`}></i>
                                            <span className={styles.featureText}>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.serviceCTA}>
                                    <Link href="/services-overview/sourcing" className={styles.btnSourcing}>
                                        {t('services.sourcing.btn')}
                                    </Link>
                                    <span className={styles.priceTag}>{t('services.sourcing.price')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Service 2: Trade Management */}
                        <div className={styles.serviceCardAlt}>
                            <div className={styles.serviceInfo} style={{ width: '58.333333%', order: 1 }}>
                                <div className={styles.serviceHead}>
                                    <i className={`${styles.serviceIconRed} fas fa-briefcase`}></i>
                                    <h3 className={styles.serviceTitle}>{t('services.management.title')}</h3>
                                </div>
                                <p className={styles.serviceDesc}>
                                    {t('services.management.desc')}
                                </p>
                                <div className={styles.tags}>
                                    {t.raw('services.management.tags').map((tag, idx) => (
                                        <span className={styles.tag} key={idx}>{tag}</span>
                                    ))}
                                </div>
                                <Link href="/services-overview/retainer" className={styles.linkInfo}>
                                    {t('services.management.btn')} <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                            <div className={styles.serviceImgWrapper} style={{ width: '41.666667%', order: 2 }}>
                                <Image
                                    src="/assets/service_logistics.png"
                                    alt="Trade Management"
                                    width={800}
                                    height={800}
                                    className={styles.serviceImg}
                                />
                            </div>
                        </div>

                        {/* Bottom Row: QC & Direct Access */}
                        <div className={styles.gridCols2}>
                            {/* Service 3: QC */}
                            <div className={styles.gridCard}>
                                <div className={styles.cardDecor}></div>
                                <div className={styles.cardContent}>
                                    <div className={styles.cardIconBox}>
                                        <i className="fas fa-clipboard-check"></i>
                                    </div>
                                    <h3 className={styles.cardTitle}>{t('services.qc.title')}</h3>
                                    <p className={styles.cardDesc}>
                                        {t('services.qc.desc')}
                                    </p>
                                    <div className={styles.list}>
                                        {t.raw('services.qc.features').map((feat, idx) => (
                                            <div className={styles.listItem} key={idx}>
                                                <i className={`${styles.listIcon} fas fa-circle-check`}></i> {feat}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.cardFooter}>
                                    <Link href="/services-overview/audit-qc" className={styles.btnFull}>
                                        {t('services.qc.btn')}
                                    </Link>
                                </div>
                            </div>

                            {/* Service 4: Direct Access */}
                            <div className={styles.gridCard}>
                                <div className={styles.cardDecorRed}></div>
                                <div className={styles.cardContent}>
                                    <div className={styles.cardIconBoxRed}>
                                        <i className="fas fa-tags"></i>
                                    </div>
                                    <h3 className={styles.cardTitle}>{t('services.access.title')}</h3>
                                    <p className={styles.cardDesc}>
                                        {t('services.access.desc')}
                                    </p>
                                    <div className={styles.list}>
                                        {t.raw('services.access.features').map((feat, idx) => (
                                            <div className={styles.listItem} key={idx}>
                                                <i className={`${styles.listIconRed} fas fa-circle-check`}></i> {feat}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.cardFooter}>
                                    <Link href="/services-overview/product-access" className={`${styles.btnFull} ${styles.btnFullRed}`}>
                                        {t('services.access.btn')}
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* CTA Section */}
                <CTASection
                    title={t('cta.title')}
                    desc={t('cta.desc')}
                    primaryCtaText={t('cta.btn')}
                    primaryCtaLink="/book"
                    note={t('cta.note')}
                    variant="blue"
                />
            </main>

            <Footer />
        </div>
    );
}
