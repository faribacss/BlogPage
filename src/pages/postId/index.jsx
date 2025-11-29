// library
import { useContext, useEffect, useState } from "react";
import { SaveInfoContext } from "@/context/SaveInfo";
import { Link, useParams } from "react-router-dom";
import Aos from "aos";
import { useTranslation } from "react-i18next";

// services
import { getPost } from "@/services/posts";

// style
import styles from "@/pages/postId/PostId.module.css";

// image import
import errorImg from "@/assets/public/img/notFound.png";

function PostId() {
  Aos.init({ duration: 1000 });

  const { user } = useContext(SaveInfoContext);
  const { documentId } = useParams();
  const [post, setPost] = useState();
  const { t } = useTranslation();

  useEffect(() => {
    if (documentId) {
      getPost(documentId)
        .then((data) => {
          setPost(data);
          console.log("Received Data:", data);
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
        });
    }
  }, [documentId]);

  const isEdited =
    post &&
    post.updatedAt &&
    post.publishedAt &&
    new Date(post.updatedAt).getTime() !== new Date(post.publishedAt).getTime();

  if (!post) {
    return (
      <>
        <div style={{ textAlign: "center", marginTop: "20px" }}>Loading...</div>
      </>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardContainer} data-aos="fade-up">
        <div className={styles.upperContainer}>
          <img
            src={post.url || errorImg}
            alt="post image"
            className={styles.postImage}
          />
        </div>
        <div className={styles.avatarWrapper}>
          <div className={styles.imageContainer}>
            <div className={styles.avatar}>
              {user.username.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>
        <div className={styles.lowerContainer}>
          <div>
            <h3>{user.username}</h3>
            <h4>
              {t("postId.Published")}:{" "}
              {new Date(post.publishedAt).toLocaleDateString()}
            </h4>
          </div>
          <div>
            <p>{post.content}</p>
            {isEdited ? (
              <h4>
                {t("postId.EditedPost")}:{" "}
                {new Date(post.updatedAt).toLocaleDateString()}
              </h4>
            ) : null}
          </div>
          <div className={styles.buttonGroup}>
            <Link to={`/edit-post/${documentId}`} className={styles.btn}>
              {t("postId.EditPost")}
            </Link>
            <Link to="/home" className={styles.btn}>
              {t("postId.BacktoHome")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PostId;
