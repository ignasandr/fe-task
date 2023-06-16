import styles from './StoreLinks.module.scss';
import Image from 'next/image';
import chrome from '../../public/assets/chrome.svg';
import apple from '../../public/assets/apple.svg';

export default function StoreLinkItem({ store }: { store: 'chrome' | 'apple' }) {
    const size = 64;
    let caption: string;

    const Icon = () => {
        switch (store) {
            case 'chrome':
                return <Image src={chrome} alt="instagram" width={size} />;
            case 'apple':
                return <Image src={apple} alt="facebook" width={size} />;
            default:
                return null;
        }
    }

    switch (store) {
        case 'chrome':
            caption = 'chrome web store';
            break;
        case 'apple':
            caption = 'apple app store';
            break;
        default:
            caption = 'unknown';
            break;
    }

    return (
        <div className={styles.item}>
            <div className={styles.icon}>
                <Icon />
            </div>
            <div className={styles.text}>
                <p>available in the</p>
                <h4>{caption}</h4>
            </div>
        </div>
  )
}