// Modal.jsx
import React, { useState, useEffect } from "react";

import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { FaClock } from "react-icons/fa";
import parse from "html-react-parser";

const Modal = ({ post, onClose }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const categories = useSelector((state) => state.categories.data);

  useEffect(() => {
    if (post) {
      setTimeout(() => setFadeIn(true), 10);
    }
  }, [post]);

  const handleOverlayClick = (e) => {
    // Nếu click chính xác vào overlay thì mới close
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setFadeIn(false);
      setIsClosing(false);
      onClose();
    }, 400); // Thời gian khớp với CSS
  };

  return (
    <div
      onClick={handleOverlayClick}
      className={`modal-overlay ${fadeIn && !isClosing ? "fade-in" : ""} ${
        isClosing ? "fade-out" : ""
      }`}
    >
      <div className="modal-content-custom">
        <button onClick={handleClose} className="close-button main-color">
          <IoMdClose size={20} />
        </button>

        <div className="modal-image">
          {post._embedded && post._embedded["wp:featuredmedia"] ? (
            <img
              src={post._embedded["wp:featuredmedia"][0].source_url}
              // style={{ height: "160px", objectFit: "cover" }}
              className="card-img-top my-4"
              alt="Ảnh đại diện"
            />
          ) : (
            <img
              src={post.img}
              className="card-img-top"

              // style={{ height: "160px", objectFit: "cover" }}
            />
          )}
        </div>

        <div className="modal-details">
          <p className="text-muted mb-1">
            Featured -{" "}
            <strong>
              {post.categories.map((id) => {
                let category = categories.find((cate) => cate.id == id);

                return category ? (
                  <span
                    className="text-uppercase fw-semibold mr-3 "
                    style={{ color: "#f80057" }}
                  >
                    {category.name}
                  </span>
                ) : null;
              })}
            </strong>
          </p>
          <div className="d-flex justify-content-between">
            {" "}
            <h4 className="fw-bold mb-3" style={{ color: "#151515" }}>
              {post.title.rendered}
            </h4>
            <span className="d-flex justify-content-between">
              <FaClock
                className="me-1 mb-1"
                style={{ position: "relative", top: "5px" }}
              />
              {post.date.split("T")[0]}
            </span>
          </div>
          <div className="content">
            {post.content && post.content.rendered
              ? parse(post.content.rendered)
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
