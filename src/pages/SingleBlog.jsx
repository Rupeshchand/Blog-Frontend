import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../utils/Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const SingleBlog = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const role = localStorage.getItem("role");
  const navigate = useNavigate()
  const getData = async () => {
    // http://localhost:8080/api/v1/blog/getsingleblog/67bdd7e2254ec3eae0b36467
    const singleBlog = await fetch(`${BASE_URL}/blog/getsingleblog/${id}`);
    const { data } = await singleBlog.json();
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
const handleDelete = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`${BASE_URL}/blog/deleteblog/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const response = await res.json()
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {role === "admin" ? (
        <>
          <img
            class="img-fluid"
            src={data.image}
            alt={data.title}
            width={300}
          />
          <h1>Title: {data.title}</h1>
          <h1>Topic: {data.topic}</h1>
          <p>Content: {data.content}</p>
          <Link to={`/editblog/${id}`}>
            <button className="btn btn-primary" type="submit">
              Edit Blog
            </button>
          </Link>
            <button className="btn btn-danger" onClick={handleDelete} type="submit">
              <FontAwesomeIcon icon={faTrash}/>
            </button>
        </>
      ) : (
        <>
          <img
            class="img-fluid"
            src={data.image}
            alt={data.title}
            width={300}
          />
          <h1>Title: {data.title}</h1>
          <h1>Topic: {data.topic}</h1>
          <p>Content: {data.content}</p>
          <Link to={`/editblog/${id}`}>
            <button className="btn btn-primary" type="submit">
              Edit Blog
            </button>
          </Link>
        </>
      )}
      {/* <Link to={`/deleteblog/${id}`}><button className="btn btn-primary" type="submit"><FontAwesomeIcon icon={faTrash}/></button></Link> */}
    </>
  );
};

export default SingleBlog;
