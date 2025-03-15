import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../utils/Config";

const SingleBlog = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const getData = async () => {
        // http://localhost:8080/api/v1/blog/getsingleblog/67bdd7e2254ec3eae0b36467
        const singleBlog = await fetch(`${BASE_URL}/blog/getsingleblog/${id}`);
        const { data } = await singleBlog.json()
        setData(data);
    };
    useEffect(() => {
        getData();
    }, []);
    console.log(data)

    return (
        <>
          <img class="img-fluid" src={data.image} alt={data.title} width={300}/>
          <h1>Title: {data.title}</h1>
          <h1>Topic: {data.topic}</h1>
          <p>Content: {data.content}</p>
          <Link to={`/editblog/${id}`}><button className="btn btn-primary" type="submit">Edit Blog</button></Link>
        </>
    );
};

export default SingleBlog;
