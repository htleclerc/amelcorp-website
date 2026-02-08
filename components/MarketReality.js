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
                <SectionHeader
                    label={t('label')}
                    title={t.rich('title', { br: () => <br /> })}
                    subtitle={t('description')}
                />

                <div className={styles.cards}>
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            description={card.text}
                        />
                    ))}
                </div>
                <div className={styles.footerLink}>
                    <Link href="#risk" className={styles.link}>{t('riskLink')}</Link>
                </div>
            </div>
        </section>
    );
};

export default MarketReality;
