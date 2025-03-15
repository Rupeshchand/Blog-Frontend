import React, { useContext, useState } from "react";
import { BASE_URL } from "../utils/Config";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  console.log(credentials);
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
        credentials: "include", //we are telling that we will pass only secure values
      });
      const response = await res.json();
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data,
        token: response.token,
        role: response.role,
      });
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row">
          <form className="shadow p-5 rounded" onSubmit={handleSubmit}>
            <h2 className="text-center">Login</h2>
            {/* <div class="mb-3 mt-3">
                                <button onclick="window.location.href='/api/auth/google'" class="btn border">Google</button>
                                <button onclick="window.location.href='/api/auth/github'" class="btn border">GitHub</button>
                            </div> */}
            <div class="mb-3">
              <label htmlFor="email" class="form-label">
                Email address
              </label>
              <input
                onChange={handleChange}
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter your email"
              />
              {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div class="mb-3">
              <label htmlFor="password" class="form-label">
                Password
              </label>
              <input
                onChange={handleChange}
                type="password"
                placeholder="Enter your password"
                class="form-control"
                id="password"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
