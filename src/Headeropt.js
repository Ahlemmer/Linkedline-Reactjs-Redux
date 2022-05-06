import React from "react";
import "./headeroption.css";
import { Avatar } from "@material-ui/core";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
function Headeropt({ title, Icon, avatar, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headeroption_icon" />}
      {avatar && (
        <Avatar className="headeroption_icon" src={avatar}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headeroption_title">{title}</h3>
    </div>
  );
}

export default Headeropt;
