import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './pricing.module.css';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function PricingPage() {
    const t = useTranslations('Pricing');

    return (
        <div className={styles.pricingPage}>
            <Header />

            <main>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <span className={styles.badge}>{t('hero.badge')}</span>
                        <h1 className={styles.heroTitle}>
                            {t('hero.title')}
                        </h1>
                        <p className={styles.heroDesc}>
                            {t('hero.desc')}
                        </p>
                    </div>
                </section>

                {/* Step 1: Strategy Call */}
                <section className={styles.entrySection}>
                    <div className={styles.container}>
                        <div className={styles.stepHeader}>
                            <div className={styles.stepId}>1</div>
                            <h2 className={styles.stepTitle}>{t('strategy.title')}</h2>
                        </div>

                        <div className={styles.strategyCard}>
                            <div className={styles.decorativeBg}></div>
                            <div className={styles.cardLeft}>
                                <div className={styles.cardHead}>
                                    <h3 className={styles.cardTitleBig}>{t('strategy.card.title')}</h3>
                                    <span className={styles.tagEntry}>{t('strategy.card.badge')}</span>
                                </div>
                                <p className={styles.cardDesc}>
                                    {t('strategy.card.desc')}
                                </p>
                                <div className={styles.featureGrid}>
                                    {t.raw('strategy.card.features').map((feature, idx) => (
                                        <div className={styles.featureItem} key={idx}>
                                            <i className={`fa-solid fa-check ${styles.checkIcon}`}></i> {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.cardRight}>
                                <div className={styles.priceLabel}>{t('strategy.card.investment')}</div>
                                <div className={styles.priceValue}>{t('strategy.card.fee')}</div>
                                <p className={styles.priceNote}>{t('strategy.card.note')}</p>
                                <Link href="/book" className={styles.btnPrimary}>
                                    {t('strategy.card.btn')}
                                </Link>
                                <div className={styles.secureNote}>{t('strategy.card.secure')}</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Step 2: Core Models */}
                <section className={styles.tiersSection}>
                    <div className={styles.container}>
                        <div className={styles.stepHeader}>
                            <div className={styles.stepId}>2</div>
                            <h2 className={styles.stepTitle}>{t('tiers.title')}</h2>
                        </div>

                        <div className={styles.tiersGrid}>
                            {/* Tier 1: Sourcing */}
                            <div className={styles.tierCard}>
                                <div className={`${styles.topBar} ${styles.barRed}`}></div>
                                <div className={styles.tierHead}>
                                    <h3 className={styles.tierTitle}>{t('tiers.sourcing.title')}</h3>
                                    <p className={styles.tierDesc}>{t('tiers.sourcing.desc')}</p>
                                </div>

                                <div className={styles.tierPriceBox}>
                                    <div className={styles.priceRow}>
                                        <span className={styles.rowLabel}>{t('tiers.sourcing.projectFee')}</span>
                                        <span className={styles.rowVal}>$3k - $10k</span>
                                    </div>
                                    <div className={styles.priceRow}>
                                        <span className={styles.rowLabel}>{t('tiers.sourcing.successFee')}</span>
                                        <span className={`${styles.rowVal} ${styles.successVal}`}>3% - 8% <span className={styles.subVal}>{t('tiers.sourcing.orderValue')}</span></span>
                                    </div>
                                </div>

                                <div className={styles.tierFeatures}>
                                    {t.raw('tiers.sourcing.features').map((feat, idx) => (
                                        <div className={styles.featItem} key={idx}>
                                            <i className={`fa-solid ${idx === 0 ? 'fa-magnifying-glass' : idx === 1 ? 'fa-shield-halved' : idx === 2 ? 'fa-hand-holding-dollar' : 'fa-box-open'} ${styles.featIcon} ${styles.iconRed}`}></i>
                                            <div>
                                                <h4 className={styles.featTitle}>{feat.title}</h4>
                                                <p className={styles.featDesc}>{feat.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Link href="/book" className={styles.btnOutline}>
                                    {t('tiers.sourcing.btn')}
                                </Link>
                            </div>

                            {/* Tier 2: Management */}
                            <div className={styles.tierCard}>
                                <div className={`${styles.topBar} ${styles.barBlue}`}></div>
                                <span className={styles.popularTag}>{t('tiers.management.popular')}</span>
                                <div className={styles.tierHead}>
                                    <h3 className={styles.tierTitle}>{t('tiers.management.title')}</h3>
                                    <p className={styles.tierDesc}>{t('tiers.management.desc')}</p>
                                </div>

                                <div className={styles.tierPriceBox}>
                                    <div className={styles.priceRow}>
                                        <span className={styles.rowLabel}>{t('tiers.management.monthlyRetainer')}</span>
                                        <span className={styles.rowVal}>$2.5k - $6k<span className={styles.subVal}>/mo</span></span>
                                    </div>
                                    <div className={styles.priceRow}>
                                        <span className={styles.rowLabel}>{t('tiers.management.commitment')}</span>
                                        <span className={styles.rowVal}>{t('tiers.management.min')}</span>
                                    </div>
                                </div>

                                <div className={styles.tierFeatures}>
                                    {t.raw('tiers.management.features').map((feat, idx) => (
                                        <div className={styles.featItem} key={idx}>
                                            <i className={`fa-solid ${idx === 0 ? 'fa-comments' : idx === 1 ? 'fa-file-invoice' : idx === 2 ? 'fa-ship' : 'fa-triangle-exclamation'} ${styles.featIcon} ${styles.iconBlue}`}></i>
                                            <div>
                                                <h4 className={styles.featTitle}>{feat.title}</h4>
                                                <p className={styles.featDesc}>{feat.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Link href="/book" className={styles.btnPrimary}>
                                    {t('tiers.management.btn')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Add-Ons */}
                <section className={styles.addonsSection}>
                    <div className={styles.container}>
                        <h2 className={`${styles.stepTitle} ${styles.sectionHeaderCentered}`}>{t('addons.title')}</h2>

                        <div className={styles.addonsGrid}>
                            {t.raw('addons.items').map((addon, idx) => (
                                <div className={styles.addonCard} key={idx}>
                                    <div className={styles.addonHead}>
                                        <div className={`${styles.addonIcon} ${idx === 0 ? styles.purpleBox : idx === 1 ? styles.orangeBox : styles.blueBox}`}>
                                            <i className={`fa-solid ${idx === 0 ? 'fa-clipboard-check' : idx === 1 ? 'fa-map-location-dot' : 'fa-microscope'}`}></i>
                                        </div>
                                        <h3 className={styles.addonTitle}>{addon.title}</h3>
                                    </div>
                                    <p className={styles.addonDesc}>{addon.desc}</p>
                                    <div className={styles.addonPrice}>{addon.price} <span className={styles.perLabel}>{addon.unit}</span></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Factors */}
                <section className={styles.logicSection}>
                    <div className={styles.container}>
                        <h2 className={`${styles.stepTitle} ${styles.sectionHeaderCentered}`}>{t('factors.title')}</h2>

                        <div className={styles.logicGrid}>
                            {t.raw('factors.items').map((factor, idx) => (
                                <div className={styles.factorItem} key={idx}>
                                    <div className={styles.factorIcon}><i className={`fa-solid ${idx === 0 ? 'fa-industry' : idx === 1 ? 'fa-chart-line' : idx === 2 ? 'fa-globe' : 'fa-clock'}`}></i></div>
                                    <h4 className={styles.factorName}>{factor.title}</h4>
                                    <p className={factor.description}>{factor.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.container}>
                        <h2 className={styles.heroTitle}>{t('cta.title')}</h2>
                        <p className={styles.heroDesc}>{t('cta.desc')}</p>

                        <div className={styles.ctaGrid}>
                            <Link href="/book" className={styles.btnWhite}>
                                <i className="fa-solid fa-calendar-check"></i> {t('cta.primary')}
                            </Link>
                            <Link href="/book" className={styles.btnGhost}>
                                <i className="fa-solid fa-file-lines"></i> {t('cta.secondary')}
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
