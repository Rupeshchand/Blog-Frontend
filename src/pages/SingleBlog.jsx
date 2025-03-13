import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../utils/config";

const SingleBlog = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    console.log(id)
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
          <h2>Content: {data.content}</h2>
        </>
    );
};

export default SingleBlog;
