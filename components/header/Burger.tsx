import styles from "./Header.module.scss";
import Image from "next/image";
import menu from "../../public/assets/menu.svg";
import close from "../../public/assets/close.svg";

export default function Burger({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className={styles.burger} onClick={onClick}>
      {!isOpen && <Image src={menu} alt="menu" className={styles.menu} />}
      {isOpen && <Image src={close} alt="close" className={styles.close} />}
    </div>
  );
}
