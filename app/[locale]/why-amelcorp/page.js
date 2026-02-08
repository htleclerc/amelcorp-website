import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import styles from './why.module.css';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function WhyAmelcorpPage() {
    const t = useTranslations('WhyAmelcorp');

    return (
        <div className={styles.whyPage}>
            <Header />

            <main>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <div className={styles.heroGrid}>
                            <div>
                                <span className={styles.badge}>{t('hero.badge')}</span>
                                <h1 className={styles.heroTitle}>
                                    {t.rich('hero.title', {
                                        highlight: (chunks) => <span className={styles.highlight}>{chunks}</span>
                                    })}
                                </h1>
                                <p className={styles.heroDesc}>
                                    {t('hero.desc')}
                                </p>
                                <div className={styles.heroTrust}>
                                    <div className={styles.trustItem}>
                                        <i className={`fa-solid fa-shield-halved ${styles.trustIcon}`}></i> {t.raw('hero.trust')[0]}
                                    </div>
                                    <div className={styles.trustItem}>
                                        <i className={`fa-solid fa-file-contract ${styles.trustIcon}`}></i> {t.raw('hero.trust')[1]}
                                    </div>
                                    <div className={styles.trustItem}>
                                        <i className={`fa-solid fa-eye ${styles.trustIcon}`}></i> {t.raw('hero.trust')[2]}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.heroSidebar}>
                                <div className={styles.fraudBadge}>
                                    <span className={styles.fraudValue}>{t('hero.sidebar.fraud').split(' ')[0]}</span>
                                    <span className={styles.fraudLabel}>{t('hero.sidebar.fraud').split(' ').slice(1).join(' ')}</span>
                                </div>
                                <h3 className={styles.sidebarTitle}>{t('hero.sidebar.title')}</h3>
                                <div className={styles.sidebarList}>
                                    {t.raw('hero.sidebar.items').map((item, idx) => (
                                        <div className={styles.sidebarItem} key={idx}>
                                            <div className={styles.sidebarIconBox}>
                                                <i className={`fa-solid ${idx === 0 ? 'fa-magnifying-glass' : idx === 1 ? 'fa-file-circle-check' : 'fa-handshake-simple'}`}></i>
                                            </div>
                                            <div>
                                                <h4 className={styles.sidebarItemTitle}>{item.title}</h4>
                                                <p className={styles.sidebarItemDesc}>{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Positioning Matrix */}
                <section className={styles.matrixSection}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>{t('matrix.title')}</h2>
                            <p className={styles.sectionDesc}>{t('matrix.desc')}</p>
                        </div>

                        <div className={styles.matrixGrid}>
                            {/* What We Do */}
                            <div className={`${styles.matrixCard} ${styles.doCard}`}>
                                <div className={styles.cardHeader}>
                                    <div className={`${styles.headerIcon} ${styles.doIcon}`}>
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <h3 className={styles.cardTitle}>{t('matrix.do.title')}</h3>
                                </div>
                                <ul className={styles.cardList}>
                                    {t.raw('matrix.do.items').map((item, idx) => (
                                        <li className={`${styles.listItem} ${styles.doListItem}`} key={idx}>
                                            <i className={`fa-solid fa-check ${styles.listIcon}`}></i>
                                            <span><strong>{item.title}</strong> {item.desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* What We Don't Do */}
                            <div className={`${styles.matrixCard} ${styles.dontCard}`}>
                                <div className={styles.cardHeader}>
                                    <div className={`${styles.headerIcon} ${styles.dontIcon}`}>
                                        <i className="fa-solid fa-xmark"></i>
                                    </div>
                                    <h3 className={styles.cardTitle}>{t('matrix.dont.title')}</h3>
                                </div>
                                <ul className={styles.cardList}>
                                    {t.raw('matrix.dont.items').map((item, idx) => (
                                        <li className={`${styles.listItem} ${styles.dontListItem}`} key={idx}>
                                            <i className={`fa-solid fa-xmark ${styles.listIcon}`}></i>
                                            <span><strong>{item.title}</strong> {item.desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Methodology / How We Work */}
                <section className={styles.methodologySection}>
                    <div className={styles.container}>
                        <div className={styles.methodologyHeader}>
                            <div className={styles.headerLeft}>
                                <span className={styles.methodLabel}>{t('methodology.label')}</span>
                                <h2 className={styles.sectionTitle}>{t('methodology.title')}</h2>
                            </div>
                            <div className={styles.headerRight}>
                                <p>{t('methodology.desc')}</p>
                            </div>
                        </div>

                        <div className={styles.processTimeline}>
                            <div className={styles.timelineLine}></div>

                            {t.raw('methodology.steps').map((step, idx) => (
                                <div className={styles.stepWrapper} key={idx}>
                                    <div className={styles.stepNumber}>{idx + 1}</div>
                                    <div className={styles.stepContent}>
                                        <div className={styles.stepHeader}>
                                            <h3 className={styles.stepTitle}>{step.title}</h3>
                                            <span className={styles.stepTime}>{step.time}</span>
                                        </div>
                                        <p className={styles.stepDesc}>{step.desc}</p>
                                        <div className={styles.stepBadges}>
                                            {step.badges.map((badge, bIdx) => (
                                                <span className={styles.stepBadge} key={bIdx}>{badge}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Partner Network */}
                <section className={styles.partnersSection}>
                    <div className={styles.container}>
                        <div className={styles.partnersHeader}>
                            <h2 className={styles.sectionTitle} style={{ color: 'white' }}>{t('partners.title')}</h2>
                            <p className={styles.sectionDesc} style={{ color: '#94a3b8' }}>
                                {t('partners.desc')}
                            </p>
                        </div>

                        <div className={styles.partnersGrid}>
                            {t.raw('partners.items').map((partner, idx) => (
                                <div className={styles.partnerCard} key={idx}>
                                    <i className={`fa-solid ${idx === 0 ? 'fa-ship ' + styles.blueIcon : idx === 1 ? 'fa-magnifying-glass-chart ' + styles.emeraldIcon : idx === 2 ? 'fa-scale-balanced ' + styles.purpleIcon : 'fa-warehouse ' + styles.orangeIcon} ${styles.partnerIcon}`}></i>
                                    <h4 className={styles.partnerTitle}>{partner.title}</h4>
                                    <p className={styles.partnerDesc}>{partner.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <CTASection
                    title={t('cta.title')}
                    desc={t('cta.desc')}
                    primaryCtaText={t('cta.btn')}
                    primaryCtaLink="/book"
                    variant="dark"
                />
            </main>

            <Footer />
        </div>
    );
}
