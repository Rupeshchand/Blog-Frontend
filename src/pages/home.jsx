import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/Config";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  // const {dispatch,user} = useContext(AuthContext)
  const role = localStorage.getItem("role");
  const [data, setData] = useState([]);
  console.log(data)
  const {id} = useParams()
  const getBlogData = async () => {
    const response = await fetch(`${BASE_URL}/blog/getblogs`);
    const { data } = await response.json();
    setData(data);
  };
  useEffect(() => {
    getBlogData();
  }, []);
  const handleDelete = async (e) => {
    // e.preventDefault()
    try {
      const res = await fetch(`${BASE_URL}/blog/deleteblog/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const response = await res.json()
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {role === "admin" ? (
        <>
          {data.length > 0 ? (
            <>
              <div className="container">
                <div className="row">
                  <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-1">
                    {data.map((blogData) => (
                      <div class="card mt-3 ">
                        <img
                          src={blogData.image}
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">{blogData.title}</h5>
                          <p class="card-text">
                            {blogData.content && blogData.content.length > 30
                              ? blogData.content.slice(0, 30) + "..."
                              : blogData.content}
                          </p>
                          <div className="d-flex justify-content-between">
                            <Link to={`/blog/${blogData._id}`}>
                              <button class="btn btn-primary">
                                Read full blog
                              </button>
                            </Link>
                            <Link to={`/deleteblog/${blogData._id}`}>
                              <button
                                className="btn btn-danger"
                                onClick={handleDelete}
                                type="submit"
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            </Link>
                          </div>
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
      ) : (
        <>
          {data.length > 0 ? (
            <>
              <div className="container">
                <div className="row">
                  <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-1">
                    {data.map((blogData) => (
                      <div class="card mt-3 ">
                        <img
                          src={blogData.image}
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">{blogData.title}</h5>
                          <p class="card-text">
                            {blogData.content && blogData.content.length > 30
                              ? blogData.content.slice(0, 30) + "..."
                              : blogData.content}
                          </p>
                          <Link to={`/blog/${blogData._id}`}>
                            <button class="btn btn-primary">
                              Read full blog
                            </button>
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
      )}
    </>
  );
};

export default Home;
