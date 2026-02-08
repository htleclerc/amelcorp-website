import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import styles from './Industries.module.css';

const Industries = () => {
    const t = useTranslations('Industries');
    const items = t.raw('items');

    const industryImages = [
        "/assets/industry_electronics.png",
        "/assets/industry_beauty.png",
        "/assets/industry_textile.png"
    ];

    const industryLinks = [
        "/industries#electronics",
        "/industries#beauty",
        "/industries#textiles"
    ];

    return (
        <section className={styles.section} id="industries">
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <span className={styles.label}>{t('label')}</span>
                    <h2 className={styles.title}>{t('title')}</h2>
                    <p className={styles.subtitle}>{t('subtitle')}</p>
                </div>

                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imagePlaceholder}>
                                <Image
                                    src={industryImages[index] || industryImages[0]}
                                    alt={item.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.desc}</p>
                                <Link href={industryLinks[index] || "/industries"} className={styles.link}>{t('exploreLink')}</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
