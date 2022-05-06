import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import Image from "./img.png";
import Headeropt from "./Headeropt";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { logout, selectUser } from "./features/userSlice";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutApp = () => {
    dispatch(logout);
    signOut(auth);
    console.log("hi");
  };
  return (
    <div className="header">
      <div className="header_left">
        <img src={Image} />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="heade_right">
        <Headeropt title="Home" Icon={HomeIcon} />
        <Headeropt title="My Network " Icon={SupervisorAccountIcon} />
        <Headeropt title="Jobs " Icon={BusinessCenterIcon} />
        <Headeropt title="Messaging " Icon={ChatIcon} />
        <Headeropt title="NOtification " Icon={NotificationsIcon} />

        <Headeropt avatar={true} title="me" onClick={logoutApp} />
      </div>
    </div>
  );
}

export default Header;
