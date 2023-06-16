import styles from './StoreLinks.module.scss';
import StoreLinkItem from './StoreLinkItem';
import StoreReviews from './StoreReviews';

const storeLinks: { store: 'chrome' | 'apple', href: string }[] = [
    { store: 'chrome', href: 'https://chrome.google.com/'},
    { store: 'apple', href: 'https://www.apple.com/app-store/'}
]

export default function StoreLinks() {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <ul className={styles.links}>
                    {storeLinks.map(link => (
                        <li>
                            <a href={link.href} target="_blank" rel="noopener noreferrer">
                                <StoreLinkItem key={link.store} store={link.store}/>
                            </a>
                        </li>
                    ))}
                </ul>
                <StoreReviews />
            </div>
        </section>
    )
}