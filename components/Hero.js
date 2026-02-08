import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import styles from './Hero.module.css';

const Hero = () => {
    const t = useTranslations('Hero');

    return (
        <section className={styles.hero}>
            {/* Background Image using Next.js Image for optimization */}
            <div className={styles.bgWrapper}>
                <Image
                    src="/assets/hero_bg.png"
                    alt="Global Sourcing Background"
                    fill
                    priority
                    quality={85}
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <div className={styles.badge}>{t('badge')}</div>
                    <h1 className={styles.title}>
                        {t.rich('title', {
                            br: (chunks) => <br />,
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
                                <strong>{t('stats.verified.title')}</strong>
                                <span className={styles.statSub}>{t('stats.verified.sub')}</span>
                            </div>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.icon}>📄</span>
                            <div>
                                <strong>{t('stats.risk.title')}</strong>
                                <span className={styles.statSub}>{t('stats.risk.sub')}</span>
                            </div>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.icon}>🌍</span>
                            <div>
                                <strong>{t('stats.reach.title')}</strong>
                                <span className={styles.statSub}>{t('stats.reach.sub')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.cardContainer}>
                    <div className={styles.pipelineCard}>
                        <div className={styles.cardHeader}>
                            <h3>{t('pipeline.title')}</h3>
                            <span className={styles.statusBadge}>{t('pipeline.status')}</span>
                        </div>

                        <ul className={styles.stepList}>
                            <li className={styles.stepItem}>
                                <div className={styles.stepIcon}>🔍</div>
                                <div className={styles.stepContent}>
                                    <strong>{t('pipeline.steps.identification.title')}</strong>
                                    <p>{t('pipeline.steps.identification.desc')}</p>
                                </div>
                                <div className={styles.check}>✔</div>
                            </li>
                            <li className={styles.stepItem}>
                                <div className={styles.stepIcon}>👥</div>
                                <div className={styles.stepContent}>
                                    <strong>{t('pipeline.steps.audit.title')}</strong>
                                    <p>{t('pipeline.steps.audit.desc')}</p>
                                </div>
                                <div className={styles.check}>✔</div>
                            </li>
                            <li className={styles.stepItemActive}>
                                <div className={styles.stepIcon}>📦</div>
                                <div className={styles.stepContent}>
                                    <strong>{t('pipeline.steps.samples.title')}</strong>
                                    <p>{t('pipeline.steps.samples.desc')}</p>
                                </div>
                            </li>
                            <li className={styles.stepItemPending}>
                                <div className={styles.stepIcon}>▶</div>
                                <div className={styles.stepContent}>
                                    <strong>{t('pipeline.steps.production.title')}</strong>
                                    <p>{t('pipeline.steps.production.desc')}</p>
                                </div>
                            </li>
                        </ul>

                        <div className={styles.savingsCard}>
                            <div className={styles.savingsIcon}>📉</div>
                            <div className={styles.savingsText}>
                                <strong>{t('pipeline.savings.label')}</strong>
                                <div className={styles.savingsValue}>18-25%</div>
                                <p>{t('pipeline.savings.sub')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
