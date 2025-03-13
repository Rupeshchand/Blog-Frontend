import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/Config";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  const getBlogData = async () => {
    // http://localhost:8080/api/v1/blog/getblogs
    const response = await fetch(`${BASE_URL}/blog/getblogs`);
    const { data } = await response.json();
    setData(data);
  };
  useEffect(() => {
    getBlogData();
  }, []);
  console.log(data);
  return (
    <>
      {data.length > 0 ? (
        <>
          <div className="container">
            <div className="row">
              <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-1">
                {data.map((blogData) => (
                  <div class="card mt-3 ">
                    <img src={blogData.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">{blogData.title}</h5>
                      <p class="card-text">{blogData.content}</p>
                      <Link to={`/blog/${blogData._id}`}>
                        <button class="btn btn-primary">Read full blog</button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>Loading...!</>
      )}
    </>
  );
};

export default Home;