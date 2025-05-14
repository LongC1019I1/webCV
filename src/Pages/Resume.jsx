import React, { useEffect, useRef, useState } from "react";
import AnimatedProgress from "../components/AnimatedProgress";
import my_img from "../assets/img/my-profile.png";
import { FaPeopleGroup, FaCrown } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import parse from "html-react-parser";
import AboutMe from "../components/About";
const skills = {
  design: [
    { label: "AGILE - KABAN", value: 85 },
    { label: "DISC", value: 80 },
    { label: "THẦN SỐ HỌC", value: 70 },
    { label: "THẤU HIỂU NỘI TÂM ", value: 80 },
  ],
  development: [
    { label: "HTML + CSS", value: 85 },
    { label: "JavaScript", value: 90 },
    { label: "PHP", value: 75 },
    { label: "REACJS", value: 80 },
    { label: "VUEJS", value: 80 },
  ],
};
const edu = [
  {
    title: "CHUYÊN NGÀNH: ỨNG DỤNG PHẦN MỀM",
    subtitle: "TRƯỜNG FPT POLYTECHNIC (9/2014 – 12/2016)",
    description: `<p>Xếp loại: Giỏi - Điểm trung bình 8.3</p>
      <p>TIẾNG ANH: TOP NOTCH 2.2 ~ 4.0 IELTS</p>
      <p clas='edu-content_desc'>
🔹 Kiến thức cơ bản về Công nghệ thông tin và Network</br>
🔹 Quản trị, vận hành hệ quản trị cơ sở dữ liệu</br>
🔹 Thiết kế các ấn phẩm số với Photoshop và Illustrator</br>
🔹 Cài đặt và bảo trì phần cứng, phần mềm</br>
🔹 Thiết kế, xây dựng và quản trị Website </p>
      `,
    score: "8.3/10",
    highlight: true,
  },
  {
    title: "TRUNG TÂM ĐÀO TẠO LẬP TRÌNH VIÊN CODEGYM",
    subtitle: "Công ty CP CodeGym Việt Nam (11/2019 – 4/2020)",
    description: ` <p clas='edu-content_desc'>
🔹 Sử dụng thành thạo ngôn ngữ JavaScript và PHP</br>
🔹 Xây dựng được sản phẩm website hoàn chỉnh</br>
🔹 Có được tư duy lập trình tốt</br>
🔹 Thành thạo các công nghệ Laravel, MySQL, Angular… và kỹ thuật lập trình: cấu trúc dữ liệu, Cleancode…</br>
🔹 Vận dụng tốt Agile – mô hình phát triển phần mềm phổ biến toàn cầu</br>
</p>`,
    score: "4.7/5.0",
    highlight: false,
  },
  {
    title: "CHƯƠNG TRÌNH ĐÀO TẠO TƯ VẤN VÀ HUẤN LUYỆN NỘI TÂM - MENTOR WIT",
    subtitle: "Công ty CP Tổ Chức Đào Tạo WIT (07/2022 – 3/2023)",
    description: `<section>
  <h5>Kỹ năng & Năng lực đạt được (Mentor WiT)</h5>
 <p class='mt-1'>
    🔹 Kỹ năng Tư vấn & Huấn luyện cá nhân và đội nhóm</br>
    🔹 Kỹ năng giao tiếp và truyền cảm hứng</br>
    🔹 Năng lực thấu hiểu và dẫn dắt nội tâm con người</br>
    🔹 Kỹ năng nâng tầm nhận thức – chuyển hóa tư duy</br>
    🔹 Kỹ năng khai vấn để đối tượng nghe tự có câu trả lời giải quyết khó khăn của bản thân</br>
    🔹 Kỹ năng: Chạy bền 21km trên cát, bơi biển 2km</br>
   </p>
  </ul>
</section>`,
    score: "Tốt/Giỏi",
    highlight: false,
  },
];

