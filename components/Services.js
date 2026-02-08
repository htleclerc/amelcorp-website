import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import styles from './Services.module.css';

const Services = () => {
    const t = useTranslations('Services');
    const items = t.raw('items');

    // Mapped images for the services items
    const serviceImages = [
        "/assets/service_sourcing.png",
        "/assets/service_logistics.png",
        "/assets/service_qc.png",
        "/assets/service_products.png"
    ];

    // Mapped links for the services items
    const serviceLinks = [
        "/services-overview/sourcing",
        "/services-overview/retainer",
        "/services-overview/audit-qc",
        "/services-overview/product-access"
    ];

    return (
        <section className={styles.section} id="services">
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <span className={styles.label}>{t('label')}</span>
                    <h2 className={styles.title}>{t('title')}</h2>
                    <p className={styles.subtitle}>{t('subtitle')}</p>
                </div>

                <div className={styles.grid}>
                    {items.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={serviceImages[index] || serviceImages[0]}
                                    alt={service.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className={styles.placeholderImage}
                                />
                                {service.tag && <span className={styles.tag}>{service.tag}</span>}
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDesc}>{service.desc}</p>
                                <Link href={serviceLinks[index] || "/"} className={styles.link}>{t('learnMore')}</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
