'use client';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '../terms/legal.module.css';

export default function PrivacyPolicy() {
    const t = useTranslations('Privacy');

    return (
        <>
            <Header />
            <main className={styles.legalPage}>
                <div className={styles.hero}>
                    <div className="container">
                        <h1 className={styles.heroTitle}>{t('title')}</h1>
                        <p className={styles.lastUpdated}>{t('lastUpdated')}</p>
                    </div>
                </div>

                <div className="container">
                    <div className={styles.content}>
                        {/* Section 1: Introduction */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('intro.title')}</h2>
                            <p>{t('intro.company')}</p>
                            <p>{t('intro.commitment')}</p>
                        </section>

                        {/* Section 2: Information We Collect */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('collect.title')}</h2>

                            <h3 className={styles.subsectionTitle}>{t('collect.personal.title')}</h3>
                            <p>{t('collect.personal.intro')}</p>
                            <ul className={styles.list}>
                                {t.raw('collect.personal.items').map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>

                            <h3 className={styles.subsectionTitle}>{t('collect.nonpersonal.title')}</h3>
                            <p>{t('collect.nonpersonal.intro')}</p>
                            <ul className={styles.list}>
                                {t.raw('collect.nonpersonal.items').map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>

                            <h3 className={styles.subsectionTitle}>{t('collect.cookies.title')}</h3>
                            <p>{t('collect.cookies.intro')}</p>
                            <p>{t('collect.cookies.control')}</p>
                        </section>

                        {/* Section 3: How We Use Information */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('usage.title')}</h2>
                            <ul className={styles.list}>
                                {t.raw('usage.purposes').map((purpose, idx) => (
                                    <li key={idx}>{purpose}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Section 4: Legal Basis (GDPR) */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('legal.title')}</h2>
                            <p>{t('legal.intro')}</p>
                            <ul className={styles.list}>
                                {t.raw('legal.bases').map((basis, idx) => (
                                    <li key={idx}>{basis}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Section 5: Sharing */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('sharing.title')}</h2>
                            <p className={styles.important}>{t('sharing.nosell')}</p>
                            <p>{t('sharing.intro')}</p>
                            <ul className={styles.list}>
                                {t.raw('sharing.parties').map((party, idx) => (
                                    <li key={idx}>{party}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Section 6: Data Security */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('security.title')}</h2>
                            <p>{t('security.measures')}</p>
                            <p>{t('security.disclaimer')}</p>
                        </section>

                        {/* Section 7: Your Rights */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('rights.title')}</h2>
                            <p>{t('rights.intro')}</p>
                            <ul className={styles.list}>
                                {t.raw('rights.list').map((right, idx) => (
                                    <li key={idx}>{right}</li>
                                ))}
                            </ul>
                            <p>{t('rights.contact')}</p>
                        </section>

                        {/* Section 8: Data Retention */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('retention.title')}</h2>
                            <p>{t('retention.policy')}</p>
                        </section>

                        {/* Section 9: International Transfers */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('international.title')}</h2>
                            <p>{t('international.transfers')}</p>
                        </section>

                        {/* Section 10: Children's Privacy */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('children.title')}</h2>
                            <p>{t('children.policy')}</p>
                        </section>

                        {/* Section 11: Changes */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('changes.title')}</h2>
                            <p>{t('changes.updates')}</p>
                        </section>

                        {/* Contact Section */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('contact.title')}</h2>
                            <p>{t('contact.intro')}</p>
                            <div className={styles.contactInfo}>
                                <p><strong>Amelcorp Logistics</strong></p>
                                <p>Email: <a href="mailto:contact@amelcorp.com">contact@amelcorp.com</a></p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
