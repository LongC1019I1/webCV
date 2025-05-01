import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./store/categorySlice";
import { fetchPostsByCategory } from "./store/postSlice";
import bg from "./assets/img/header-bg-3.png";
import MyPage from "./Pages/MyPage";
import Work from "./Pages/Work";
import Resume from "./Pages/Resume";
import logo from "./assets//img/logo.png";
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
    <div className="App pb-5">
      {/* Header */}
      <div className="">
        <img
          src={bg}
          className="img-fluid w-100 "
          style={{ height: "300px" }}
          alt="header"
        />
        <div className="position-relative container form-header ">
          <div className="row bg-white rounded shadow d-flex align-items-center p-4 gap-4 flex-wrap">
            <div className="col-md-6 d-flex  justify-content-start  ">
              <div className="w-25">
                <img
                  src={logo}
                  className="border border-3 mr-3 rounded"
                  width="190"
                  height="190"
                  alt="avatar"
                />
              </div>

              <div
                className="social-share flex-grow-1 d-flex align-items-center border-end"
                style={{ height: "200px" }}
              >
                <div className=" ">
                  <h4 className="fw-bold mb-0">Bạch Thành Long</h4>
                  <p className="text-muted mb-1">I am a Fullstack Developer</p>
                  <div className="d-flex gap-2 mt-3">
                    <button
                      className=" edu-card  btn btn-light shadow-sm"
                      style={{ color: "#878e99" }}
                    >
                      <FaFacebookF style={{ fontSize: "20px" }} />
                    </button>
                    <button
                      className="edu-card  btn btn-light shadow-sm mx-3"
                      style={{ color: "#878e99" }}
                    >
                      <FaInstagram style={{ fontSize: "20px" }} />
                    </button>
                    <button
                      className=" edu-card btn btn-light shadow-sm"
                      style={{ color: "#878e99" }}
                    >
                      <FaLinkedinIn style={{ fontSize: "20px" }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row col-md-6 text-muted small w-50">
              <div className="col-6">
                <div>
                  <strong>Email:</strong> bachthanhlong.it@gmail.com
                </div>
                <div>
                  <strong>Phone:</strong> +84363632015
                </div>
              </div>
              <div className="col-6">
                <div>
                  <strong>Birthday:</strong> 10 Oct
                </div>
                <div>
                  <strong>Location:</strong> Trần Phú, Hà Đông, Hà Nội
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="container tab-content-wrapper pt-5">
        <div className="row">
          {/* Sidebar */}
          <div className="menu col-md-2 mb-4">
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
              <Route path="/blog" element={<MyPage id={6} />} />
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
