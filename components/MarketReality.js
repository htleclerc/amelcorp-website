import { useTranslations } from 'next-intl';
import styles from './MarketReality.module.css';

const MarketReality = () => {
    const t = useTranslations('MarketReality');

    return (
        <section className={styles.section} id="why-us">
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <span className={styles.label}>{t('label')}</span>
                    <h2 className={styles.title}>
                        {t.rich('title', {
                            br: () => <br />
                        })}
                    </h2>
                    <p className={styles.description}>
                        {t('description')}
                    </p>
                    <a href="#risk" className={styles.link}>{t('riskLink')}</a>
                </div>

                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.icon}>🚫</div>
                        <h3 className={styles.cardTitle}>{t('fraudTitle')}</h3>
                        <p className={styles.cardText}>
                            {t('fraudText')}
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>⚠️</div>
                        <h3 className={styles.cardTitle}>{t('qualityTitle')}</h3>
                        <p className={styles.cardText}>
                            {t('qualityText')}
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>📦</div>
                        <h3 className={styles.cardTitle}>{t('customsTitle')}</h3>
                        <p className={styles.cardText}>
                            {t('customsText')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketReality;
