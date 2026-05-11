import React from "react";
import { useState } from "react";
import Blog from "./Blog";

const BlogCover = () => {
  const [blogs, setBlogs] = useState([]);

  const getAllBlogs = async () => {
    try {
      const fetchedBlogs = await fetch("http://localhost:8000/api/all-blogs", {
        method: "GET",
      });
      const data = await fetchedBlogs.json();
      setBlogs(data);
    } catch (err) {
      console.log("Cannot fetch blogs: " + err);
    }
  };
  getAllBlogs();

  return (
    <div className="w-9/12 mx-auto pb-5 flex flex-col items-center justify-center bg-purple-200">
      <h1 className="text-center text-6xl font-bold uppercase p-5 bg-purple-400 text-white w-full">
        Blogs
      </h1>
      <div className="mt-3 flex gap-4">
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
};

export default BlogCover;
