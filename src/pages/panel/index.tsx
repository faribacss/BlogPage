// library
import * as React from "react";
import { useTranslation } from "react-i18next";

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

// components
import CreatePost from "@/pages/createPost";

export default function Panel() {
  const { fontClass: langFontClass } = getLangProps(styles);
  const [value, setValue] = React.useState("1");
  const { t } = useTranslation();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
                  className={styles.tabs}
                  label={t("panel.CreateNewPost")}
                  value="1"
                />
                <Tab className={styles.tabs} label="❤️" value="2" />
                <Tab
                  className={styles.tabs}
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
            <TabPanel style={{ textAlign: "center" }} value="3">
              {t("panel.allPostsDesc")}
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  );
}
