import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";

import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import InputOption from "./InputOption";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import "./post.css";
export const Post = forwardRef(
  ({ name, description, message, photoUrl }, ref) => {
    return (
      <div ref={ref} className="post">
        <div className="post__header">
          <Avatar src={photoUrl}></Avatar>
          <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="post__body">
          <p>{message}</p>
        </div>
        <div className="post__buttons">
          <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" />
          <InputOption Icon={CommentOutlinedIcon} title="Comment" />
          <InputOption Icon={ShareOutlinedIcon} title="Share" />
          <InputOption Icon={SendOutlinedIcon} title="Send" />
        </div>
      </div>
    );
  }
);
