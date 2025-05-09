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
      </div>

      {/* Main Layout */}
      <div className="container tab-content-wrapper pt-5">
        <div className="row">
          {/* Sidebar */}
          <div className="menu col-md-2 mb-4">
            <div className="bg-white rounded p-3 py-4 mb-4">
              <div className=" d-flex justify-content-center">
                <img
                  src={logo}
                  className="border border-3 rounded avatar-header"
                  style={{ width: "170px" }}
                  alt="avatar"
                />
              </div>

              <div className="my-3">
                <p
                  style={{ "font-size": "18px", "text-align": "center" }}
                  className="fw-bold mb-0"
                >
                  Bạch Thành Long
                </p>
                <p  style={{ "font-size": "17px", "text-align": "center" }} className="text-muted mb-1 text-center ">Thanh Long Dev</p>
              </div>

              <div className=" d-flex justify-content-center">
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
