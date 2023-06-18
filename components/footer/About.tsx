import styles from "./About.module.scss";
import Image from "next/image";
import logo from "../../public/assets/logo.svg";

const desc =
  "Ratepunk compares hotel room prices across the major online travel agencies. When you search for a room, Ratepunk extension scans the top booking sites and runs a price comparison, so you can be confident in knowing you’re getting the best deal!";

export default function About() {
  return (
    <section className={styles.about}>
      <div>
        <Image src={logo} alt="ratepunk logo" height={32} />
        <p className={styles.desc}>{desc}</p>
      </div>
    </section>
  );
}
