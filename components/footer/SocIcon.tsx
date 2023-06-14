import styles from './Footer.module.scss';
import Image from 'next/image';
import ig from '../../public/assets/instagram.svg';
import fb from '../../public/assets/facebook.svg';
import li from '../../public/assets/linkedin.svg';
import tw from '../../public/assets/twitter.svg';
import tt from '../../public/assets/tiktok.svg';

export default function SocIcon({ sn }: { sn: 'ig' | 'fb' | 'li' | 'tw' | 'tt' }) {
    const size = 16;

    const Icon = () => {
        switch (sn) {
            case 'ig':
                return <Image src={ig} alt="instagram" width={size} height={size} />;
            case 'fb':
                return <Image src={fb} alt="facebook" width={size} height={size} />;
            case 'li':
                return <Image src={li} alt="linkedin" width={size} height={size} />;
            case 'tw':
                return <Image src={tw} alt="twitter" width={size} height={size} />;
            case 'tt':
                return <Image src={tt} alt="tiktok" width={size} height={size} />;
            default:
                return null;
        }
    }

  return (
    <button className={styles.socials__icon}>
        <Icon />
    </button>
  )
}