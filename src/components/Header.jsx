import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const Header = () => {
  const { dispatch, user } = useContext(AuthContext);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Blogger
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/createblog">
                  Create
                </Link>
              </li>
            </ul>
            {user ? (
              <>
                <form class="d-flex" role="search">
                  <Link>
                    <button class="btn btn-outline-dark" type="submit">
                      {user.name}
                    </button>
                  </Link>
                  <Link>
                    <button
                      onClick={handleLogout}
                      class="btn btn-danger ms-3"
                      type="submit"
                    >
                      Logout
                    </button>
                  </Link>
                </form>
              </>
            ) : (
              <form class="d-flex" role="search">
                <Link to="/login">
                  <button class="btn btn-outline-dark" type="submit">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button class="btn btn-outline-success ms-3" type="submit">
                    Register
                  </button>
                </Link>
              </form>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
