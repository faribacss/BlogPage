// library
import { useTranslation } from "react-i18next";
import { useContext } from "react";

// style
import styles from "@/components/Footer/Footer.module.css";

// MUI components
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

// utilities
import getLangProps from "@/utilities/getLangFontClass";

// context
import { SaveInfoContext } from "@/context/SaveInfo";

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: <LinkedInIcon className={styles.icon} />,
    color: "#0077b5",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: <InstagramIcon className={styles.icon} />,
    color: "#E4405F",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/",
    icon: <YouTubeIcon className={styles.icon} />,
    color: "#FF0000",
  },
  {
    name: "Telegram",
    url: "https://t.me/",
    icon: <TelegramIcon className={styles.icon} />,
    color: "#229ED9",
  },
  {
    name: "GitHub",
    url: "https://github.com/",
    icon: <GitHubIcon className={styles.icon} />,
    color: "#181717",
  },
];

export default function Footer() {
  const { jwt } = useContext(SaveInfoContext) || {};
  const { fontClass: langFontClass } = getLangProps(styles);
  const { t } = useTranslation();
  return (
    <>
      {jwt ? (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1240 260">
            <path
              fill="#2e4039"
              fillOpacity="1"
              d="M0,64L48,106.7C96,149,192,235,288,234.7C384,235,480,149,576,122.7C672,96,768,128,864,160C960,192,1056,224,1152,213.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <footer className={styles.footer}>
            <div className={`${styles.container} ${langFontClass}`}>
              <div className={styles.brand}>
                <span className={styles.logo}>{t("footer.BlogPage")}</span>
                <span className={styles.slogan}>{t("footer.description")}</span>
              </div>
              <div className={styles.socials}>
                {socialLinks.map(({ name, url, icon, color }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className={styles.socialLink}
                    style={{ "--icon-hover-color": color }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            <div className={`${styles.copyright} ${langFontClass}`}>
              {t("footer.rights")} {new Date().getFullYear()}
            </div>
          </footer>
        </>
      ) : null}
    </>
  );
}
