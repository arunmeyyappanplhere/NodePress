import express from "express";
import { addNewBlog } from "../controllers/addNewBlog.js";
export const route = express.Router();

route.post("/new-blog", addNewBlog);
