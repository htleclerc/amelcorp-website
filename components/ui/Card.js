import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import styles from './Card.module.css';

const Card = ({
    image,
    title,
    description,
    link,
    linkText,
    tag,
    icon,
    className = ''
}) => {
    return (
        <div className={`${styles.card} ${className}`}>
            {image && (
                <div className={styles.imageContainer}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                    {tag && <span className={styles.tag}>{tag}</span>}
                </div>
            )}
            <div className={styles.content}>
                {icon && <div className={styles.icon}>{icon}</div>}
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                {link && linkText && (
                    <Link href={link} className={styles.link}>
                        {linkText}
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Card;
