import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";

const MyPage = ({ id, type }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const { dataByCategory, loading, error } = useSelector(
    (state) => state.posts
  );

  console.log({ dataByCategory });
  const posts = dataByCategory[id];

  console.log({ posts, id });

  if (loading) return <p>Đang tải bài viết...</p>;

  return (
    <div className="my_page  ">
      <div className="row g-4 pt-4 px-5 mb-3 my_page_container">
        {posts &&
          posts.map((post, index) => (
            <div
              className="col-md-4 d-flex justify-content-center my-card rounded p-4  cusor pointer"
              key={index}
            >
              <div
                className="w-100 h-100 "
                onClick={() => setSelectedPost(post)}
              >
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
                    <div className="no-wrap" style={{ width: "125px" }}>
                      {(
                        post._embedded["wp:term"].find(
                          (group) => group[0]?.taxonomy === "post_tag"
                        ) || []
                      ).map((tag) => (
                        <span
                          key={tag.id}
                          className="text-uppercase fw-semibold mr-3"
                          style={{ color: "#f80057" }}
                        >
                          {tag.name}
                        </span>
                      ))}
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
        <Modal
          type={type}
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </div>
  );
};

export default MyPage;
