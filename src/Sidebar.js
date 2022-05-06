import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => {
    return (
      <div className="sidebar_recenteitem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={user.photoUrl} />

        <Avatar className="side_avatar">{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2,443</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>

        {recentItem("Reactjs")}
        {recentItem("ReactNative")}
        {recentItem("Softwareenginering")}
        {recentItem("design")}
        {recentItem("developers")}
      </div>
    </div>
  );
}

export default Sidebar;
