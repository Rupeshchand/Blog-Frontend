import React, { useState } from "react";
import { BASE_URL } from "../utils/Config";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const [editBlog, setEditBlog] = useState({
    title: "",
    content: "",
    topic: "",
    image: "",
  });
  const {id} = useParams()
  const naviagte = useNavigate()
  const handleChange = async(e) => {
    setEditBlog((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const res = await fetch(`${BASE_URL}/blog/editblog/${id}`,{
            method:"PUT",
            headers:{"Content-Type" : "application/json","Authorization" : `Bearer ${localStorage.getItem("token")}`},
            body: JSON.stringify(editBlog)
        })
        const response =  await res.json()
        console.log(response)
        naviagte("/")
    } catch (error) {
        console.log(error)
    }
  };
  console.log(editBlog)
  
  return (
    <form className="shadow p-5 rounded" onSubmit={handleSubmit}>
      <h2 className="text-center">Edit Blog</h2>
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
          Blog Content
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
          Blog Topic
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
          Blog Image
        </label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Edit image"
          class="form-control"
          id="image"
        />
      </div>
      <button onClick={handleSubmit} type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default EditBlog;
