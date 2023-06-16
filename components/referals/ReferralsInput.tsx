import styles from './Referrals.module.scss'
import Image from 'next/image';
import email from '../../public/assets/email.svg';
import success from '../../public/assets/success.svg';

export default function ReferralsInput({ icon, placeholder, btnlabel, value, state, wrap }: { icon: boolean, placeholder: string, btnlabel: string, value: string, state: string | undefined, wrap: boolean }) {

    return (
        <div>
            {
                state === 'success' &&
                <div className={styles.success}>
                    <Image src={success} alt="success" width={32} height={32} />
                    <p>Your email is confirmed!</p>
                </div>
            }
            {
                state === 'error' &&
                <div className={styles.error}>Error state</div>
            }
            <div className={[styles.input, wrap ? styles.wrap : ''].join(' ')}>
                <div className={styles.icon}>
                    {icon ? <Image src={email} alt="email"/> : null}
                </div>

                <input className={[icon ? '' : styles.input__noicon, wrap ? styles.input__thin : ''].join(' ')} type="email" name="email" placeholder={placeholder} value={value}/>
                <button className={wrap ? styles.button__thin : ''}>{btnlabel}</button>
            </div>
        </div>
    )
}