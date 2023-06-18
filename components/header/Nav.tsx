import styles from "./Nav.module.scss";
import NavItem from "./NavItem";

const navItems: { label: string; href: string; accent?: boolean }[] = [
  { label: "Chrome Extension", href: "#", accent: true },
  { label: "Price Comparison", href: "#" },
  { label: "Blog", href: "#" },
];

export default function Nav({ isOpen }: { isOpen: boolean }) {
  return (
    <nav className={styles.nav}>
      <ul className={isOpen ? styles.open : ""}>
        {navItems.map((navItem) => {
          return (
            <li key={navItem.label}>
              <NavItem {...navItem} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
