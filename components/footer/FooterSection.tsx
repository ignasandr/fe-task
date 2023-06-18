import styles from "./FooterSection.module.scss";

export default function FooterSection({
  children,
  title,
  area,
}: {
  children: React.ReactNode;
  title: string;
  area: string;
}) {
  return (
    <section className={styles.section} style={{ gridArea: area }}>
      <h4>{title}</h4>
      {children}
    </section>
  );
}
