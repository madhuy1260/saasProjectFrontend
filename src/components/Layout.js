import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container-fluid px-0">{children}</div>
    </>
  );
}

export default Layout;
