import Footer from "../components/footer/footer";
import Header from "../components/header";
const Layout = ({ children }) => {
  return (
    <div>
    <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
//  Add navbar ontop of children to layout.
import React from "react";
