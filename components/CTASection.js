import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import styles from './CTASection.module.css';

const CTASection = ({
    title,
    desc,
    primaryCtaText,
    primaryCtaLink = "/book",
    secondaryCtaText,
    secondaryCtaLink = "/pricing",
    note,
    variant = "blue" // blue, red, dark, horizontal
}) => {
    if (variant === "horizontal") {
        return (
            <section className={styles.horizontal}>
                <div className="container">
                    <div className={styles.horizontalFlex}>
                        <div className={styles.horizontalContent}>
                            <h3 className={styles.horizontalTitle}>{title}</h3>
                            <p className={styles.horizontalDesc}>{desc}</p>
                        </div>
                        <div className={styles.horizontalActions}>
                            {secondaryCtaText && (
                                <Link href={secondaryCtaLink} className={`btn ${styles.btnOutline}`}>
                                    {secondaryCtaText}
                                </Link>
                            )}
                            <Link href={primaryCtaLink} className="btn btn-primary">
                                {primaryCtaText} <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={`${styles.ctaSection} ${styles[variant]}`}>
            <div className="container">
                <h2 className={styles.ctaTitle}>{title}</h2>
                <p className={styles.ctaDesc}>{desc}</p>
                <div className={styles.ctaActions}>
                    <Link href={primaryCtaLink} className={`btn ${variant === 'white' ? styles.btnDark : styles.btnWhite}`}>
                        {primaryCtaText}
                    </Link>
                    {secondaryCtaText && (
                        <Link href={secondaryCtaLink} className={`btn ${styles.btnOutline}`}>
                            {secondaryCtaText}
                        </Link>
                    )}
                </div>
                {note && <p className={styles.ctaNote}>{note}</p>}
            </div>
        </section>
    );
};

export default CTASection;
