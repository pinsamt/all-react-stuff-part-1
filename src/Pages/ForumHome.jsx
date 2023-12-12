import React from "react";
import { Link, useNavigate } from "react-router-dom";
const ForumHome = (props) => {
  return (
    <div>
      {props &&
        props.posts.map((postObj) => (
          <Link to={`/post/${postObj.Id}`}>{postObj.title}</Link>
        ))}
    </div>
  );
};

export default ForumHome;
