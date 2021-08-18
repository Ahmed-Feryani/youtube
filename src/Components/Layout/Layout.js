import React from "react";
import NavBar from "../NavBar/NavBar";
import "./style.scss";

const Layout = (props) => {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <div className="container">
        <div className="layout__main">
          <main>{props.children}</main>
          <aside>{props.aside}</aside>
        </div>
      </div>
    </>
  );
};

export default Layout;
