import styles from './Footer.module.scss';

export default function FooterSection({
    children, title
  }: {
    children: React.ReactNode, title: string
  }) {
    return (
      <section className={styles.footer__section}>
        <h4>{title}</h4>
        {children}
      </section>
    );
  }
