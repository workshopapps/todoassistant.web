import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.scss";
import Dropdown from "./Dropdown";

import {
  Routes,
  Route,
  NavLink,
  useLocation,
  Outlet,
  Link
} from "react-router-dom";
import axios from "axios";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
// import Divider from '@mui/material/Divider';
import IconButton from "@mui/material/IconButton";
import { Grid, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

//route
import { userRoutes } from "../../router/user";

//notification
import { requestForToken } from "../../messaging_init_in_sw";

//Images
// import tick from "../../assets/home/tick.png";
import VaImg from "../../assets/dashboard/user.png";
import arrowDown from "../../assets/dashboard/arrow-down.png";
import hand from "../../assets/dashboard/hand.png";
import bell from "../../assets/dashboard/notif.png";

// import add from "../../assets/dashboard/add.png";

const drawerWidth = 240;

export default function Dasboard() {
  const userName = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))?.data.first_name
    : "";
  const location = useLocation();
  const { window } = location;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [nav, setNav] = useState(false);

  //requestion notification permission from user
  requestForToken();

  const id = JSON.parse(localStorage.getItem("user")).user_id;
  const fbToken = JSON.parse(localStorage.getItem("firebaseNotification"));

  useEffect(() => {
    const getNotification = async () => {
      try {
        await axios.post(
          "https://api.ticked.hng.tech/api/v1/notification",
          {
            user_id: `${id}`,
            device_id: fbToken
          },
          { headers: { Authorization: "Bearer " + id } }
        );
      } catch (error) {
        console.error(error);
      }
    };
    getNotification();
  }, [fbToken]);

  // notification function for user
  const getNotificationUser = async () => {
    try {
      await axios
        .get("https://api.ticked.hng.tech/api/v1/notification", {
          headers: { Authorization: "Bearer " + id }
        })
        .then(res => {
          localStorage.setItem("userNotification", JSON.stringify(res.data));
        });
    } catch (error) {
      console.error(error);
    }
  };

  // calling notifcation function every 10 sec
  useEffect(() => {
    getNotificationUser();

    const interval = setInterval(() => {
      getNotificationUser();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    //On click the array of route is split into array with the first item remove
    // const path = location?.pathname?.split("/").pop();
    //Check that path is equal to userroute returned value
    // const current = virtualassistance.find(item => item.path === path);
    //Updating state and setting default route to convert
    // setTitle(current?.title ?? "home");
  }, [location]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      className="drawer"
      style={{
        background: "#fff",
        borderRight: "1px solid #E9F3F5",
        minHeight: "100vh",
        padding: "0px 10px"
      }}
    >
      <Toolbar>
        {/* <NavLink to={`/`} style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
            mt={3}
          >
            <img src={tick} alt="ticked" />
            <Typography
              variant="h5"
              sx={{ flexGrow: 1, fontWeight: 700 }}
              ml={1.3}
            >
              Ticked
            </Typography>
          </Box>
        </NavLink> */}

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          {/* <Close /> */}
        </IconButton>
      </Toolbar>
      <Box px={2.5} mb={4}>
        {/* <Box
          minWidth={"10vw"}
          margin={" 20px auto"}
          sx={{
            background: "#714DD9",
            color: "#fff",
            padding: "14px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img src={add} alt="add" />
          <Typography variant="p">New to do</Typography>
        </Box> */}
      </Box>
      {userRoutes.map((item, index) => {
        return (
          <>
            <Box sx={{ marginTop: "20px !important" }}>
              <NavLink
                to={`/dashboard/${item.path}`}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{ display: "flex", margin: "15px auto", width: "180px" }}
                  mt={4}
                  px={3}
                >
                  <img src={item.icon} alt={`${item.title}_icon`} />
                  <Typography ml={1}>{item.title}</Typography>
                </Box>
                {item.title === "clients" ? (
                  <Divider sx={{ color: "#714DD9" }} />
                ) : null}
              </NavLink>
            </Box>
          </>
        );
      })}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Top header */}
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#fff",
          color: "black",
          borderBottom: "1px solid #E9F3F5",
          padding: "20px"
        }}
        className={styles.main__appbar}
        elevation={0}
        position="fixed"
      >
        <Toolbar>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Grid alignItems="center" justifyContent="space-between" container>
            <Grid item xs={6} sm={6}>
              <Typography
                variant="h6"
                mt={4}
                sx={{ width: "15vw", display: "inline" }}
              >
                Hello {userName},
              </Typography>
              <img
                style={{ position: "relative", left: "10px", top: "2px" }}
                src={hand}
                alt="hand"
              />
              <Typography
                variant="h6"
                mt={4}
                ml={3}
                sx={{ width: "15vw", display: "inline" }}
              >
                Welcome to Ticked
              </Typography>
              {/* fdf */}
            </Grid>
            <Grid item xs={6} sm={2}>
              <Box
                className={styles.main__span}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <span
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <Link
                    to="/dashboard/notifications"
                    style={{ display: "flex" }}
                  >
                    <img src={bell} style={{ height: "30px" }} alt="bell" />
                  </Link>
                  <img
                    src={VaImg}
                    style={{ height: "30px" }}
                    alt="client image"
                  />
                  <span
                    className={[styles.arrow_down, nav && styles.arrow_up].join(
                      " "
                    )}
                    onClick={() => {
                      setNav(!nav);
                    }}
                  >
                    <img src={arrowDown} alt="arrow down" />
                  </span>
                </span>
                {nav ? <Dropdown /> : null}
                {/* <Typography
                  component="span"
                  display={{ xs: "none", md: "block" }}
                >
                  <Typography sx={{ textAlign: "right" }}>John A </Typography>
                </Typography>
                <span>
                  <img src={arrowDown} alt="arrow down" />
                </span> */}
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* Left Sidebar */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Right Sidebar */}
      <Container
        style={{ display: "flex", flexDirection: "column" }}
        maxWidth={false}
        component="main"
        sx={{
          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
            padding: "20px",
            backgroundColor: "#F9F7FF",
            height: "100vh",
            marginTop: "50px"
          }
        }}
      >
        <Toolbar />
        <Routes>
          {userRoutes.map((item, index) => {
            return (
              <Route
                key={index}
                path={`/dashboard/${item.path}`}
                render={props => {
                  return (
                    <>
                      {/* <a
                        className="what-move"
                        href="whatsapp://send?text=Hello World!&phone=+2347083106814"
                      >
                      <img src={icons.correct} className="whatsapp" alt="whatsapp"/>
                    </a> */}
                      <item.component {...props} />
                    </>
                  );
                }}
              />
            );
          })}
        </Routes>
        <Outlet />
      </Container>
    </Box>
  );
}
