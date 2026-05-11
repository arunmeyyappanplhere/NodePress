import React from "react";
import { Form, Plus } from "lucide-react";
import { useState } from "react";
const NewBlogForm = ({ showModal, setShowModal }) => {
  const [currentImage, setCurrentImage] = useState("");

  const convertToBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleChanger = async (e) => {
    const myFile = e.target.files[0];
    const myFileB64 = await convertToBase64(myFile);
    setCurrentImage(myFileB64);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const Image = await convertToBase64(formData.get("cover-image"));
    const Title = formData.get("blog-title");
    const Desc = formData.get("blog-desc");
    const Category = formData.get("blog-category");
    const Content = formData.get("blog-content");

    try {
      await fetch("http://localhost:8000/api/new-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Image,
          Title,
          Desc,
          Category,
          Content,
        }),
      });
      window.location.reload();
      setShowModal(false);
    } catch (err) {
      console.log("Connot Add the blog: " + err);
    }
  };

  return (
    <div className="p-10 m-auto w-1/2 h-1/2 flex flex-col justify-center items-center">
      <h1 className="color-black font-bold text-5xl mb-4">Add New Blog</h1>
      <form
        className="bg-purple-100 p-5"
        action=""
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="my-4">
          <label htmlFor="image-file" className="w-2">
            <div className="flex flex-col items-center justify-center bg-purple-300 h-50 border border-dashed border-purple-600 cursor-pointer rounded">
              {currentImage === "" ? (
                <>
                  <Plus
                    size={36}
                    className="p-1 text-white rounded-full bg-purple-600"
                  />
                  <p className="">Upload Cover Image</p>
                </>
              ) : (
                <>
                  <img src={currentImage} alt="" className="h-full" />
                </>
              )}
            </div>
          </label>
          <input
            name="cover-image"
            className="float-right bg-purple-50 hidden"
            type="file"
            id="image-file"
            accept=".png, .jpg, .jpeg"
            onChange={(e) => handleChanger(e)}
          />
        </div>
        <div className="my-4">
          <label htmlFor="" className="mr-3 text-xl font-semibold">
            Title
          </label>
          <input
            name="blog-title"
            className="float-right bg-purple-50 border-2 border-purple-200 p-1 focus:outline-purple-600"
            type="text"
          />
        </div>
        <div className="my-4">
          <label htmlFor="" className="mr-3 text-xl font-semibold">
            Description
          </label>
          <input
            name="blog-desc"
            className="float-right bg-purple-50 border-2 border-purple-200 p-1 focus:outline-purple-600"
            type="text"
          />
        </div>
        <div className="my-4">
          <label htmlFor="" className="mr-3 text-xl font-semibold">
            Category
          </label>
          <input
            name="blog-category"
            className="float-right bg-purple-50 border-2 border-purple-200 p-1 focus:outline-purple-600"
            type="text"
          />
        </div>
        <div className="my-4">
          <label htmlFor="" className="mr-3 text-xl font-semibold">
            Content
          </label>
          <input
            name="blog-content"
            className="float-right bg-purple-50 border-2 border-purple-200 p-1 focus:outline-purple-600"
            type="text"
          />
        </div>
        <button
          className="float-right text-white my-4 bg-purple-600 px-2 py-1 rounded cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewBlogForm;
