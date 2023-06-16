import styles from './Footer.module.scss';
import email from '../../public/assets/email-footer.svg';
import Image from 'next/image';


export default function ContactItem() {
    const size = 16;

    return (
        <div className={styles.item}>
            <Image src={email} alt="email" width={size} height={size}/>
            <a href="mailto:hi@ratepunk.com">
                hi@ratepunk.com
            </a>
        </div>
    )
}