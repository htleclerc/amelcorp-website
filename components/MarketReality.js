import { useTranslations } from 'next-intl';
import styles from './MarketReality.module.css';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import { Link } from '@/i18n/navigation';

const MarketReality = () => {
    const t = useTranslations('MarketReality');

    const cards = [
        { icon: "🚫", title: t('fraudTitle'), text: t('fraudText') },
        { icon: "⚠️", title: t('qualityTitle'), text: t('qualityText') },
        { icon: "📦", title: t('customsTitle'), text: t('customsText') }
    ];

    return (
        <section className={styles.section} id="why-us">
            <div className={`container ${styles.container}`}>
                <div className={styles.leftCol}>
                    <span className={styles.label}>{t('label')}</span>
                    <h2 className={styles.title}>
                        {t.rich('title', {
                            br: () => <br className={styles.desktopBr} />
                        })}
                    </h2>
                    <p className={styles.description}>{t('description')}</p>
                    <div className={styles.desktopLink}>
                        <Link href="#risk" className={styles.link}>{t('riskLink')}</Link>
                    </div>
                </div>

                <div className={styles.rightCol}>
                    <div className={styles.cards}>
                        {cards.map((card, index) => (
                            <div className={styles.card} key={index}>
                                <div className={styles.iconContainer}>
                                    <span className={styles.icon}>{card.icon}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <p className={styles.cardText}>{card.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.mobileLink}>
                        <Link href="#risk" className={styles.link}>{t('riskLink')}</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketReality;
