import styles from './Referrals.module.scss';
import Image from 'next/image';
import invite from '../../public/assets/invite.svg';
import coins from '../../public/assets/collect-coins.svg';
import voucher from '../../public/assets/voucher.svg';

export default function StepItem({ step, right }: { step: '1' | '2' | '3', right: boolean }) {
    const size = 128;
    let heading: string;
    let text: string;

    const Icon = () => {
        switch (step) {
            case '1':
                return <Image src={invite} alt="invite friends" width={size} />;
            case '2':
                return <Image src={coins} alt="collect coins" width={size} />;
            case '3':
                return <Image src={voucher} alt="get voucher" width={size} />;
            default:
                return null;
        }
    }

    switch (step) {
        case '1':
            heading = 'invite friends';
            text = 'Refer friends with your unique referral link.';
            break;
        case '2':
            heading = 'collect coins';
            text = 'Get 1 coin for each friend that installs our extension using your referral link.';
            break;
        default:
            heading = 'get voucher';
            text = 'Redeem for a $20 hotel booking voucher once you collect 20 coins.';
            break;
    }

    return (
        <div className={[styles.item, right ? styles.right : styles.left].join(' ')}>
            <Icon/>
            <div className={styles.text}>
                <h4>step {step}</h4>
                <h3>{heading}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}