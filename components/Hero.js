import { useTranslations } from 'next-intl';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    const t = useTranslations('Hero');

    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <div className={styles.badge}>{t('badge')}</div>
                    <h1 className={styles.title}>
                        {t.rich('title', {
                            br: () => <br />,
                            highlight: (chunks) => <span className={styles.highlight}>{chunks}</span>
                        })}
                    </h1>
                    <p className={styles.description}>
                        {t('description')}
                    </p>
                    <div className={styles.actions}>
                        <Link href="/book" className={`btn btn-blue ${styles.primaryBtn}`}>
                            {t('primaryCta')}
                        </Link>
                        <Link href="/services-overview" className={`btn ${styles.secondaryBtn}`}>
                            {t('secondaryCta')}
                        </Link>
                    </div>

                    <div className={styles.statsBar}>
                        <div className={styles.statItem}>
                            <span className={styles.icon}>🛡️</span>
                            <div>
                                <strong>Verified Suppliers</strong>
                                <span className={styles.statSub}>Strict background checks</span>
                            </div>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.icon}>📄</span>
                            <div>
                                <strong>Risk Reduction</strong>
                                <span className={styles.statSub}>Contracts & QC</span>
                            </div>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.icon}>🌍</span>
                            <div>
                                <strong>Global Reach</strong>
                                <span className={styles.statSub}>China, UAE, Turkey...</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.cardContainer}>
                    <div className={styles.pipelineCard}>
                        <div className={styles.cardHeader}>
                            <h3>Sourcing Pipeline</h3>
                            <span className={styles.statusBadge}>Active</span>
                        </div>

                        <ul className={styles.stepList}>
                            <li className={styles.stepItem}>
                                <div className={styles.stepIcon}>🔍</div>
                                <div className={styles.stepContent}>
                                    <strong>Supplier Identification</strong>
                                    <p>Found 12 manufacturers. 3 short-listed matching specs.</p>
                                </div>
                                <div className={styles.check}>✔</div>
                            </li>
                            <li className={styles.stepItem}>
                                <div className={styles.stepIcon}>👥</div>
                                <div className={styles.stepContent}>
                                    <strong>Verification & Audit</strong>
                                    <p>2 factories passed Level 2 audit. Licenses verified.</p>
                                </div>
                                <div className={styles.check}>✔</div>
                            </li>
                            <li className={styles.stepItemActive}>
                                <div className={styles.stepIcon}>📦</div>
                                <div className={styles.stepContent}>
                                    <strong>Sample Coordination</strong>
                                    <p>Samples shipped via DHL Express. ETA: 3 Days.</p>
                                </div>
                            </li>
                            <li className={styles.stepItemPending}>
                                <div className={styles.stepIcon}>▶</div>
                                <div className={styles.stepContent}>
                                    <strong>Contract & Production</strong>
                                    <p>Waiting for sample approval.</p>
                                </div>
                            </li>
                        </ul>

                        <div className={styles.savingsCard}>
                            <div className={styles.savingsIcon}>📉</div>
                            <div className={styles.savingsText}>
                                <strong>Avg Savings</strong>
                                <div className={styles.savingsValue}>18-25%</div>
                                <p>on landed costs vs domestic sourcing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
