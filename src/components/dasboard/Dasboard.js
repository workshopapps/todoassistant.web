import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.scss";

import {
  Routes,
  Route,
  NavLink,
  useLocation,
  Outlet,
  Link
} from "react-router-dom";
// import {useHistory} from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { Grid, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

//route
import { userRoutes } from "../../router/user";

//Images
import tick from "../../assets/home/tick.png";
import VaImg from "../../assets/dashboard/vaImg.png";
import arrowDown from "../../assets/dashboard/arrow-down.png";
import add from "../../assets/dashboard/add.png";

const drawerWidth = 240;

export default function Dasboard() {
  const location = useLocation();
  const { window } = location;

  const [mobileOpen, setMobileOpen] = useState(false);

  const [title, setTitle] = useState("home");

  useEffect(() => {
    //On click the array of route is split into array with the first item remove
    const path = location?.pathname?.split("/").pop();
    //Check that path is equal to userroute returned value
    const current = userRoutes.find(item => item.path === path);
    //Updating state and setting default route to convert
    setTitle(current?.title ?? "home");
  }, [location]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      className="drawer"
      style={{
        background: "#F6FAFB",
        borderRight: "1px solid #E9F3F5",
        minHeight: "100vh",
        padding: "0px 10px"
      }}
    >
      <Toolbar>
        <NavLink to={`/`} exact style={{ textDecoration: "none" }}>
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
        </NavLink>

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
      <Link to="/newtask">
        <Box px={2.5} mb={4}>
          <Box
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
          </Box>
        </Box>
      </Link>
      {userRoutes.map((item, index) => {
        return (
          <>
            <Box sx={{ marginTop: "20px !important" }}>
              <NavLink
                to={`/dashboard/${item.path}`}
                exact
                key={index}
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{ display: "flex", margin: "0 auto", width: "180px" }}
                  mt={4}
                  px={3}
                >
                  <img src={item.icon} alt={`${item.title}_icon`} />
                  <Typography ml={1}>{item.title}</Typography>
                </Box>
                {index % 3 === 0 && index > 1 ? <Divider component="" /> : null}
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
          background: "#F6FAFB",
          color: "black",
          borderBottom: "1px solid #E9F3F5"
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
                sx={{ borderBottom: "3px solid #714DD9", width: "5vw" }}
              >
                {" "}
                {title}{" "}
              </Typography>
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
                <span>
                  <img src={VaImg} alt="client image" />
                </span>
                <Typography
                  component="span"
                  display={{ xs: "none", md: "block" }}
                >
                  <Typography sx={{ textAlign: "right" }}>John A </Typography>
                </Typography>
                <span>
                  <img src={arrowDown} alt="arrow down" />
                </span>
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
        maxWidth={false}
        component="main"
        sx={{
          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
            padding: "20px",
            backgroundColor: "#F6FAFB"
          }
        }}
      >
        <Toolbar />
        <Routes>
          {userRoutes.map((item, index) => {
            return (
              <Route
                key={index}
                exact
                path={`/dasboard/${item.path}`}
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
