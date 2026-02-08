import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './industries.module.css';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function IndustriesPage() {
    const t = useTranslations('IndustriesPage');

    return (
        <div className={styles.industriesPage}>
            <Header />

            <main>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <span className={styles.badge}>{t('hero.badge')}</span>
                        <h1 className={styles.heroTitle}>{t('hero.title')}</h1>
                        <p className={styles.heroDesc}>
                            {t('hero.desc')}
                        </p>
                    </div>
                </section>

                {/* Main Content Sections */}
                <section className={styles.mainSection}>
                    <div className={styles.container}>
                        <div className={styles.industryGrid}>

                            {/* Industry 1: Electronics */}
                            <section className={styles.industrySection} id="electronics">
                                <div className={styles.imageBox}>
                                    <Image
                                        src="https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                        alt={t('electronics.title')}
                                        fill
                                        className={styles.industryImg}
                                    />
                                    <div className={styles.imgOverlay}>
                                        <div className={`${styles.industryIcon} ${styles.iconBlue}`}>
                                            <i className="fa-solid fa-microchip"></i>
                                        </div>
                                        <h2 className={styles.industryTitle}>{t('electronics.title')}</h2>
                                        <p className={styles.industrySub}>{t('electronics.subtitle')}</p>
                                    </div>
                                </div>
                                <div className={styles.contentBox}>
                                    <div>
                                        <div className={styles.detailGrid}>
                                            <div className={styles.detailCol}>
                                                <h3 className={styles.detailTitle}>{t('electronics.challenge.title')}</h3>
                                                <p className={styles.detailText}>
                                                    {t('electronics.challenge.desc')}
                                                </p>
                                            </div>
                                            <div className={styles.detailCol}>
                                                <h3 className={styles.detailTitle}>{t('electronics.solution.title')}</h3>
                                                <p className={styles.detailText}>
                                                    {t('electronics.solution.desc')}
                                                </p>
                                            </div>
                                        </div>

                                        <div className={styles.comparisonGrid}>
                                            <div className={`${styles.comparisonCard} ${styles.riskCard}`}>
                                                <div className={`${styles.cardTitle} ${styles.riskTitle}`}>
                                                    <i className="fa-solid fa-triangle-exclamation"></i> {t('electronics.risks.title')}
                                                </div>
                                                <ul className={styles.cardList}>
                                                    {t.raw('electronics.risks.items').map((item, idx) => (
                                                        <li key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className={`${styles.comparisonCard} ${styles.standardCard}`}>
                                                <div className={`${styles.cardTitle} ${styles.standardTitle}`}>
                                                    <i className="fa-solid fa-clipboard-check"></i> {t('electronics.standard.title')}
                                                </div>
                                                <ul className={styles.cardList}>
                                                    {t.raw('electronics.standard.items').map((item, idx) => (
                                                        <li key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.footerActions}>
                                        <div className={styles.footerText}>
                                            <span className={styles.textSmall}>{t('electronics.cta.small')}</span>
                                            <span className={styles.textBold}>{t('electronics.cta.bold')}</span>
                                        </div>
                                        <Link href="/book" className={styles.btnAction}>
                                            {t('electronics.cta.btn')} <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </section>

                            {/* Industry 2: Beauty */}
                            <section className={`${styles.industrySection} ${styles.industrySectionReverse}`} id="beauty">
                                <div className={styles.imageBox}>
                                    <Image
                                        src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                        alt={t('beauty.title')}
                                        fill
                                        className={styles.industryImg}
                                    />
                                    <div className={styles.imgOverlay}>
                                        <div className={`${styles.industryIcon} ${styles.iconPink}`}>
                                            <i className="fa-solid fa-spray-can-sparkles"></i>
                                        </div>
                                        <h2 className={styles.industryTitle}>{t('beauty.title')}</h2>
                                        <p className={styles.industrySub}>{t('beauty.subtitle')}</p>
                                    </div>
                                </div>
                                <div className={styles.contentBox}>
                                    <div>
                                        <div className={styles.detailGrid}>
                                            <div className={styles.detailCol}>
                                                <h3 className={styles.detailTitle}>{t('beauty.challenge.title')}</h3>
                                                <p className={styles.detailText}>
                                                    {t('beauty.challenge.desc')}
                                                </p>
                                            </div>
                                            <div className={styles.detailCol}>
                                                <h3 className={styles.detailTitle}>{t('beauty.solution.title')}</h3>
                                                <p className={styles.detailText}>
                                                    {t('beauty.solution.desc')}
                                                </p>
                                            </div>
                                        </div>

                                        <div className={styles.comparisonGrid}>
                                            <div className={`${styles.comparisonCard} ${styles.riskCard}`}>
                                                <div className={`${styles.cardTitle} ${styles.riskTitle}`}>
                                                    <i className="fa-solid fa-triangle-exclamation"></i> {t('beauty.risks.title')}
                                                </div>
                                                <ul className={styles.cardList}>
                                                    {t.raw('beauty.risks.items').map((item, idx) => (
                                                        <li key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className={`${styles.comparisonCard} ${styles.standardCard}`}>
                                                <div className={`${styles.cardTitle} ${styles.standardTitle}`}>
                                                    <i className="fa-solid fa-clipboard-check"></i> {t('beauty.standard.title')}
                                                </div>
                                                <ul className={styles.cardList}>
                                                    {t.raw('beauty.standard.items').map((item, idx) => (
                                                        <li key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.footerActions}>
                                        <div className={styles.footerText}>
                                            <span className={styles.textSmall}>{t('beauty.cta.small')}</span>
                                            <span className={styles.textBold}>{t('beauty.cta.bold')}</span>
                                        </div>
                                        <Link href="/book" className={styles.btnAction}>
                                            {t('beauty.cta.btn')} <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </section>

                            {/* Industry 3: Textiles */}
                            <section className={styles.industrySection} id="textiles">
                                <div className={styles.imageBox}>
                                    <Image
                                        src="/assets/industries/textiles.png"
                                        alt={t('textiles.title')}
                                        fill
                                        className={styles.industryImg}
                                    />
                                    <div className={styles.imgOverlay}>
                                        <div className={`${styles.industryIcon} ${styles.iconIndigo}`}>
                                            <i className="fa-solid fa-shirt"></i>
                                        </div>
                                        <h2 className={styles.industryTitle}>{t('textiles.title')}</h2>
                                        <p className={styles.industrySub}>{t('textiles.subtitle')}</p>
                                    </div>
                                </div>
                                <div className={styles.contentBox}>
                                    <div>
                                        <div className={styles.detailGrid}>
                                            <div className={styles.detailCol}>
                                                <h3 className={styles.detailTitle}>{t('textiles.challenge.title')}</h3>
                                                <p className={styles.detailText}>
                                                    {t('textiles.challenge.desc')}
                                                </p>
                                            </div>
                                            <div className={styles.detailCol}>
                                                <h3 className={styles.detailTitle}>{t('textiles.solution.title')}</h3>
                                                <p className={styles.detailText}>
                                                    {t('textiles.solution.desc')}
                                                </p>
                                            </div>
                                        </div>

                                        <div className={styles.comparisonGrid}>
                                            <div className={`${styles.comparisonCard} ${styles.riskCard}`}>
                                                <div className={`${styles.cardTitle} ${styles.riskTitle}`}>
                                                    <i className="fa-solid fa-triangle-exclamation"></i> {t('textiles.risks.title')}
                                                </div>
                                                <ul className={styles.cardList}>
                                                    {t.raw('textiles.risks.items').map((item, idx) => (
                                                        <li key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className={`${styles.comparisonCard} ${styles.standardCard}`}>
                                                <div className={`${styles.cardTitle} ${styles.standardTitle}`}>
                                                    <i className="fa-solid fa-clipboard-check"></i> {t('textiles.standard.title')}
                                                </div>
                                                <ul className={styles.cardList}>
                                                    {t.raw('textiles.standard.items').map((item, idx) => (
                                                        <li key={idx}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.footerActions}>
                                        <div className={styles.footerText}>
                                            <span className={styles.textSmall}>{t('textiles.cta.small')}</span>
                                            <span className={styles.textBold}>{t('textiles.cta.bold')}</span>
                                        </div>
                                        <Link href="/book" className={styles.btnAction}>
                                            {t('textiles.cta.btn')} <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </section>

                {/* Global CTA Section */}
                <section className={styles.globalCta}>
                    <div className={styles.patternBox}></div>
                    <div className={styles.container}>
                        <div className={styles.ctaGrid}>
                            <div className={styles.ctaLeft}>
                                <h2 className={styles.ctaTitle}>{t('globalCta.title')}</h2>
                                <p className={styles.ctaDesc}>
                                    {t('globalCta.desc')}
                                </p>
                                <div className={styles.checkList}>
                                    {t.raw('globalCta.checks').map((label, idx) => (
                                        <div className={styles.checkLine} key={idx}>
                                            <div className={styles.checkCircle}>
                                                <i className="fa-solid fa-check"></i>
                                            </div>
                                            <span className={styles.checkLabel}>{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.ctaRight}>
                                <div className={styles.ctaCard}>
                                    <h3 className={styles.cardHead}>{t('globalCta.card.title')}</h3>
                                    <p className={styles.cardLead}>{t('globalCta.card.lead')}</p>

                                    <div className={styles.feeBox}>
                                        <span className={styles.feeLabel}>{t('globalCta.card.feeLabel')}</span>
                                        <span className={styles.feeValue}>{t('globalCta.card.feeValue')}</span>
                                    </div>
                                    <Link href="/book" className={styles.btnFullRed}>
                                        {t('globalCta.card.btn')}
                                    </Link>
                                    <p className={styles.cardFoot}>{t('globalCta.card.foot')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
