import React from "react";
import { Route, Routes } from "react-router-dom";
import ForumHome from "../ForumHome";
import { useState, useEffect } from "react";
import ForumProfile from "../ForumProfile";
import ForumPost from "../ForumPost";

const Forum = () => {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    let getPosts = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let json = await response.json();
      setPosts(json);
    };
    getPosts();
  }, []);

  return (
    <Routes>
      <Route index element={<ForumHome {...{ posts }} />}></Route>
      <Route path="/post/:postId" element={<ForumPost />}></Route>
      <Route path="/profile/:userId" element={<ForumProfile />}></Route>
    </Routes>
  );
};

export default Forum;
