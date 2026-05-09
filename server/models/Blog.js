import mongoose from "mongoose";

const Blog = mongoose.Schema({
  ID: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
    default: "",
  },
  Title: {
    type: String,
    required: true,
    default: "",
  },
  Desc: {
    type: String,
    required: true,
    default: "",
  },
  Category: {
    type: String,
    required: true,
    default: "",
  },
  Date: {
    type: Array,
    required: true,
  },
  Content: {
    type: String,
    required: true,
    default: "",
  },
});

export default mongoose.model("blogs", Blog);
