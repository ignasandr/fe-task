import styles from "./Nav.module.scss";

export default function NavItem({
  label,
  accent,
  href,
}: {
  label: string;
  accent?: boolean;
  href: string;
}) {
  return (
    <a
      href={href}
      className={[styles.item, accent ? styles.accent : " "].join(" ")}
    >
      {label}
    </a>
  );
}
