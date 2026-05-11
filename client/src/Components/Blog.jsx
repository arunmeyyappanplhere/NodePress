import React from "react";
import noBlogImage from "/no-blog-image.png";
const Blog = () => {
  return (
    <div className="rounded border border-purple-100 p-5 w-100">
      <img src={noBlogImage} alt="" className="rounded w-100 h-60" />
      <h1 className="text-xl font-semibold">Heading</h1>
      <h2 className="text-md">Description</h2>
      <h2 className="text-md font-semibold">Date</h2>
      <hr className="my-2"/>
      <p className="text-sm">Content Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ab mollitia ducimus quos pariatur temporibus voluptas totam cumque corrupti qui odio quae ipsa inventore quo, consectetur non optio libero architecto?</p>
    </div>
  );
};

export default Blog;
