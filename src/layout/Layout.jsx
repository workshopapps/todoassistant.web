import React from "react";
// import Header from "./header/Header";
import Footer from "./footer/Footer";
import NavBar from "./nav-bar/Navbar";
// import Navbar from "./header/Navbar";

const Layout = ({ children }) => {
  return (
    <main>
      {/* <Navbar /> */}
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
