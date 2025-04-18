import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";
import Modal from "../components/Modal";

const blogPosts = [
  {
    img: "https://i.ibb.co/DzDtSkg/blog3.jpg",
    title: "The services provide for design",
    category: "WORK",
    time: "2 min read",
    description1:
      "Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.",
    description2:
      "Dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!",
  },
  {
    img: "https://i.ibb.co/DzDtSkg/blog3.jpg",
    title: "WORK",
    category: "WORK",
    time: "2 min read",
    description1:
      "Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.",
    description2:
      "Dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!",
  },
  {
    img: "https://i.ibb.co/DzDtSkg/blog3.jpg",
    title: "WORK",
    category: "WORK",
    time: "2 min read",
    description1:
      "Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.",
    description2:
      "Dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!",
  },
  {
    img: "https://i.ibb.co/DzDtSkg/blog3.jpg",
    title: "WORK",
    category: "WORK",
    time: "2 min read",
    description1:
      "Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.",
    description2:
      "Dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!",
  },
];

const MyPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div>
      <div className="row g-4">
        {blogPosts.map((post, index) => (
          <div className="col-md-4 cusor pointer" key={index}>
            <div
              className="card shadow-sm h-100"
              onClick={() => setSelectedPost(post)}
            >
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

      {selectedPost && (
        <Modal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </div>
  );
};

export default MyPage;
