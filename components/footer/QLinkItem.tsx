import styles from './Footer.module.scss';

export default function QLinkItem({ label, accent }: { label: string, accent: boolean | undefined }) {

    return (
        <div className={[styles.qlink__item, accent ? styles.qlink__accent : ' '].join(' ')}>
            {label}
        </div>
    )
}