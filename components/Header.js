'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import styles from './Header.module.css';

const Header = () => {
    const t = useTranslations('Navigation');
    const ct = useTranslations('Common');
    const locale = useLocale();
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [langDropdownOpen, setLangDropdownOpen] = useState(false);

    const locales = [
        { code: 'en', flag: '🇺🇸', name: 'English' },
        { code: 'fr', flag: '🇫🇷', name: 'Français' },
        { code: 'es', flag: '🇪🇸', name: 'Español' }
    ];

    const currentLocaleObj = locales.find(l => l.code === locale) || locales[0];

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const isActive = (path) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <div className={styles.logoContainer}>
                    <Link href="/" className={styles.logoWrapper}>
                        <Image
                            src="/assets/Amelcorp Logo.jpg"
                            alt="AMELCORP LOGISTICS"
                            width={50}
                            height={50}
                            className={styles.logo}
                            priority
                        />
                    </Link>
                    <span className={styles.logoText}>AMELCORP <span className={styles.logoHighlight}>LOGISTICS</span></span>
                </div>

                <nav className={styles.nav}>
                    <Link
                        href="/services-overview"
                        className={`${styles.navLink} ${isActive('/services-overview') ? styles.navLinkActive : ''}`}
                    >
                        {t('services')}
                    </Link>
                    <Link
                        href="/industries"
                        className={`${styles.navLink} ${isActive('/industries') ? styles.navLinkActive : ''}`}
                    >
                        {t('industries')}
                    </Link>
                    <Link
                        href="/why-amelcorp"
                        className={`${styles.navLink} ${isActive('/why-amelcorp') ? styles.navLinkActive : ''}`}
                    >
                        {t('about')}
                    </Link>
                    <Link
                        href="/pricing"
                        className={`${styles.navLink} ${isActive('/pricing') ? styles.navLinkActive : ''}`}
                    >
                        {t('pricing')}
                    </Link>
                    <Link
                        href="/contact"
                        className={`${styles.navLink} ${isActive('/contact') ? styles.navLinkActive : ''}`}
                    >
                        {t('contact')}
                    </Link>
                </nav>

                <Link href="/book" className={styles.mobileBookIcon} title={ct('bookConsultation')}>
                    <i className="fa-solid fa-calendar-check"></i>
                </Link>

                <div className={styles.cta}>
                    <div
                        className={styles.langDropdownContainer}
                        onMouseEnter={() => setLangDropdownOpen(true)}
                        onMouseLeave={() => setLangDropdownOpen(false)}
                    >
                        <button className={styles.langDropdownTrigger}>
                            <i className={`fa-solid fa-globe ${styles.globeIcon}`}></i>
                        </button>

                        {langDropdownOpen && (
                            <div className={styles.langDropdownMenu}>
                                {locales.map((loc) => (
                                    <Link
                                        key={loc.code}
                                        href={pathname}
                                        locale={loc.code}
                                        className={`${styles.langDropdownItem} ${locale === loc.code ? styles.langItemActive : ''}`}
                                    >
                                        <span className={styles.flag}>{loc.flag}</span>
                                        <span className={styles.langFullName}>{loc.name}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/book" className={`btn btn-primary ${styles.ctaBtn}`}>
                        {ct('bookConsultation')}
                    </Link>

                    {/* Hamburger Button */}
                    <button
                        className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerOpen : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className={styles.mobileMenuOverlay} onClick={closeMobileMenu}>
                    <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.mobileMenuHeader}>
                            <span className={styles.mobileMenuTitle}>Menu</span>
                        </div>

                        {/* Mobile Navigation */}
                        <nav className={styles.mobileNav}>
                            <Link
                                href="/services-overview"
                                className={`${styles.mobileNavLink} ${isActive('/services-overview') ? styles.mobileNavLinkActive : ''}`}
                                onClick={closeMobileMenu}
                            >
                                <i className="fa-solid fa-briefcase"></i>
                                {t('services')}
                            </Link>
                            <Link
                                href="/industries"
                                className={`${styles.mobileNavLink} ${isActive('/industries') ? styles.mobileNavLinkActive : ''}`}
                                onClick={closeMobileMenu}
                            >
                                <i className="fa-solid fa-industry"></i>
                                {t('industries')}
                            </Link>
                            <Link
                                href="/why-amelcorp"
                                className={`${styles.mobileNavLink} ${isActive('/why-amelcorp') ? styles.mobileNavLinkActive : ''}`}
                                onClick={closeMobileMenu}
                            >
                                <i className="fa-solid fa-info-circle"></i>
                                {t('about')}
                            </Link>
                            <Link
                                href="/pricing"
                                className={`${styles.mobileNavLink} ${isActive('/pricing') ? styles.mobileNavLinkActive : ''}`}
                                onClick={closeMobileMenu}
                            >
                                <i className="fa-solid fa-tags"></i>
                                {t('pricing')}
                            </Link>
                            <Link
                                href="/contact"
                                className={`${styles.mobileNavLink} ${isActive('/contact') ? styles.mobileNavLinkActive : ''}`}
                                onClick={closeMobileMenu}
                            >
                                <i className="fa-solid fa-envelope"></i>
                                {t('contact')}
                            </Link>
                        </nav>

                        {/* Mobile Language Switcher (MOVED TO BOTTOM) */}
                        <div className={styles.mobileLangSwitcher}>
                            {locales.map((loc) => (
                                <Link
                                    key={loc.code}
                                    href={pathname}
                                    locale={loc.code}
                                    className={`${styles.mobileLangBtn} ${locale === loc.code ? styles.mobileLangBtnActive : ''}`}
                                    onClick={closeMobileMenu}
                                >
                                    <span className={styles.mobileFlag}>{loc.flag}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
