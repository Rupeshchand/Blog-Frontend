import React, { useState } from "react";
import { BASE_URL } from "../utils/Config";
import { useNavigate } from "react-router-dom";
const CreateBlog = () => {
  const [createBlog, setCreateBlog] = useState({
    title: "",
    content: "",
    topic: "",
    image: "",
    author: "",
  });
  const navigate = useNavigate()
  const handleChange = (e) => {
    setCreateBlog((prevs) => ({ ...prevs, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/blog/createblog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")} `,
        },
        body: JSON.stringify(createBlog),
      });
      const response = await res.json();
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="shadow p-5 rounded" onSubmit={handleSubmit}>
      <h2 className="text-center">Create Blog</h2>
      <div class="mb-3">
        <label htmlFor="email" class="form-label">
          Blog Title
        </label>
        <input
          onChange={handleChange}
          type="text"
          class="form-control"
          id="title"
          placeholder="Edit blog title"
        />
      </div>
      <div class="mb-3">
        <label htmlFor="email" class="form-label">
          Add Content
        </label>
        <textarea
          onChange={handleChange}
          class="form-control"
          placeholder="Edit blog content"
          id="content"
        />
      </div>
      <div class="mb-3">
        <label htmlFor="topic" class="form-label">
          Add Topic
        </label>
        <input
          onChange={handleChange}
          type="text"
          class="form-control"
          id="topic"
          placeholder="Edit blog topic"
        />
      </div>
      <div class="mb-3">
        <label htmlFor="password" class="form-label">
          Add Image
        </label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Edit image"
          class="form-control"
          id="image"
        />
      </div>
      <div class="mb-3">
        <label htmlFor="author" class="form-label">
          Author
        </label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Author name"
          class="form-control"
          id="author"
        />
      </div>
      <button onClick={handleSubmit} type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreateBlog;
