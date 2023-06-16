import styles from './Referrals.module.scss'

export default function ReferralsForm() {
    return (
        <div className={styles.form}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>refer friends and get rewards</h1>
                    <p>Refer your friends to us and earn hotel booking vouchers. We'll give you 1 coin for each friend that installs our extension. Minimum cash-out at 20 coins.</p>
                    <form>
                        
                    </form>
                </div>
                <p className={styles.limit}>Limits on max rewards apply.</p>
            </div>
        </div>
    )
}