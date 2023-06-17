import styles from "./Referrals.module.scss";
import ReferralsForm from "./ReferralsForm";
import Steps from "./Steps";

export default function Refferals() {
  return (
    <section className={styles.section}>
      <ReferralsForm />
      <Steps />
    </section>
  );
}
