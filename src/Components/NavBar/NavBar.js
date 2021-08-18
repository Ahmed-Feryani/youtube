import React from "react";
import "./style.scss";
import logo from "../../assets/logo.jpg";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar__logo-box cvh">
        <div className="nav-bar__menu">
          <MenuIcon></MenuIcon>
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="nav-bar__search">
        <input type="text" />
        <div className="nav-bar__search-btn cvh">
          <SearchIcon></SearchIcon>
        </div>
      </div>
      <ul className="nav-bar__action cvh">
        <div className="nav-bar__action__item">
          <VideoCallIcon></VideoCallIcon>
        </div>
        <div className="nav-bar__action__item">
          <AppsIcon></AppsIcon>
        </div>
        <div className="nav-bar__action__item">
          <NotificationsActiveIcon></NotificationsActiveIcon>{" "}
        </div>
        <div className="nav-bar__action__item nav-bar__action__profile cvh">
          F
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
