import Blog from "../models/Blog.js";

export const allBlogs = async (req, res) => {
  try {
    const fetchedBlogs = await Blog.find();
    console.log(fetchedBlogs);
    res.status(200).json(fetchedBlogs);
  } catch (error) {
    res.status(500).send("Could not get any Blogs " + error);
  }
};
