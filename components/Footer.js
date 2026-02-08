import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import CTASection from './CTASection';
import styles from './Footer.module.css';

const Footer = ({ showCTA = false }) => {
    const t = useTranslations('Footer');
    const nt = useTranslations('Navigation');
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            {/* CTA Band */}
            {showCTA && (
                <CTASection
                    title={t('ctaTitle')}
                    desc={t('ctaDesc')}
                    primaryCtaText={t('ctaPrimary')}
                    primaryCtaLink="/book"
                    secondaryCtaText={t('ctaSecondary')}
                    secondaryCtaLink="/pricing"
                    variant="blue"
                />
            )}

            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <div className={styles.logoRow}>
                            <Image
                                src="/assets/Amelcorp Logo.jpg"
                                alt="Amelcorp"
                                width={40}
                                height={40}
                                className={styles.logo}
                            />
                            <span className={styles.brandName}>AMELCORP <span className={styles.brandHighlight}>LOGISTICS</span></span>
                        </div>
                        <p className={styles.brandDesc}>{t('brandDesc')}</p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="#" className={styles.socialLink} aria-label="X">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                        </div>
                    </div>

                    <div className={styles.linksGrid}>
                        <div className={styles.linkCol}>
                            <h4 className={styles.colTitle}>{t('servicesTitle')}</h4>
                            <ul className={styles.list}>
                                <li><Link href="/services-overview/sourcing">{t('supplierSourcing')}</Link></li>
                                <li><Link href="/services-overview/retainer">{t('tradeManagement')}</Link></li>
                                <li><Link href="/services-overview/audit-qc">{t('qualityControl')}</Link></li>
                                <li><Link href="/services-overview/product-access">{t('productAccess')}</Link></li>
                            </ul>
                        </div>

                        <div className={styles.linkCol}>
                            <h4 className={styles.colTitle}>{t('industriesTitle')}</h4>
                            <ul className={styles.list}>
                                <li><Link href="/industries#electronics">{t('electronics')}</Link></li>
                                <li><Link href="/industries#beauty">{t('beauty')}</Link></li>
                                <li><Link href="/industries#textiles">{t('textiles')}</Link></li>
                            </ul>
                        </div>

                        <div className={styles.linkCol}>
                            <h4 className={styles.colTitle}>{t('contactTitle')}</h4>
                            <ul className={styles.list}>
                                <li className={styles.contactItem}>
                                    <i className="fa-solid fa-envelope"></i>
                                    <span>contact@amelcorp.com</span>
                                </li>
                                <li className={styles.contactItem}>
                                    <i className="fa-solid fa-phone"></i>
                                    <span>+1 713 300 8727</span>
                                </li>
                                <li className={styles.contactItem}>
                                    <i className="fa-solid fa-phone-volume"></i>
                                    <span>+1 866 439 2660</span>
                                </li>
                                <li className={styles.contactItem}>
                                    <i className="fa-solid fa-location-dot"></i>
                                    <span>3050 Post Oak Blvd, Suite 510, Houston, TX 77056</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        {t('copyright', { year: currentYear })}
                    </p>
                    <div className={styles.legalLinks}>
                        <Link href="/privacy" className={styles.legalLink}>{t('privacy')}</Link>
                        <Link href="/terms" className={styles.legalLink}>{t('terms')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
