import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";

const MyPage = ({id}) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const { dataByCategory, loading, error } = useSelector(
    (state) => state.posts
  );

  const posts = dataByCategory[id];




  if (loading) return <p>Đang tải bài viết...</p>;

  return (
    <div>
      <div className="row g-4 mb-3">
        {posts &&
          posts.map((post, index) => (
            <div className="col-md-4 cusor pointer" key={index}>
              <div
                className="card shadow-sm h-100"
                onClick={() => setSelectedPost(post)}
              >
                {post._embedded && post._embedded["wp:featuredmedia"] ? (
                  <img
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                    style={{ height: "160px", objectFit: "cover" }}
                    className="card-img-top"
                    alt="Ảnh đại diện"
                  />
                ) : (
                  <img
                    src={post.img}
                    className="card-img-top"
                    alt={`blog-${index}`}
                    style={{ height: "160px", objectFit: "cover" }}
                  />
                )}

                <div className="card-body">
                  <div className="d-flex justify-content-between text-muted small mb-1">
                    <div className="no-wrap" style={{ width: "50px" }}>
                      <span
                        className="text-uppercase fw-semibold mr-3 "
                        style={{ color: "#f80057" }}
                      >
                        BLOG
                      </span>
                    </div>
                    <span className="d-flex justify-content-between">
                      <FaClock className="me-1 mb-1" />
                      {post.date.split("T")[0]}
                    </span>
                  </div>
                  <h6 className="fw-semibold">{post.title.rendered}</h6>
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
