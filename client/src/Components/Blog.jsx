import React from "react";
import noBlogImage from "/no-blog-image.png";

const formattedDate = (date) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return String(date[0]) + " " + months[date[1]] + ", " + String(date[2]);
};

const Blog = ({ image, title, desc, category, date, content }) => {
  return (
    <div className="rounded border border-black p-5 w-100">
      <img src={image || noBlogImage} alt="" className="rounded w-100 h-60" />
      <h1 className="text-xl font-semibold">
        {title || "Heading not scpecified"}
      </h1>
      <h2 className="text-md">{desc || "Description not Specified"}</h2>
      <h2 className="text-md font-semibold">
        {formattedDate(date) || "Date not specified"}
      </h2>
      <hr className="my-2" />
      {content || "Content not specified"}
      <p className="text-sm"></p>
    </div>
  );
};

export default Blog;
