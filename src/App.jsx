import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./store/categorySlice";
import { fetchPostsByCategory } from "./store/postSlice";
import bg from "./assets/img/bg-image-9.webp";
import MyPage from "./Pages/MyPage";
import Work from "./Pages/Work";
import Resume from "./Pages/Resume";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaClock,
} from "react-icons/fa";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchPostsByCategory(6));
    dispatch(fetchPostsByCategory(7));
  }, [dispatch]);

  return (
    <div className="App bg-light pb-5">
      {/* Header */}
      <div className="position-relative">
        <img
          src={bg}
          className="img-fluid w-100 "
          style={{ height: "300px" }}
          alt="header"
        />
        <div
          className="container position-absolute  start-50  translate-middle-x"
          style={{ top: "205px" }}
        >
          <div className="bg-white rounded shadow d-flex align-items-center p-4 gap-4 flex-wrap">
            <img
              src="https://i.ibb.co/ZGN7fqX/avatar.png"
              className="rounded-circle border border-3"
              width="100"
              height="100"
              alt="avatar"
            />
            <div className="flex-grow-1">
              <h4 className="fw-bold mb-0">Md Alamin Bali</h4>
              <p className="text-muted mb-1">I am a Technician</p>
              <div className="d-flex gap-2 mt-3">
                <button
                  className=" edu-card  btn btn-light shadow-sm"
                  style={{ color: "#878e99" }}
                >
                  <FaFacebookF />
                </button>
                <button
                  className="edu-card  btn btn-light shadow-sm mx-3"
                  style={{ color: "#878e99" }}
                >
                  <FaInstagram />
                </button>
                <button
                  className=" edu-card btn btn-light shadow-sm"
                  style={{ color: "#878e99" }}
                >
                  <FaLinkedinIn />
                </button>
              </div>
            </div>
            <div className="row text-muted small w-50">
              <div className="col-6">
                <div>
                  <strong>Email:</strong> example@gmail.com
                </div>
                <div>
                  <strong>Phone:</strong> +880123456789
                </div>
              </div>
              <div className="col-6">
                <div>
                  <strong>Birthday:</strong> 20 August
                </div>
                <div>
                  <strong>Location:</strong> Barisal, Bangladesh
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="container mt-5 pt-5">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-2 mb-4">
            <div className="bg-white rounded shadow p-3">
              <nav className="nav flex-column gap-2">
           
                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive
                        ? "active bg-danger text-white rounded"
                        : "text-dark"
                    }`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/work"
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive
                        ? "active bg-danger text-white rounded"
                        : "text-dark"
                    }`
                  }
                >
                  Work
                </NavLink>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive
                        ? "active bg-danger text-white rounded"
                        : "text-dark"
                    }`
                  }
                >
                  Blog
                </NavLink>
                <a className="nav-link text-dark" href="#">
                  Contact
                </a>
              </nav>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="col-md-10 rounded bg-white">
            <Routes>
              <Route path="/" element={<MyPage />} />
              <Route path="/blog" element={<MyPage id={6}  />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/work" element={<MyPage id={7} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
