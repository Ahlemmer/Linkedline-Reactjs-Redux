import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import ShareRoundedIcon from "@material-ui/icons/ShareRounded";
import SendIcon from "@material-ui/icons/Send";
const Post = forwardRef(({ name, description, messsage, photoUrl }, ref) => {
  return (
    <div ref={ref} className="Post">
      <div className="post_header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{messsage}</p>
      </div>
      <div className="post_button">
        <InputOption Icon={ThumbUpAltIcon} title="like" color="gray" />
        <InputOption Icon={ModeCommentIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareRoundedIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
