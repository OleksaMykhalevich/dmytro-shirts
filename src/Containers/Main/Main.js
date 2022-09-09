import React from "react";
import { HomePage } from "../../Components/pages/HomePage";
import "../Main/grid.css";
// import { AboutPage } from "../../componants/pages/AboutPage";
import { Route, Routes } from "react-router-dom";
// import PostsPage from "../../componants/pages/PostsPage";
import { useSelector } from "react-redux";

export const Main = ({ postsArray }) => {
  const post = useSelector((state) => state.post.currentPost);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route
          exact
          path="/the-book-lover/:title"
          element={<PostsPage post={post} />}
        /> */}
      </Routes>
    </>
  );
};
