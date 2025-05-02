import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";

const MyPage = ({ id, type }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const { dataByCategory, loading, error } = useSelector(
    (state) => state.posts
  );

  const posts = dataByCategory[id];

  

  if (loading) return <p>Đang tải bài viết...</p>;

  return (
    <div className="my_page px-5 ">
      <div className="row g-4 pt-4 pl-3 mb-3">
        {posts &&
          posts.map((post, index) => (
            <div
              className="col-md-4 d-flex justify-content-center my-card rounded p-4  cusor pointer"
              key={index}
            >
              <div className=" h-100 " onClick={() => setSelectedPost(post)}>
                <div className="zoom-container d-flex justify-content-center">
                  {" "}
                  {post._embedded && post._embedded["wp:featuredmedia"] ? (
                    <img
                      className="zoom-image"
                      src={post._embedded["wp:featuredmedia"][0].source_url}
                      alt="Ảnh đại diện"
                    />
                  ) : (
                    <img
                      className="zoom-image"
                      src={post.img}
                      alt={`blog-${index}`}
                    />
                  )}
                </div>

                <div className="card-body p-0">
                  <div className="d-flex title my-4  justify-content-between text-muted small">
                    <div className="no-wrap" style={{ width: "100px" }}>
                      <span
                        className="text-uppercase fw-semibold mr-3 "
                        style={{ color: "#f80057" }}
                      >
                        Website
                      </span>
                    </div>
                    <span className="d-flex ">
                      <FaClock className="me-1 mb-1" />
                      {post.date.split("T")[0]}
                    </span>
                  </div>
                  <h4 className="fw-semibold">{post.title.rendered}</h4>
                </div>
              </div>
            </div>
          ))}
      </div>

      {selectedPost && (
        <Modal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
};

export default MyPage;
