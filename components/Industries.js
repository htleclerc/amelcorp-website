import { useTranslations } from 'next-intl';
import styles from './Industries.module.css';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import { ASSETS, ROUTES } from '@/lib/constants';

const Industries = () => {
    const t = useTranslations('Industries');
    const items = t.raw('items');

    const industryImages = [
        ASSETS.INDUSTRIES.ELECTRONICS,
        ASSETS.INDUSTRIES.BEAUTY,
        ASSETS.INDUSTRIES.TEXTILE
    ];

    const industryLinks = [
        `${ROUTES.INDUSTRIES}#electronics`,
        `${ROUTES.INDUSTRIES}#beauty`,
        `${ROUTES.INDUSTRIES}#textiles`
    ];

    return (
        <section className={styles.section} id="industries">
            <div className={`container ${styles.container}`}>
                <SectionHeader
                    label={t('label')}
                    title={t('title')}
                    subtitle={t('subtitle')}
                />

                <div className={styles.grid}>
                    {items.map((item, index) => (
                        <Card
                            key={index}
                            image={industryImages[index] || industryImages[0]}
                            title={item.title}
                            description={item.desc}
                            link={industryLinks[index] || ROUTES.INDUSTRIES}
                            linkText={t('exploreLink')}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
