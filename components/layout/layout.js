import Footer from "../footer/footer";
import Header from "../header";
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
