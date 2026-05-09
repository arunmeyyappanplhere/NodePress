import Blog from "../models/Blog.js";
import { randomUUID } from "crypto";

const getDate = () => {
  const date = new Date();
  return [
    Number(String(date.getDate()).padStart(2, "0")),
    date.getMonth(),
    date.getFullYear(),
  ];
};
export const addNewBlog = async (req, res) => {
  try {
    const { Image, Title, Category, Desc, Content } = req.body;
    const newBlog = new Blog({
      ID: randomUUID(),
      Image,
      Title,
      Desc,
      Category,
      Date: getDate(),
      Content,
    });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).send("Cannot add blog : " + error);
  }
};
