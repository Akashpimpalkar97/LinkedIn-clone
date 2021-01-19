import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import logo from "./linkedin.svg";
import "./header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from "@material-ui/icons/Work";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

const Header = () => {
  const dispatch = useDispatch();
  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" className="header__input" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="My network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={WorkIcon} />
        <HeaderOption title="Messaging" Icon={SmsIcon} />
        <HeaderOption title="Notification" Icon={NotificationsIcon} />
        <HeaderOption title="Home" Icon={HomeIcon} />
        <HeaderOption title="Me" onclick={logoutApp} avatar={true} />
      </div>
    </div>
  );
};

export default Header;
