// Modal.jsx
import React, { useState, useEffect } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const Modal = ({ post, onClose }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (post) {
      setTimeout(() => setFadeIn(true), 10);
    }
  }, [post]);

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
      className={`modal-overlay ${fadeIn && !isClosing ? "fade-in" : ""} ${
        isClosing ? "fade-out" : ""
      }`}
    >
      <div className="modal-content-custom">
        <button onClick={handleClose} className="close-button main-color">
          <IoMdClose size={20} />
        </button>

        <div className="modal-image">
          <img
            src={post.img}
            alt="modal-img"
            className="img-fluid rounded-3"
          />
        </div>

        <div className="modal-details">
          <p className="text-muted mb-1">
            Featured - <strong>{post.category}</strong>
          </p>
          <h4 className="fw-bold mb-3" style={{ color: "#151515" }}>
            {post.title}
          </h4>
          <p className="text-muted mb-2" style={{ fontSize: "1rem" }}>
            {post.description1}
          </p>
          <p className="text-muted mb-4" style={{ fontSize: "1rem" }}>
            {post.description2}
          </p>
          <div className="d-flex gap-3">
            <button className="d-flex edu-card  btn btn-light shadow rounded-3 px-4 py-2 text-danger fw-bold">
              LIKE THIS <FaThumbsUp className="ms-2" />
            </button>
            <button className="edu-card  btn btn-light shadow rounded-3 px-4 py-2 fw-bold text-danger">
              VIEW PROJECT &nbsp;&rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;