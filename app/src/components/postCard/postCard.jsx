import React from "react";
import { PostCardS } from "./postCard";

function PostCard(props) {
  return (
    <PostCardS>
      <h3 className="userName"> {props.userName} </h3>
      <h4 className="content"> {props.content} </h4>
    </PostCardS>
  );
}

export default PostCard;