const job = [
  {
    title: "Nhân viên SEO & Kỹ thuật",
    subtitle: "Laptop Đức Việt ( 2017 - 2019 )",
    description: `  <h5>Mô tả công việc:</h5>
  <p class='edu-conent_desc'>
    🔹SEO website bán hàng – tối ưu nội dung và từ khóa.</br>
    🔹Tư vấn bán hàng, giới thiệu sản phẩm phù hợp nhu cầu khách hàng.</br>
    🔹Lắp đặt, cấu hình phần cứng và cài đặt hệ điều hành.</br>
    🔹Hỗ trợ kỹ thuật – xử lý sự cố cho khách hàng.</br>
    🔹Quản lý thiết bị, bảo trì máy tính định kỳ.</br>
  </p>`,
    score: "4.30",
    highlight: true,
  },
  {
    title: "Lập trình viên Fullstack ",
    subtitle: "Công ty Cổ Phần Nhà Thông Minh Lumi (2020 – 2023)",
    description: `  <h5>Mô tả công việc:</h5>
  <p>
   🔹 Phát triển API backend để kết nối và điều khiển thiết bị nhà thông minh cho công ty.</br>
   🔹 Xây dựng giao diện web Desktop ứng dụng Lumi App.</br>
   🔹 Phân tích, thiết kế hệ thống backend, đánh giá và tối ưu các tính năng mới và cũ.</br>
   🔹 Viết tài liệu kỹ thuật, đảm bảo chất lượng và tiến độ dự án.</br>
  </p>

  <h5>Công nghệ sử dụng:</h5>
  <p class='mt-2'>
   🔹 <strong>Backend:</strong> PHP (Yii2), NodeJS, RESTful API, JSON</br>
   🔹 <strong>Frontend:</strong> JavaScript, HTML/CSS (Web App)</br>
   🔹 <strong>Database:</strong> MySQL, PostgreSQL, MongoDB</br>
   🔹 <strong>Realtime / Message Queue:</strong> MQTT, RabbitMQ, Kafka (ưu tiên)</br>
   🔹 <strong>Khác:</strong> Git, Linux (Ubuntu, CentOS), LEMP stack</br>
  </p>`,
    score: "4.70",
    highlight: false,
  },
  {
    title: "Freelancer – Kinh doanh & Chăm sóc Sức khỏe  ",
    subtitle: "(2024 – nay)",
    description: `  <h5>Mô tả công việc:</h5>
    <p>
  🔹 Quản lý và vận hành web Shopee <a className='text-secondary' href="https://shopee.vn/bobestore688" target="_blank">Bobe Store 688</a>, và fanpage bán hàng online <a className='text-secondary' href="https://www.facebook.com/KousCorner" target="_blank">KousCorner</a>, xử lý đơn hàng và chăm sóc khách hàng</br>
  🔹 Khởi xướng và điều phối  <a className='text-secondary' href="https://maps.app.goo.gl/8H1e6nLKFimygikH7" target="_blank">Nhóm Dinh Dưỡng  </a>, CLB Chăm Sóc Sức Khỏe, tổ chức các buổi chia sẻ và kết nối cộng đồng, giao tiếp và giải quyết vấn đề – nền tảng quan trọng trong môi trường Agile/Scrum</br></p>`,
    score: "4.70",
    highlight: false,
  },
];

