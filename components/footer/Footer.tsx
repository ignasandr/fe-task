import About from './About';
import Contact from './Contact';
import Copyright from './Copyright';
import styles from './Footer.module.scss';
import QLinks from './QLinks';
import Social from './Social';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <About />
                <QLinks />
                <Contact />
                <Social />
                <Copyright />
            </div>
        </footer>
    )
}