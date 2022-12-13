import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import Links from "../header/Links";
import { AuthContext } from "../../contexts/authContext/AuthContext";
import { useContext } from "react";
import Button from "../../components/button/ButtonComponent";
import { logout } from "../../contexts/authContext/AuthActions";
import { Stack } from "@mui/material";
import style from "../header/navbar.module.scss";
import { ArrowUpward } from "@mui/icons-material";

const drawerWidth = 240;

const toggleVisible = () => {
  const scrolled = document?.documentElement.scrollTop;
  const btn = document?.getElementById("scroll-btn");
  const navbar = document?.getElementById("navbar");

  if (scrolled > 900) {
    btn.style.visibility = `visible`;
    navbar.style.position = `fixed`;
    navbar.style.backgroundColor = `#fff`;
    navbar.style.zIndex = 999;
  } else {
    btn.style.visibility = `hidden`;
    navbar.style.position = `static`;
  }
};

window?.addEventListener("scroll", toggleVisible);
const scrollToTop = () => {
  window?.scrollTo(0, 0);
};

const btnStyleOutline = {
  border: "1px solid #714dd9",
  background: "transparent",
  color: "#714dd9",
  width: { xs: `100%`, md: `initial` }
};

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // CTA -- CALL TO ACTIION
  const CTA = !user ? (
    <>
      <Button link="/login" style={btnStyleOutline} title="Login" />
      <Button link="/signup" title="Sign up" />
    </>
  ) : (
    <button className={style.logoutBtn} onClick={handleLogout}>
      Log out
    </button>
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Stack
      justifyContent={`space-between`}
      height={`100%`}
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <Box>
        <Typography variant="h6" sx={{ my: 2 }}>
          <Link to="/">
            <img
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668735681/hng/todoAppVirtualAssistant/Frame_34483_msotkx.svg`}
              alt="ticked"
            />
          </Link>
        </Typography>
        <Divider />
      </Box>
      <Box height={`100%`} pt={10}>
        <Links isMobile={true} />
      </Box>
      {/* CTAs */}
      <Stack px={3} my={5} alignItems={`center`} gap={2}>
        {CTA}
      </Stack>
    </Stack>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        id="scroll-btn"
        className="shadow"
        onClick={scrollToTop}
        sx={{
          visibility: `hidden`,
          position: `fixed`,
          bottom: `2rem`,
          right: `2rem`,
          bgcolor: `#714DD9`,
          color: `#fff`,
          zIndex: 999,
          "&:hover": {
            bgcolor: `#714DD950`,
            transform: `scale(1.1)`
          }
        }}
      >
        <ArrowUpward />
      </IconButton>
      <AppBar
        id="navbar"
        // elevation={0}
        color="transparent"
        position="static"
        component="nav"
      >
        <Toolbar
          className={style.nav}
          sx={{
            display: `flex`,
            flexDirection: { xs: `row-reverse`, md: `row` },
            justifyContent: `space-between`
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <img
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1668735681/hng/todoAppVirtualAssistant/Frame_34483_msotkx.svg`}
              alt="ticked"
            />
          </Link>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Links isMobile={false} />
          </Box>
          {/* CTAs */}
          <Stack
            width={`20rem`}
            display={{ xs: `none`, md: `flex` }}
            direction={`row`}
            gap={4}
          >
            {CTA}
          </Stack>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  window: PropTypes.func
};

export default NavBar;

// scrollToTop() {
//       window.scrollTo(0, 0); //very simple function
//     },

//     fixNavbar() {
//       document.addEventListener("DOMContentLoaded", () => {
//         window.addEventListener("scroll", () => {
//           let { clientHeight } = this.$refs.nav.$el;
//           window.scrollY > clientHeight ? (this.fixed = true) : (this.fixed = false);

//           window.scrollY > 1000
//             ? this.$refs.topButton.$el.classList.remove("d-none")
//             : this.$refs.topButton.$el.classList.add("d-none");
//         });
//       });
//     },