const ExperienceSkills = () => {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollPercentage = (scrollTop + windowHeight) / documentHeight;

      if (scrollPercentage >= 0.93) {
        setInView(true); // Kích hoạt progress bar
      } else {
        setInView(false); // Ẩn lại nếu cần
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container ">
      <section className="container py-5">
        <div className="row align-items-center">
          {/* Avatar */}
          <div className="col-lg-5 my-avatar rounded text-center zoom-container pt-4 pointer">
            <img
              src={my_img}
              className="img-fluid rounded zoom-image "
              alt="Profile"
            />
          </div>

          {/* Info */}
          <div className="col-lg-7 " style={{ "padding-left": "20px" }}>
            <p className="text-uppercase color_main fw-bold small">
              WELCOME TO my PROFILE
            </p>
            <AboutMe />
            <p className="text-muted">
              Tôi là một Lập trình viên Fullstack với kinh nghiệm hơn 3 năm
              trong việc phát triển hệ thống Web App cả Frontend và Backend. Tôi
              từng làm việc tại công ty công nghệ nhà thông minh Lumi, tham gia
              phát triển API, thiết kế hệ thống backend, và xây dựng ứng dụng
              Desktop web. Đồng thời, tôi còn có kinh nghiệm kinh doanh tự do và
              điều phối cộng đồng, giúp tôi phát triển kỹ năng giao tiếp, làm
              việc tổ chức đội nhóm đặc biệt là theo mô hình Scrum.
            </p>
            <p className="text-muted">
              Tôi đam mê công nghệ, yêu thích làm việc với con người, và đặc
              biệt là khám phá nội tâm con người, Tôi luôn rất muốn được tham dự
              và xây dựng được đội ngũ vững mạnh – cả về chuyên môn lẫn văn hóa.
            </p>
            <div className="mt-4">
              <h5 className="h5 text-success fw-bold">🌱 Triết lý làm việc</h5>
              <p className="fst-italic text-muted mt-1">
                "Mọi thành công đều đến từ môi trường tốt"
              </p>
              <p className="text-secondary mt-1">
                Tôi tin rằng{" "}
                <b>
                  mọi thành công bền vững đều xuất phát từ một môi trường tốt
                </b>{" "}
                – nơi con người được phát triển và văn hóa được vun đắp. Khi đội
                ngũ đủ mạnh và giá trị chung đủ rõ ràng, mọi công cụ và phương
                pháp chỉ còn là chất xúc tác để bứt phá hướng đến mọi mục tiêu
                mà chúng ta mong muốn.
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          {" "}
          <button
            className=" edu-card btn  mt-1 shadow"
            style={{ height: "40px", "line-height": "40px", padding: "0 15px" }}
          >
            <p className="text-muted">Download My CV</p>
          </button>
        </div>

        {/* Services */}
        <div className="mt-5 text-center">
          <h5 className="fw-bold">What I am Doing</h5>
          <div className="row mt-4">
            <div className="col-md-6 mb-3">
              <div className="border rounded p-4 h-100">
                <div className="mb-3 text-danger fs-2">
                  <i className="bi bi-pencil-square"></i>
                </div>
                <div className="d-flex justify-center mb-2 w-100 ">
                  <FaPeopleGroup className="w-100 color_main pointer display-6" />
                </div>

                <div className="title-area text-center fw-bold">
                  QUẢN LÝ <FaCrown className="d-inline mb-1" /> <br />
                  XÂY DỰNG VĂN HÓA ĐỘI NHÓM
                </div>

                <p className="mb-3 text-muted" style={{ textAlign: "justify" }}>
                  Tôi không chỉ hiểu và vận hành đội ngũ theo phương pháp{" "}
                  <strong>Agile/Scrum</strong>, mà còn kết hợp những công cụ
                  khám phá con người như <strong>DISC</strong> và{" "}
                  <strong>Thần Số Học</strong> để hiểu sâu từng cá nhân. Từ đó
                  tôi thiết kế văn hóa đội nhóm phù hợp và nuôi dưỡng động lực
                  từ bên trong.
                </p>

                <p className="mb-3 text-muted" style={{ textAlign: "justify" }}>
                  Tôi tin rằng{" "}
                  <em>đội ngũ mạnh không đến từ quy trình cứng nhắc</em>, mà từ
                  <strong>
                    {" "}
                    sự thấu hiểu – kết nối – và phát triển bền vững{" "}
                  </strong>{" "}
                  giữa con người với nhau.
                </p>

                <p
                  className="text-muted mt-4"
                  style={{ fontStyle: "italic", textAlign: "justify" }}
                >
                  <span style={{ fontWeight: 500 }}>
                    Công nghệ giúp tối ưu công việc – Còn hiểu con người giúp
                    đội ngũ vươn xa.
                  </span>{" "}
                  Đó là lý do tôi luôn chọn đồng hành cùng con người, không chỉ
                  để hoàn thành mục tiêu, mà để cùng nhau{" "}
                  <span className="text-danger">
                    chuyển hóa và trưởng thành
                  </span>
                  .
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="border rounded p-4 h-100">
                <div className="mb-3 text-danger fs-2">
                  <i className="bi bi-display"></i>
                </div>

                <div className="d-flex justify-center mb-2 w-100  ">
                  <MdWeb className="w-100 color_main pointer display-6" />
                </div>

                <div className="title-area text-center fw-bold">
                  Lập trình Web Fullstack
                </div>

                <p className="mb-2 text-muted" style={{ textAlign: "justify" }}>
                  Tôi có hơn 3 năm kinh nghiệm phát triển Web App với khả năng
                  đảm nhiệm cả <strong>frontend</strong> và{" "}
                  <strong>backend</strong>, từng xây dựng API, giao diện và hệ
                  thống backend phục vụ điều khiển thiết bị tại công ty Lumi.
                </p>

                <p className="mb-2 text-muted" style={{ textAlign: "justify" }}>
                  Am hiểu <strong>RESTful API</strong>,{" "}
                  <strong>MySQL / PostgreSQL / MongoDB</strong>, có kinh nghiệm
                  sử dụng <strong>MQTT, RabbitMQ, Kafka</strong>, và làm việc
                  với{" "}
                  <strong>PHP (Yii2), Node.js, JavaScript, LEMP stack</strong>{" "}
                  trên môi trường <strong>Linux</strong>.
                </p>

                <p style={{ fontStyle: "italic", color: "#888" }}>
                  Lập trình không chỉ là viết mã – mà là giải pháp tối ưu, tạo
                  trải nghiệm tốt và xây dựng giá trị bền vững.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Education & Job */}
      <div className="row g-4">
        <div className="col-md-6">
          <h5 className="text-uppercase text-muted">2007 - 2010</h5>
          <h5 className="fw-bold mb-4">Education Quality</h5>
          {edu.map((item, index) => (
            <div
              key={index}
              className={`edu-card-2  p-4 position-relative rounded-3 mb-3  bg-light`}
            >
              <div className="row">
                <h5 className="col-10 fw-bold title">{item.title}</h5>
                <span className="col-2 badge score-badge">{item.score}</span>
                <small className="text-muted d-block mb-3 subtitle">
                  {item.subtitle}
                </small>
              </div>

              <hr />
              <p className={`mb-0 text-muted edu-content `}>
                {" "}
                {parse(item.description)}
              </p>
            </div>
          ))}
        </div>

        <div className="col-md-6">
          <h5 className="text-uppercase text-muted">2007 - 2010</h5>
          <h5 className="fw-bold mb-4">Job Experience</h5>

          {job.map((item, index) => (
            <div
              key={index}
              className={`edu-card-2 p-4 position-relative rounded-3 mb-3  bg-light`}
            >
              <h5 className="fw-bold title">{item.title}</h5>
              <small className="text-muted d-block mb-3 subtitle ">
                {item.subtitle}
              </small>
              <hr />
              <p className={`mb-0 text-muted edu-content `}>
                {parse(item.description)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Section */}
      <div className="container mt-5">
        <div className="row">
          {/* Design Skill */}
          <div className="col-md-6 mb-4">
            <p className="color_main mb-1 fw-semibold">Features</p>
            <h5 className="fw-bold my-3">Xây Dựng Đội Nhóm</h5>
            {skills.design.map((skill, idx) => (
              <div className="mb-3" key={idx}>
                <div className="d-flex justify-content-between">
                  <span className="text-uppercase small">{skill.label}</span>
                  <span className="small fw-semibold">{skill.value}%</span>
                </div>
                <AnimatedProgress value={inView ? skill.value : 0} />
              </div>
            ))}
          </div>

          {/* Development Skill */}
          <div className="col-md-6 mb-4">
            <p className="color_main mb-1 fw-semibold">Features</p>
            <h5 className="fw-bold  my-3">Development Skill</h5>
            {skills.development.map((skill, idx) => (
              <div className="mb-3" key={idx}>
                <div className="d-flex justify-content-between">
                  <span className="text-uppercase small">{skill.label}</span>
                  <span className="small fw-semibold">{skill.value}%</span>
                </div>
                {/* <div className="progress gradient-bar">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div> */}

                <AnimatedProgress value={inView ? skill.value : 0} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSkills;
