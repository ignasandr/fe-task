import Refferals from "@/components/referals/Referrals";
import styles from "./page.module.scss";
import StoreLinks from "@/components/storelinks/StoreLinks";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Refferals />
      <StoreLinks />
      <Footer />
    </main>
  );
}
