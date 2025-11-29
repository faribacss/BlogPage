// library
import Aos from "aos";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

// utilities
import showSuccessAlert from "@/utilities/showSuccessAlert";
import showErrorAlert from "@/utilities/showErrorAlert";

// style
import styles from "@/pages/editPost/EditPost.module.css";

// services
import { deletePost, getPost, updatePost } from "@/services/posts";

function EditPost() {
  Aos.init({ duration: 1000 });
  const { documentId } = useParams();
  const [editPost, setEditPost] = useState();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (documentId) {
      getPost(documentId)
        .then((response) => {
          setEditPost(response);
          console.log("Received Data:", response);
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
        });
    }
  }, [documentId]);

  const formHandler = (e) => {
    setEditPost({
      ...editPost,
      [e.target.name]: e.target.value,
    });
  };

  const editPostHandler = (e) => {
    e.preventDefault();
    toast.info(
      <div style={{ textAlign: "center", fontSize: "14px" }}>
        <div style={{ marginBottom: 8 }}>{t("editPosts.confirmEdit")}</div>
        <button
          style={{ margin: "0 8px", cursor: "pointer" }}
          onClick={() => {
            toast.dismiss();
            const updateData = {
              content: editPost.content,
              url: editPost.url,
              modifiedDate: new Date().toISOString(),
            };
            updatePost(documentId, updateData)
              .then((data) => {
                showSuccessAlert();
                console.log("Post updated:", data);
                navigate(`/post/${documentId}`);
              })
              .catch((error) => {
                showErrorAlert();
                console.error("Error updating post:", error);
              });
          }}
        >
          {t("editPosts.confirm")}
        </button>
        <button
          style={{ margin: "0 8px", cursor: "pointer" }}
          onClick={() => toast.dismiss()}
        >
          {t("editPosts.NoConfirm")}
        </button>
      </div>,
      { autoClose: false, closeOnClick: false, draggable: false }
    );
  };
  const deletePostHandler = (documentId) => {
    toast.warn(
      <div style={{ textAlign: "center", fontSize: "14px" }}>
        <div style={{ marginBottom: 8, cursor: "pointer" }}>
          {t("editPosts.confirmDelete")}
        </div>
        <button
          style={{ margin: "0 8px", cursor: "pointer" }}
          onClick={() => {
            toast.dismiss();
            deletePost(documentId)
              .then((data) => {
                showSuccessAlert();
                localStorage.removeItem("savedPost");
                navigate("/home");
                console.log("post deleted:", data);
              })
              .catch((error) => {
                showErrorAlert();
                console.error("Error deleting post:", error);
              });
          }}
        >
          {t("editPosts.confirm")}
        </button>
        <button
          style={{ margin: "0 8px", cursor: "pointer" }}
          onClick={() => toast.dismiss()}
        >
          {t("editPosts.noDelete")}
        </button>
      </div>,
      { autoClose: false, closeOnClick: false, draggable: false }
    );
  };

  if (!editPost) {
    return (
      <div className={styles.pageContainer}>
        <div className={styles.loadingContainer}>Loading...</div>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <form
        onSubmit={editPostHandler}
        className={styles.contactUs}
        data-aos="fade-right"
      >
        <h2 className={styles.formTitle}>{t("editPosts.editPost")}</h2>

        <textarea
          className={styles.textarea}
          onChange={formHandler}
          name="content"
          value={editPost.content}
          required
          placeholder={t("editPosts.content")}
        ></textarea>

        <input
          type="url"
          className={styles.input}
          onChange={formHandler}
          name="url"
          value={editPost.url}
          placeholder={t("editPosts.imageURL")}
        />

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.button}>
            ✓ {t("editPosts.edit")}
          </button>

          <button
            type="button"
            onClick={() => deletePostHandler(documentId)}
            className={`${styles.button} ${styles.buttonDelete}`}
          >
            {t("editPosts.delete")} ✗
          </button>

          <button
            type="button"
            onClick={() => navigate(`/post/${documentId}`)}
            className={`${styles.button} ${styles.buttonCancel}`}
          >
            {t("editPosts.cancel")} ⤺
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPost;
