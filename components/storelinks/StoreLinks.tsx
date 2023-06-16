import styles from './StoreLinks.module.scss';
import StoreLinkItem from './StoreLinkItem';
import StoreReviews from './StoreReviews';

const storeLinks: { store: 'chrome' | 'apple', href: string }[] = [
    { store: 'chrome', href: 'https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk'},
    { store: 'apple', href: 'https://apps.apple.com/app/ratepunk/id1607823726'}
]

export default function StoreLinks() {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <ul className={styles.links}>
                    {storeLinks.map(link => (
                        <li key={link.store}>
                            <a href={link.href} target="_blank" rel="noopener noreferrer">
                                <StoreLinkItem store={link.store}/>
                            </a>
                        </li>
                    ))}
                </ul>
                <StoreReviews />
            </div>
        </section>
    )
}