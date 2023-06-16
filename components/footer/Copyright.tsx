import styles from './Footer.module.scss';

const caption = "© 2021 Ratepunk. All Rights Reserved."

export default function Copyright() {
    return (
        <p className={styles.copyright}>{caption}</p>
    )
}