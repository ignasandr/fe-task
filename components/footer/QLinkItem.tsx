import styles from './Footer.module.scss';

export default function QLinkItem({ label, accent }: { label: string, accent: boolean | undefined }) {

    return (
        <div className={[styles.item, accent ? styles.accent : ' '].join(' ')}>
            {label}
        </div>
    )
}