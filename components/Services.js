import { useTranslations } from 'next-intl';
import styles from './Services.module.css';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import { ASSETS, ROUTES } from '@/lib/constants';

const Services = () => {
    const t = useTranslations('Services');
    const items = t.raw('items');

    const serviceImages = [
        ASSETS.SERVICES.SOURCING,
        ASSETS.SERVICES.LOGISTICS,
        ASSETS.SERVICES.QC,
        ASSETS.SERVICES.PRODUCTS
    ];

    const serviceLinks = [
        ROUTES.SOURCING,
        ROUTES.RETAINER,
        ROUTES.AUDIT_QC,
        ROUTES.PRODUCT_ACCESS
    ];

    return (
        <section className={styles.section} id="services">
            <div className={`container ${styles.container}`}>
                <SectionHeader
                    label={t('label')}
                    title={t('title')}
                    subtitle={t('subtitle')}
                />

                <div className={styles.grid}>
                    {items.map((service, index) => (
                        <Card
                            key={index}
                            image={serviceImages[index] || serviceImages[0]}
                            title={service.title}
                            description={service.desc}
                            tag={service.tag}
                            link={serviceLinks[index] || ROUTES.SERVICES}
                            linkText={t('learnMore')}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
