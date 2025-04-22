import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";
import Modal from "../components/Modal";

const blogPosts = [
  {
    img: "https://i.ibb.co/DzDtSkg/blog3.jpg",
    title: "The services provide for design",
    category: "Development",
    time: "2 min read",
    description1:
      "Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.",
    description2:
      "Dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!",
  },
  {
    img: "https://i.ibb.co/DzDtSkg/blog3.jpg",
    title: "The services provide for design",
    category: "Development",
    time: "2 min read",
    description1:
      "Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.",
    description2:
      "Dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!",
  },
  {
    img: "https://i.ibb.co/DzDtSkg/blog3.jpg",
    title: "The services provide for design",
    category: "Development",
    time: "2 min read",
    description1:
      "Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.",
    description2:
      "Dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!",
  },
  {
    img: "https://i.ibb.co/DzDtSkg/blog3.jpg",
    title: "Tsadas",
    category: "Development",
    time: "2 min read",
    description1:
      "Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.",
    description2:
      "Dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!",
  },
];

const MyPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost/wordpress/wp-json/wp/v2/posts?categories=6&_embed")
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi khi fetch bài viết:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Đang tải bài viết...</p>;

  return (
    <div>
      <div className="row g-4 mb-3">
        {posts.map((post, index) => (
          <div className="col-md-4 cusor pointer" key={index}>
            <div
              className="card shadow-sm h-100"
              // onClick={() => setSelectedPost(post)}
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
                  <span
                    className="text-uppercase fw-semibold"
                    style={{ color: "#f80057" }}
                  >
                    {post.categories[0]}
                  </span>
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
