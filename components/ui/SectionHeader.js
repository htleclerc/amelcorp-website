import styles from './SectionHeader.module.css';

const SectionHeader = ({ label, title, subtitle, className = '' }) => {
    return (
        <div className={`${styles.header} ${className}`}>
            {label && <span className={styles.label}>{label}</span>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
    );
};

export default SectionHeader;
