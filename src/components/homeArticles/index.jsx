// library
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import Aos from "aos";

// context
import { SaveInfoContext } from "@/context/SaveInfo";

// utilities
import getLangProps from "@/utilities/getLangFontClass";

// components from MUI
import { Checkbox, Divider } from "@mui/material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

// image import
import errorImg from "@/assets/public/img/notFound.png";

// style
import styles from "@/components/homeArticles/HomeArticles.module.css";

function HomeArticles({ id, documentId, content, url, publishedAt }) {
  const { fontClass: langFontClass } = getLangProps(styles);
  Aos.init({ duration: 1000 });
  const { user } = useContext(SaveInfoContext);
  const { t } = useTranslation();
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  return (
    <div
      key={id}
      className={`${styles.card} ${langFontClass}`}
      data-aos="fade-down"
    >
      <div className={styles.cardBody}>
        <div className={styles.spacer}>
          <div className={styles.avatar}>
            {user?.username.charAt(0).toUpperCase()}
          </div>
          <div>
            <p>
              {t("posts.Postby")} <b>{user?.username}</b>
            </p>
          </div>
        </div>
        <div>
          <img
            src={url || errorImg}
            alt="article image"
            className={styles.cardImg}
          />
        </div>
        <div className={styles.cardContent}>
          <p className={styles.content}>{content}</p>
          <button type="button" className={styles.showMoreBtn}>
            <Link to={`/post/${documentId}`} size="small">
              {t("posts.ShowMore")}
            </Link>
            <Checkbox
              {...label}
              icon={<FavoriteBorder sx={{ color: "red" }} />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </button>
          <Divider />
        </div>
        <p className={styles.publishedAt}>
          {t("postId.Published")}: {new Date(publishedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
export default HomeArticles;
