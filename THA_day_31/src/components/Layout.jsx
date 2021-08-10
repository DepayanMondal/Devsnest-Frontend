import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="container lg mx-auto h-screen px-4 md:px-0">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
