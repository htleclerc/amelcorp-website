'use client';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './legal.module.css';

export default function TermsOfService() {
    const t = useTranslations('Terms');

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
                        {/* Section 1: Acceptance */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('acceptance.title')}</h2>
                            <p>{t('acceptance.intro')}</p>
                            <p>{t('acceptance.agreement')}</p>
                        </section>

                        {/* Section 2: Eligibility */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('eligibility.title')}</h2>
                            <p>{t('eligibility.age')}</p>
                            <p>{t('eligibility.authority')}</p>
                        </section>

                        {/* Section 3: Services */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('services.title')}</h2>
                            <p>{t('services.intro')}</p>
                            <ul className={styles.list}>
                                {t.raw('services.items').map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <p>{t('services.asis')}</p>
                        </section>

                        {/* Section 4: User Accounts */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('accounts.title')}</h2>
                            <p>{t('accounts.intro')}</p>
                            <ul className={styles.list}>
                                {t.raw('accounts.requirements').map((req, idx) => (
                                    <li key={idx}>{req}</li>
                                ))}
                            </ul>
                            <p>{t('accounts.responsibility')}</p>
                        </section>

                        {/* Section 5: Acceptable Use */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('use.title')}</h2>
                            <p>{t('use.intro')}</p>
                            <ul className={styles.list}>
                                {t.raw('use.prohibited').map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <p>{t('use.enforcement')}</p>
                        </section>

                        {/* Section 6: Intellectual Property */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('ip.title')}</h2>
                            <p>{t('ip.ownership')}</p>
                            <p>{t('ip.license')}</p>
                        </section>

                        {/* Section 7: Payments */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('payments.title')}</h2>
                            <p>{t('payments.intro')}</p>
                            <ul className={styles.list}>
                                {t.raw('payments.terms').map((term, idx) => (
                                    <li key={idx}>{term}</li>
                                ))}
                            </ul>
                        </section>

                        {/* Section 8: Disclaimer */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('disclaimer.title')}</h2>
                            <p className={styles.important}>{t('disclaimer.asis')}</p>
                            <p>{t('disclaimer.nowarranty')}</p>
                        </section>

                        {/* Section 9: Limitation */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('liability.title')}</h2>
                            <p>{t('liability.intro')}</p>
                            <p>{t('liability.cap')}</p>
                        </section>

                        {/* Section 10: Termination */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('termination.title')}</h2>
                            <p>{t('termination.rights')}</p>
                            <p>{t('termination.effect')}</p>
                        </section>

                        {/* Section 11: Governing Law */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('law.title')}</h2>
                            <p>{t('law.jurisdiction')}</p>
                        </section>

                        {/* Section 12: Changes */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>{t('changes.title')}</h2>
                            <p>{t('changes.updates')}</p>
                            <p>{t('changes.acceptance')}</p>
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
