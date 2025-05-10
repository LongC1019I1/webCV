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
    dispatch(fetchPostsByCategory(13));
    dispatch(fetchPostsByCategory(7));
    dispatch(fetchPostsByCategory(8));
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
          <div className="bg-header row bg-white  shadow d-flex align-items-center p-4 gap-4 flex-wrap">
            <div className=" d-flex col-md-12 col-lg-5 row  position-relative header-left   ">
              <div className="col-lg-12 col-xl-6 d-flex justify-content-center">
                <img src={logo} className="border border-2 " alt="avatar" />
              </div>

              <div
                className="col-lg-12 px-2   col-xl-6 d-flex align-items-center my-info "
                style={{ height: "200px" }}
              >
                <div className="ml-4 row">
                  <div className="col-12 ">
                    <h4 className="fw-bold mb-0 text-center color-gray ">
                      Bạch Thành Long
                    </h4>
                    <p className="text-muted mt-1 text-center">
                      I am a Fullstack Developer
                    </p>
                  </div>

                  <div className="col-12 mt-3 d-flex  social-share  justify-content-center">
                    <button
                      className="  btn  shadow-sm"
                      style={{ color: "#878e99" }}
                    >
                      <FaFacebookF
                        className="text-muted"
                        style={{ fontSize: "22px" }}
                      />
                    </button>
                    <button
                      className="  btn  shadow-sm mx-3"
                      style={{ color: "#878e99" }}
                    >
                      <FaInstagram
                        className="text-muted"
                        style={{ fontSize: "22px" }}
                      />
                    </button>
                    <button
                      className="   btn  shadow-sm shadow-sm"
                      style={{ color: "#878e99" }}
                    >
                      <FaLinkedinIn
                        className="text-muted"
                        style={{ fontSize: "22px" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row box-right col-md-12 col-lg-6  ">
              <div className="header-right row">
                <div className="header-right_left col-lg-12 col-xl-4 col-md-4 ">
                  <div className="mb-3">
                    <strong className="color-gray">EMAIL:</strong> <br></br>
                    bachthanhlong.it@gmail.com
                  </div>
                  <div>
                    <strong className="color-gray">PHONE:</strong> <br></br>{" "}
                    +84363632015
                  </div>
                </div>
                <div className="header-right_right col-lg-12 col-xl-6 col-md-6 ">
                  <div className="mb-3">
                    <strong className="color-gray">BIRTHDAY:</strong> <br></br>{" "}
                    10 Oct
                  </div>
                  <div>
                    <strong className="color-gray">LOCATION:</strong> <br></br>{" "}
                    Trần Phú, Hà Đông, Hà Nội
                  </div>
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
                <NavLink
                  to="/cac-chung-nhan"
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive
                        ? "active bg-danger text-white rounded"
                        : "text-dark"
                    }`
                  }
                >
                  Certificate
                </NavLink>
                <a className="nav-link text-dark" href="#">
                  Contact
                </a>
              </nav>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="col-md-10 rounded bg-white ">
            <Routes>
              <Route path="/" element={<MyPage />} />
              <Route path="/blog" element={<MyPage id={13} />} />
              <Route path="/resume" element={<Resume />} />
              <Route
                path="/cac-chung-nhan"
                element={<MyPage id={7} type="blog" />}
              />
              <Route path="/work" element={<MyPage id={8} type="work" />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
