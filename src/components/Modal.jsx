// Modal.jsx
import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { FaClock } from "react-icons/fa";
import { FaChevronCircleDown } from "react-icons/fa";

import parse from "html-react-parser";

const Modal = ({ post, onClose, type }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const categories = useSelector((state) => state.categories.data);

  useEffect(() => {
    if (post) {
      setTimeout(() => setFadeIn(true), 10);
    }
  }, [post]);

  const tagIds = post.tags;

  // Lấy tag objects đã được embed sẵn
  const tagObjects = post._embedded["wp:term"].find(
    (termGroup) => termGroup.length > 0 && termGroup[0].taxonomy === "post_tag"
  );

  // Đổi tag ID thành tên
  const tagNames = tagIds
    .map((tagId) => {
      const tag = tagObjects.find((t) => t.id === tagId);
      return tag ? tag.name : null;
    })
    .filter(Boolean);

  console.log(tagNames); // ["Blog", "Website"]

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
        <button onClick={handleClose} className="close-button color-pink ">
          <IoMdClose size={20} />
        </button>
        <div className="row my-4 ">
          <div
            className={`${
              type === "work" ? "col-6" : "modal-post"
            } modal-image`}
          >
            {post.title.rendered == "Lumi App Desktop" ? (
              <iframe
                width="396"
                height={"65%"}
                className="rounded"
                src="https://www.youtube.com/embed/2pf5gNNX3wU"
                title="Lumi Life phiên bản dành cho máy tính - Giới thiệu và hướng dẫn sử dụng"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            ) : post.title.rendered == "Lumi Walker" ? (
              <iframe
                width="100%"
                height={"55%"}
                className="rounded"
                src="https://www.youtube.com/embed/cg24oZMCaEg"
                title="App Lumi Walker"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            ) : post._embedded && post._embedded["wp:featuredmedia"] ? (
              <img
                src={post._embedded["wp:featuredmedia"][0].source_url}
                // style={{ height: "160px", objectFit: "cover" }}
                className="card-img-avt rounded"
                alt="Ảnh đại diện"
              />
            ) : (
              ""
            )}
          </div>

          {/* <div className="col-6 
          modal-details "></div> */}
          <div className={type == "work" ? "col-6" : ""}>
            <p className="text-muted mb-3 fw-semibold mb-1">
              DỰ ÁN -{" "}
              <strong>
                {tagNames.map((tag) => {
                  return (
                    <span
                      className="text-uppercase fw-semibold mr-1 "
                      style={{ color: "#f80057" }}
                    >
                      {" "}
                      {tag}{" "}
                    </span>
                  );
                })}
                {/* {post.categories.map((id) => {
                  let category = categories.find((cate) => cate.id == id);

                  return category ? (
                    <span
                      className="text-uppercase fw-semibold mr-3 "
                      style={{ color: "#f80057" }}
                    >
                      {category.name}
                    </span>
                  ) : null;
                })} */}
              </strong>
            </p>
            <div className="d-flex justify-content-between">
              {" "}
              <h2 className="fw-bold mb-3" style={{ color: "#151515" }}>
                {post.title.rendered}
              </h2>
              {/* <span className="d-flex justify-content-between">
                <FaClock
                  className="me-1 mb-1"
                  style={{ position: "relative", top: "5px" }}
                />
                {post.date.split("T")[0]}
              </span> */}
            </div>
            <div className="content">
              {post.content && post.content.rendered
                ? parse(post.content.rendered)
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
