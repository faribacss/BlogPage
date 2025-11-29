// library
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import Aos from "aos";

// services
import { createPost } from "@/services/posts";

// utilities
import showSuccessAlert from "@/utilities/showSuccessAlert";
import showErrorAlert from "@/utilities/showErrorAlert";

// MUI components
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Stack,
  InputAdornment,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import ImageLinkIcon from "@mui/icons-material/AddPhotoAlternate";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";

function CreatePost() {
  Aos.init({ duration: 1000 });
  const [formData, setFormData] = useState({
    content: "",
    url: "",
    modifiedDate: new Date().toISOString(),
  });
  const navigate = useNavigate();

  const formHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const { t } = useTranslation();
  const addPost = (e) => {
    e.preventDefault();
    createPost(formData)
      .then((data) => {
        showSuccessAlert(t("alerts.createPostSuccess"));
        console.log("Post created:", data);
        navigate("/home");
      })
      .catch((error) => {
        showErrorAlert(t("alerts.createPostError"));
        console.error("Error creating post:", error);
      });
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "40vh",
          }}
          data-aos="fade-down"
        >
          <Paper
            elevation={6}
            sx={{
              p: 4,
              width: "100%",
              borderRadius: 4,
              background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 3, gap: 1 }}>
              <CreateIcon color="primary" fontSize="large" />
              <Typography
                variant="h5"
                component="h1"
                sx={{ fontWeight: "bold", color: "text.primary" }}
              >
                {t("posts.CreateNewPost")}
              </Typography>
            </Box>
            <form onSubmit={addPost}>
              <Stack spacing={3}>
                <TextField
                  id="content"
                  name="content"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  value={formData.content}
                  onChange={formHandler}
                  required
                  placeholder={t("posts.Write")}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
                <TextField
                  id="url"
                  name="url"
                  placeholder={t("posts.ImageURL")}
                  type="url"
                  variant="outlined"
                  fullWidth
                  value={formData.url}
                  onChange={formHandler}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ImageLinkIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                    },
                  }}
                />
                <Stack direction="row" gap={1} spacing={2} sx={{ mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon style={{ margin: "0 8px" }} />}
                    fullWidth
                    sx={{
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: "bold",
                      boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
                    }}
                  >
                    {t("posts.CreatePost")}
                  </Button>
                  <Button
                    type="button"
                    variant="outlined"
                    color="error"
                    size="large"
                    endIcon={<CancelIcon style={{ margin: "0 8px" }} />}
                    onClick={() => navigate("/home")}
                    fullWidth
                    sx={{
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: "bold",
                    }}
                  >
                    {t("posts.Cancel")}
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default CreatePost;
