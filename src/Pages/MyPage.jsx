import React from "react";
import { FaClock } from "react-icons/fa";
const blogPosts = [
  {
    img: "https://i.ibb.co/2St8X5v/blog1.jpg",
    title: "T-shirt design is the part of design",
    category: "Canada",
    time: "2 min read",
  },
  {
    img: "https://i.ibb.co/fMMLxxF/blog2.jpg",
    title: "Mobile app landing design & app maintain",
    category: "Application",
    time: "2 min read",
  },
  {
    img: "https://i.ibb.co/DzDtSkg/blog3.jpg",
    title: "The services provide for design",
    category: "Development",
    time: "2 min read",
  },
  {
    img: "https://i.ibb.co/2St8X5v/blog1.jpg",
    title: "T-shirt design is the part of design",
    category: "Canada",
    time: "2 min read",
  },
  {
    img: "https://i.ibb.co/fMMLxxF/blog2.jpg",
    title: "Mobile app landing design & app maintain",
    category: "Application",
    time: "2 min read",
  },
  {
    img: "https://i.ibb.co/DzDtSkg/blog3.jpg",
    title: "The services provide for design",
    category: "Development",
    time: "2 min read",
  },
  // Add more blog posts as needed
];
const MyPage = () => {
  return (
    <div className="row g-4">
      {blogPosts.map((post, index) => (
        <div className="col-md-4" key={index}>
          <div className="card shadow-sm h-100">
            <img
              src={post.img}
              className="card-img-top"
              alt={`blog-${index}`}
              style={{ height: "160px", objectFit: "cover" }}
            />
            <div className="card-body">
              <div className="d-flex justify-content-between text-muted small mb-1">
                <span
                  className="text-uppercase fw-semibold"
                  style={{ color: "#f80057" }}
                >
                  {post.category}
                </span>
                <span>
                  <FaClock className="me-1" />
                  {post.time}
                </span>
              </div>
              <h6 className="fw-semibold">{post.title}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPage;
