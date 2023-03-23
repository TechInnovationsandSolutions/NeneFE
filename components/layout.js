import Footer from "./footer";
const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
//  Add navbar ontop of children to layout.
import React from "react";
