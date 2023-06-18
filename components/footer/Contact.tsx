import styles from "./FooterSection.module.scss";
import FooterSection from "./FooterSection";
import ContactItem from "./ContactItem";

export default function Contact() {
  return (
    <FooterSection title="contact" area={"contact"}>
      <div className={styles.contacts}>
        <ContactItem />
      </div>
    </FooterSection>
  );
}
