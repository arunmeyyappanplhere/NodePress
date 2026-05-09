import express from "express";
import { addNewBlog } from "../controllers/addNewBlog.js";
import { allBlogs } from "../controllers/getAllBlogs.js";
export const route = express.Router();

route.post("/new-blog", addNewBlog);
route.get("/all-blogs", allBlogs);
