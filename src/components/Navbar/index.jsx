// library
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useNavigate } from "react-router-dom";

// context
import { SaveInfoContext } from "@/context/SaveInfo";

// style
import styles from "@/components/Navbar/Navbar.module.css";

// MUI components
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LogoutIcon from "@mui/icons-material/Logout";

// utilities
import getLangProps from "@/utilities/getLangFontClass";

export default function Navbar() {
  const { user, logout } = useContext(SaveInfoContext);
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const {
    fontClass: langFontClass,
    direction,
    textAlign,
  } = getLangProps(styles);

  // isLogin
  const isLogin = Boolean(user && localStorage.getItem("jwt"));

  // toggle drawer in mobile view
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // logout
  const navigate = useNavigate();
  const handleLogout = () => {
    logout && logout();
    navigate("/");
  };

  //content of drawer (mobile menu)
  const drawerContent = (
    <Box
      className={langFontClass}
      onClick={handleDrawerToggle}
      sx={{ textAlign, direction }}
    >
      <Box sx={{ my: 2 }}>
        <h3 className={styles.panelHello}>
          {t("navbar.hello", { name: user?.username || "" })}
        </h3>
      </Box>
      <Divider />
      <List>
        <ListItem disablePadding>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.logoutLink} ${styles.activeLink}`
                : styles.logoutLink
            }
            to="/home"
          >
            <p className={styles.navListItems}>
              <HomeIcon style={{ margin: "0 5px" }} /> {t("navbar.home")}
            </p>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.logoutLink} ${styles.activeLink}`
                : styles.logoutLink
            }
            to="/panel"
          >
            <p className={styles.navListItems}>
              <PermIdentityIcon style={{ margin: "0 5px" }} />
              {t("navbar.userPanel")}
            </p>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <Link className={styles.logoutLink} onClick={handleLogout}>
            <p className={styles.navListItems}>
              <LogoutIcon style={{ margin: "0 5px" }} />
              {t("navbar.logout")}
            </p>
          </Link>
        </ListItem>
      </List>
      <Divider />
      <Box sx={{ p: 2 }}></Box>
    </Box>
  );

  return (
    <>
      {isLogin ? (
        <div
          className={`${styles.navbarBox} ${langFontClass}`}
          style={{ direction, textAlign }}
        >
          <h1 className={styles.panelHello}>
            {t("navbar.hello", { name: user?.username || "" })}
          </h1>

          <div className={styles.panelText}>
            <Box className={styles.navList}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.logoutLink} ${styles.activateLink}`
                    : styles.logoutLink
                }
                to="/home"
              >
                <p className={styles.navListItems}>
                  <HomeIcon style={{ margin: "0 5px" }} /> {t("navbar.home")}
                </p>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.logoutLink} ${styles.activateLink}`
                    : styles.logoutLink
                }
                to="/panel"
              >
                <p className={styles.navListItems}>
                  <PermIdentityIcon style={{ margin: "0 5px" }} />
                  {t("navbar.userPanel")}
                </p>
              </NavLink>
              <NavLink
                className={styles.logoutLink}
                onClick={handleLogout}
                to="/"
              >
                <p className={styles.navListItems}>
                  <LogoutIcon style={{ margin: "0 5px" }} />
                  {t("navbar.logout")}
                </p>
              </NavLink>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: "none",
                "@media (max-width: 720px)": { display: "block" },
                ml: 2,
              }}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
            }}
          >
            {drawerContent}
          </Drawer>
        </div>
      ) : null}
    </>
  );
}
