// library
import * as React from "react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

// style
import styles from "@/pages/panel/Panel.module.css";

// MUI components
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

// utilities
import getLangProps from "@/utilities/getLangFontClass";

// hooks
import { GetAllPost } from "@/services/posts";

// components
import CreatePost from "@/pages/createPost";
import HomeArticles from "@/components/homeArticles";
import { TextField } from "@mui/material";

// services

export default function Panel() {
  const { data: posts, isLoading } = GetAllPost();
  const { fontClass: langFontClass } = getLangProps(styles);
  const [value, setValue] = React.useState("1");
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPosts = posts?.filter(post => 
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  )
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <div className={`${styles.panelContainer} ${langFontClass}`}>
        <Box>
          <TabContext value={value}>
            <Box
              className={styles.tabList}
              sx={{ borderBottom: 1, borderColor: "divider" }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  className={`${styles.tabs} ${
                    value === "1" ? styles.activateTab : ""
                  }`}
                  label={t("panel.CreateNewPost")}
                  value="1"
                />
                <Tab
                  className={`${styles.tabs} ${
                    value === "2" ? styles.activateTab : ""
                  }`}
                  label="❤️"
                  value="2"
                />
                <Tab
                  className={`${styles.tabs} ${
                    value === "3" ? styles.activateTab : ""
                  }`}
                  label={t("panel.allPostsLabel")}
                  value="3"
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <CreatePost />
            </TabPanel>
            <TabPanel style={{ textAlign: "center" }} value="2">
              {t("panel.favorites")}
            </TabPanel>
            <TabPanel className={styles.postsTabContainer} value="3">
              <div className={styles.searchBox}>
                <TextField
                  onChange={handleSearchChange}
                  placeholder={t("panel.searchPosts")}
                  type="search"
                  variant="outlined"
                  color="success"
                />
              </div>
              {isLoading ? (
                <h1> Loading ... </h1>
              ) : (
                <div className={styles.postsContainer}>
                  {filteredPosts?.map((post) => (
                    <div className={styles.postItem} key={post.id}>
                      <HomeArticles {...post} />
                    </div>
                  ))}
                </div>
              )}
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  );
}
