import React, { useState, useEffect } from "react";
import Blog from "./Blog";
import { Plus, X } from "lucide-react";
import NewBlogForm from "./NewBlogForm";
const BlogCover = () => {
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);

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
    <div className="w-9/12 mx-auto pb-5 flex flex-col items-center  bg-purple-200 min-h-screen">
      <h1 className="text-center text-6xl font-bold uppercase flex justify-between p-5 bg-purple-400 text-white w-full">
        Node Press
        <button
          onClick={() => setShowModal(true)}
          className="flex text-3xl font-semibold gap-1 items-center bg-purple-600 rounded-xl p-3 cursor-pointer hover:bg-purple-700 transition"
        >
          <Plus
            size={36}
            className="p-1 text-white rounded-full bg-purple-600"
          />
          New Blog
        </button>
      </h1>

      <div className="mt-3 flex flex-wrap justify-center gap-4">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
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
          <h1 className="text-3xl font-semibold text-center mt-30">
            No blogs found
          </h1>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-11/12 max-w-4xl py-3 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black cursor-pointer"
            >
              <X size={30} />
            </button>
            <NewBlogForm showModal={showModal} setShowModal={setShowModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCover;
