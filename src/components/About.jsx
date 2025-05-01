import React, { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";

const AboutMe = () => {
  const typingRef = useRef(null);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const texts = [
      "a Web Developer",
      "a Blogger",
      "a Life Long Learner",
      "an Inner Coach",
    ];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    function type() {
      if (count === texts.length) {
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      if (typingRef.current) {
        typingRef.current.textContent = letter;
      }

      if (letter.length === currentText.length) {
        setTimeout(erase, 1500); // Giữ chữ 1.5s
      } else {
        setTimeout(type, 100); // Tốc độ gõ
      }
    }

    function erase() {
      letter = currentText.slice(0, --index);
      if (typingRef.current) {
        typingRef.current.textContent = letter;
      }

      if (letter.length === 0) {
        count++;
        index = 0;
        setTimeout(type, 200); // Delay trước khi gõ tiếp
      } else {
        setTimeout(erase, 50); // Tốc độ xóa
      }
    }

    type();

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev); // blink dấu |
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <h2 className="d-flex mb-3">
      {/* <FaUser className="mr-3" /> */}
      I'm&nbsp;
      <span
        className="color_main"
        id="typing"
        ref={typingRef}
        style={{ whiteSpace: "pre" }}
      ></span>
      <span style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </h2>
  );
};

export default AboutMe;
