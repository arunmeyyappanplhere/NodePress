import React from "react";
import { useState } from "react";
import Blog from "./Blog";
import { useEffect } from "react";

const BlogCover = () => {
  const [blogs, setBlogs] = useState([]);

  const getAllBlogs = async () => {
    try {
      const fetchedBlogs = await fetch("http://localhost:8000/api/all-blogs", {
        method: "GET",
      });
      const data = await fetchedBlogs.json();
      setBlogs(data.reverse());
    } catch (err) {
      console.log("Cannot fetch blogs: " + err);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div className="w-9/12 mx-auto pb-5 flex flex-col items-center justify-center bg-purple-200">
      <h1 className="text-center text-6xl font-bold uppercase p-5 bg-purple-400 text-white w-full">
        Blogs
      </h1>
      <div className="mt-3 flex flex-wrap justify-center gap-4">
        {blogs ? (
          blogs.map((blog, index) => (
            <Blog
              key={blog._id}
              image={blog.Image}
              title={blog.Title}
              desc={blog.Desc}
              content={blog.Content}
              date={blog.Date}
              category={blog.Category}
            />
          ))
        ) : (
          <h1 className="text-3xl font-semibold text-center">No blogs found</h1>
        )}
      </div>
    </div>
  );
};

export default BlogCover;
