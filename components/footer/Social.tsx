import styles from "./FooterSection.module.scss";
import FooterSection from "./FooterSection";
import SocIcon from "./SocIcon";

const socialLinks: { sn: "ig" | "fb" | "li" | "tw" | "tt"; href: string }[] = [
  {
    sn: "ig",
    href: "https://instagram.com/",
  },
  {
    sn: "fb",
    href: "https://facebook.com/",
  },
  {
    sn: "li",
    href: "https://linkedin.com/",
  },
  {
    sn: "tw",
    href: "https://twitter.com/",
  },
  {
    sn: "tt",
    href: "https://tiktok.com/",
  },
];

export default function Social() {
  return (
    <FooterSection title="social" area={"social"}>
      <ul className={styles.social}>
        {socialLinks.map((socialLink) => {
          return (
            <li key={socialLink.sn}>
              <a
                href={socialLink.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocIcon sn={socialLink.sn} />
              </a>
            </li>
          );
        })}
      </ul>
    </FooterSection>
  );
}
