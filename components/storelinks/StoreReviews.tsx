import styles from './StoreLinks.module.scss';

export default function StoreReviews() {
    return (
        <div className={styles.reviews}>
            <a href='https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck' target='_blank' rel='noopener noreferrer'>
                <div className={styles.stars}>★★★★★</div>
                <h5>Chrome Store reviews</h5>
            </a>
        </div>
    )
}