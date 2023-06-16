import styles from './Footer.module.scss';
import FooterSection from './FooterSection';
import ContactItem from './ContactItem';

export default function Contact() {
    return (
        <FooterSection title='contact' area={'contact'}>
            <div className={styles.contact}>
                <ContactItem />
            </div>
        </FooterSection>
    )
}