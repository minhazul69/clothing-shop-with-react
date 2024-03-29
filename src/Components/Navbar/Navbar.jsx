import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand fw-bold text-danger fs-4" to="/">
          <img
            className="img-fluid nav-logo"
            src="https://cdn.clothingshoponline.com/cdn-cgi/image/quality=80,w=1349,f=auto/Images/Logos/CSO_Horizontal1.png"
            alt=""
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <CustomLink
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                HOME
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink
                className="nav-link active"
                aria-current="page"
                to="/reviews"
              >
                REVIEWS
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink
                className="nav-link active"
                aria-current="page"
                to="/dashboard"
              >
                DASHBOARD
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink
                className="nav-link active"
                aria-current="page"
                to="/blogs"
              >
                BLOGS
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink
                className="nav-link active"
                aria-current="page"
                to="/about"
              >
                ABOUT
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
