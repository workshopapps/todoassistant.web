import React from "react";
// import Header from "./header/Header";
import Footer from "./footer/Footer";
import Navbar from "./header/Navbar";

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
