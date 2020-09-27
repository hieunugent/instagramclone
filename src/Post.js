import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";

function Post({username, caption, imageUrl}) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt={username} src="/static/images/1.jpg" />

        <h3> {username}</h3>
      </div>

      {/* Header -> avatar + username */}
      <img
        className="post__image"
        // src="https://media.wired.com/photos/5eb4b22ec8897781bab6e220/master/w_1600%2Cc_limit/Bakchannel-Life-Worth-Columns_3-2.jpg"
        src={imageUrl}
        alt=""
      />

      {/* image */}
      <h4 className="post__text">
        <strong>{username}</strong> {caption}
      </h4>
      {/* username _ caption */}
    </div>
  );
}

export default Post;
