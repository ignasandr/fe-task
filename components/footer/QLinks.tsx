import styles from './Footer.module.scss';
import FooterSection from './FooterSection';
import QLinkItem from './QLinkItem';

const quickLinks: { label: string, href: string, accent?: boolean }[] = [
  {
    label: 'price comparison',
    href: 'https://ratepunk.com/',
    accent: true,
  },
  {
    label: 'chrome extension',
    href: 'https://ratepunk.com/',
  },
  {
    label: 'how it works',
    href: 'https://ratepunk.com/',
  },
  {
    label: 'ratepunk blog',
    href: 'https://ratepunk.com/',
  },
  {
    label: 'privacy policy',
    href: 'https://ratepunk.com/',
  },
]

export default function QLinks() {
  return (
    <FooterSection title='quick links' area={'qlinks'}>
      <ul className={styles.qlinks}>
        { quickLinks.map(quickLink => {
          return (
            <li key={quickLink.label}>
              <a href={quickLink.href} target="_blank" rel="noopener noreferrer">
                <QLinkItem label={quickLink.label} accent={quickLink.accent}/>
              </a>
            </li>
          )
        })}
      </ul>
    </FooterSection>
  )
}