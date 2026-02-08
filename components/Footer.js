import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import styles from './Footer.module.css';

const Footer = ({ showCTA = false }) => {
    const t = useTranslations('Footer');

    return (
        <footer className={styles.footer}>
            {/* CTA Band */}
            {showCTA && (
                <div className={styles.ctaBand} id="pricing">
                    <div className={`container ${styles.ctaContainer}`}>
                        <h2 className={styles.ctaTitle}>{t('ctaTitle')}</h2>
                        <p className={styles.ctaDesc}>{t('ctaDesc')}</p>
                        <div className={styles.ctaActions}>
                            <Link href="/book" className={`btn ${styles.btnWhite}`}>{t('ctaPrimary')}</Link>
                            <Link href="/pricing" className={`btn ${styles.btnOutline}`}>{t('ctaSecondary')}</Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Footer */}
            <div className={styles.mainFooter}>
                <div className={`container ${styles.footerGrid}`}>
                    <div className={styles.colBrand}>
                        <div className={styles.footerLogo}>
                            <span className={styles.logoText}>AMELCORP <span style={{ color: 'var(--primary-red)' }}>LOGISTICS</span></span>
                        </div>
                        <p className={styles.brandDesc}>
                            {t('brandDesc')}
                        </p>
                        <div className={styles.socials}>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <h3>{t('servicesTitle')}</h3>
                        <ul className={styles.linkList}>
                            <li><Link href="/services-overview/sourcing">{t('supplierSourcing')}</Link></li>
                            <li><Link href="/services-overview/retainer">{t('tradeManagement')}</Link></li>
                            <li><Link href="/services-overview/audit-qc">{t('qualityControl')}</Link></li>
                            <li><Link href="/services-overview/product-access">{t('productAccess')}</Link></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h3>{t('industriesTitle')}</h3>
                        <ul className={styles.linkList}>
                            <li><Link href="/industries#electronics">{t('electronics')}</Link></li>
                            <li><Link href="/industries#beauty">{t('beauty')}</Link></li>
                            <li><Link href="/industries#textiles">{t('textiles')}</Link></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h3>{t('contactTitle')}</h3>
                        <ul className={styles.linkList}>
                            <li className={styles.contactItem}>
                                <i className={`fa-solid fa-envelope ${styles.contactIcon}`}></i>
                                <span>contact@amelcorp.com</span>
                            </li>
                            <li className={styles.contactItem}>
                                <i className={`fa-solid fa-phone ${styles.contactIcon}`}></i>
                                <span>+1 (555) 123-4567</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.copyright}>
                <div className={`container ${styles.copyrightContainer}`}>
                    <p>{t('copyright', { year: new Date().getFullYear() })}</p>
                    <div className={styles.legalLinks}>
                        <Link href="/privacy">{t('privacy')}</Link>
                        <Link href="/terms">{t('terms')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
