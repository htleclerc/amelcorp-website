import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import styles from './access.module.css';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export const metadata = {
    title: 'Curated Product Access - Amelcorp Logistics',
};

export default function ProductAccessService() {
    const t = useTranslations('ServicesProduct');

    return (
        <div className={styles.accessPage}>
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
                                    <Link href="#preview" className={styles.btnOutline}>
                                        {t('hero.request')}
                                    </Link>
                                </div>
                            </div>

                            {/* Impact Card */}
                            <div className={styles.impactCard}>
                                <h3 className={styles.impactTitle}>{t('impact.title')}</h3>
                                <div className={styles.impactList}>
                                    <div className={styles.impactItem}>
                                        <div className={`${styles.impactIcon} ${styles.iconEmerald}`}>
                                            <i className="fa-solid fa-check-double"></i>
                                        </div>
                                        <div>
                                            <div className={styles.impactValue}>{t('impact.verified.value')}</div>
                                            <div className={styles.impactLabel}>{t('impact.verified.label')}</div>
                                        </div>
                                    </div>
                                    <div className={styles.impactItem}>
                                        <div className={`${styles.impactIcon} ${styles.iconBlue}`}>
                                            <i className="fa-solid fa-tag"></i>
                                        </div>
                                        <div>
                                            <div className={styles.impactValue}>{t('impact.whiteLabel.value')}</div>
                                            <div className={styles.impactLabel}>{t('impact.whiteLabel.label')}</div>
                                        </div>
                                    </div>
                                    <div className={styles.impactItem}>
                                        <div className={`${styles.impactIcon} ${styles.iconRed}`}>
                                            <i className="fa-solid fa-ban"></i>
                                        </div>
                                        <div>
                                            <div className={styles.impactValue}>{t('impact.zero.value')}</div>
                                            <div className={styles.impactLabel}>{t('impact.zero.label')}</div>
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
                                {/* Not Dropshipping Info */}
                                <div className={styles.infoCallout}>
                                    <h2 className={styles.infoTitle}>{t('notDropshipping.title')}</h2>
                                    <p className={styles.infoText}>
                                        {t('notDropshipping.desc')}
                                    </p>
                                    <div className={styles.checkGrid}>
                                        <div className={styles.checkItem}>
                                            <i className={`fa-solid fa-xmark ${styles.iconX}`}></i>
                                            <div className={styles.checkText}>
                                                <strong>{t('notDropshipping.noRoulette.title')}</strong>
                                                <span>{t('notDropshipping.noRoulette.desc')}</span>
                                            </div>
                                        </div>
                                        <div className={styles.checkItem}>
                                            <i className={`fa-solid fa-check ${styles.iconCheck}`}></i>
                                            <div className={styles.checkText}>
                                                <strong>{t('notDropshipping.directFactory.title')}</strong>
                                                <span>{t('notDropshipping.directFactory.desc')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Curated Categories */}
                                <div id="categories">
                                    <h2 className={styles.sectionTitle}>{t('categories.title')}</h2>
                                    <div className={styles.titleUnderline}></div>
                                    <p className={styles.sectionLead}>
                                        {t('categories.lead')}
                                    </p>

                                    <div className={styles.categoryGrid}>
                                        {/* Category 1 */}
                                        <div className={styles.categoryCard}>
                                            <div className={styles.categoryImgBox}>
                                                <Image
                                                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/5258dabf05-e53ae6996f74cbabde03.png"
                                                    alt={t('categories.beauty.name')}
                                                    width={400}
                                                    height={300}
                                                    className={styles.categoryImg}
                                                />
                                                <div className={styles.imgOverlay}></div>
                                                <span className={styles.categoryName}>{t('categories.beauty.name')}</span>
                                            </div>
                                            <div className={styles.categoryContent}>
                                                <ul className={styles.categoryList}>
                                                    {t.raw('categories.beauty.items').map((item, idx) => (
                                                        <li className={styles.categoryListItem} key={idx}>
                                                            <i className={`fa-solid fa-circle-check ${styles.checkIconSmall}`}></i>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Category 2 */}
                                        <div className={styles.categoryCard}>
                                            <div className={styles.categoryImgBox}>
                                                <Image
                                                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ed1049b0b4-318be3c28320fb987b0c.png"
                                                    alt={t('categories.tech.name')}
                                                    width={400}
                                                    height={300}
                                                    className={styles.categoryImg}
                                                />
                                                <div className={styles.imgOverlay}></div>
                                                <span className={styles.categoryName}>{t('categories.tech.name')}</span>
                                            </div>
                                            <div className={styles.categoryContent}>
                                                <ul className={styles.categoryList}>
                                                    {t.raw('categories.tech.items').map((item, idx) => (
                                                        <li className={styles.categoryListItem} key={idx}>
                                                            <i className={`fa-solid fa-circle-check ${styles.checkIconSmall}`}></i>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Category 3 */}
                                        <div className={styles.categoryCard}>
                                            <div className={styles.categoryImgBox}>
                                                <Image
                                                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e6a965ed92-092104ee5acebcaa2d7e.png"
                                                    alt={t('categories.textiles.name')}
                                                    width={400}
                                                    height={300}
                                                    className={styles.categoryImg}
                                                />
                                                <div className={styles.imgOverlay}></div>
                                                <span className={styles.categoryName}>{t('categories.textiles.name')}</span>
                                            </div>
                                            <div className={styles.categoryContent}>
                                                <ul className={styles.categoryList}>
                                                    {t.raw('categories.textiles.items').map((item, idx) => (
                                                        <li className={styles.categoryListItem} key={idx}>
                                                            <i className={`fa-solid fa-circle-check ${styles.checkIconSmall}`}></i>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* White Label Section */}
                                <div className={styles.whiteLabelSection}>
                                    <div className={styles.flexGroup}>
                                        <h2 className={styles.sectionTitle} style={{ marginBottom: 0 }}>{t('whiteLabel.title')}</h2>
                                        <span className={styles.scalableBadge}>{t('whiteLabel.badge')}</span>
                                    </div>
                                    <div className={styles.titleUnderline}></div>

                                    <div className={styles.whiteLabelGrid}>
                                        <div className={styles.whiteLabelText}>
                                            <p className={styles.sectionLead} style={{ marginBottom: '1.5rem' }}>
                                                {t('whiteLabel.lead')}
                                            </p>
                                            <ul className={styles.featureListWL}>
                                                <li className={styles.featureItemWL}>
                                                    <div className={styles.wlIconCircle}>
                                                        <i className="fa-solid fa-paint-roller"></i>
                                                    </div>
                                                    <div className={styles.wlInfo}>
                                                        <h4>{t('whiteLabel.branding.title')}</h4>
                                                        <p>{t('whiteLabel.branding.desc')}</p>
                                                    </div>
                                                </li>
                                                <li className={styles.featureItemWL}>
                                                    <div className={styles.wlIconCircle}>
                                                        <i className="fa-solid fa-boxes-stacked"></i>
                                                    </div>
                                                    <div className={styles.wlInfo}>
                                                        <h4>{t('whiteLabel.pricing.title')}</h4>
                                                        <p>{t('whiteLabel.pricing.desc')}</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className={styles.processCard}>
                                            <div className={styles.processBadge}>{t('process.badge')}</div>
                                            <h3 className={styles.processTitle}>{t('process.title')}</h3>
                                            <div className={styles.stepList}>
                                                <div className={styles.stepLine}></div>
                                                {t.raw('process.steps').map((step, idx) => (
                                                    <div className={styles.stepItem} key={idx}>
                                                        <div className={styles.stepNumber}>{idx + 1}</div>
                                                        <span className={styles.stepText}>{step}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <aside>
                                <div className={styles.sidebar}>
                                    <div className={styles.pricingCard}>
                                        <div className={styles.cardHeader}>
                                            <h3 className={styles.cardTitle}>{t('sidebar.title')}</h3>
                                            <span className={styles.badgePremium}>{t('sidebar.badge')}</span>
                                        </div>
                                        <p className={styles.cardDesc}>
                                            {t('sidebar.desc')}
                                        </p>

                                        <div className={styles.feeBox}>
                                            <div className={styles.feeRow}>
                                                <span className={styles.feeLabel}>{t('sidebar.feeLabel')}</span>
                                                <span className={styles.feeValue}>{t('sidebar.feeValue')}</span>
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
                                        <div className={styles.cardLink}>
                                            <Link href="#preview" className={styles.textLink}>
                                                {t('sidebar.request')}
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Testimonial Card */}
                                    <div className={styles.testimonialCard}>
                                        <div className={styles.clientInfo}>
                                            <div className={styles.clientAvatar}>
                                                <Image
                                                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                                                    alt={t('sidebar.testimonial.author')}
                                                    width={40}
                                                    height={40}
                                                    className={styles.avatarImg}
                                                />
                                            </div>
                                            <div className={styles.clientMeta}>
                                                <h4>{t('sidebar.testimonial.author')}</h4>
                                                <p>{t('sidebar.testimonial.role')}</p>
                                            </div>
                                        </div>
                                        <div className={styles.stars}>
                                            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                        </div>
                                        <p className={styles.quote}>
                                            {t('sidebar.testimonial.quote')}
                                        </p>
                                        <div className={styles.date}>
                                            <i className="fa-solid fa-calendar-check"></i> {t('sidebar.testimonial.date')}
                                        </div>
                                    </div>
                                </div>
                            </aside>

                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className={styles.faqSection}>
                    <div className="container">
                        <div className={styles.faqContainer}>
                            <h2 className={styles.faqTitle}>{t('faq.title')}</h2>
                            <div className={styles.faqUnderline}></div>

                            <div className={styles.faqList}>
                                {t.raw('faq.items').map((item, idx) => (
                                    <div className={styles.faqItem} key={idx}>
                                        <h3 className={styles.faqQuestion}>{item.q}</h3>
                                        <p className={styles.faqAnswer}>
                                            {item.a}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className={styles.finalCta}>
                    <div className="container">
                        <h2 className={styles.ctaTitle}>{t('footer.title')}</h2>
                        <p className={styles.ctaDesc}>
                            {t('footer.desc')}
                        </p>
                        <div className={styles.ctaActions}>
                            <Link href="/book" className={styles.btnLargeRed}>
                                {t('footer.btn')} <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                            <Link href="#preview" className={styles.btnOutline}>
                                {t('footer.request')}
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

