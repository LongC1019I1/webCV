import React from "react";
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
    { label: "THẤU HIỂU TÂM LÝ", value: 80 },
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
      <p>Kiến thức cơ bản về Công nghệ thông tin, mạng máy tính
Quản trị, vận hành hệ quản trị cơ sở dữ liệu
Thiết kế các ấn phẩm số với Photoshop và Illustrator
Cài đặt và bảo trì phần cứng, phần mềm
Thiết kế, xây dựng và quản trị website </p>
      `,
    score: "8.3",
    highlight: true,
  },
  {
    title: "TRUNG TÂM ĐÀO TẠO LẬP TRÌNH VIÊN CODEGYM",
    subtitle: "Công ty CP CodeGym Việt Nam (11/2019 – 4/2020)",
    description: `<ul>
<li>Sử dụng thành thạo ngôn ngữ JavaScript và PHP</li>
<li>Xây dựng được sản phẩm website hoàn chỉnh</li>
<li>Có được tư duy lập trình tốt</li>
<li>Thành thạo các công nghệ Laravel, MySQL, Angular… và kỹ thuật lập trình: cấu trúc dữ liệu, Cleancode…</li>
<li>Vận dụng tốt Agile – mô hình phát triển phần mềm phổ biến toàn cầu</li>
<li>Nắm chắc kiến thức luyện thi Chứng chỉ Lập trình Quốc tế (OCA)</li>
</ul>`,
    score: "4.70",
    highlight: false,
  },
  {
    title: "CHƯƠNG TRÌNH ĐÀO TẠO TƯ VẤN VÀ HUẤN LUYỆN NỘI TÂM - MENTOR WIT",
    subtitle: "Công ty CP Tổ Chức Đào Tạo WIT (07/2022 – 3/2023)",
    description: `<section>
  <h5>Kỹ năng & Năng lực đạt được (Mentor WiT)</h5>
 
    <li>Kỹ năng Tư vấn & Huấn luyện cá nhân và đội nhóm</li>
    <li>Kỹ năng giao tiếp và truyền cảm hứng sâu sắc</li>
    <li>Năng lực thấu hiểu và dẫn dắt nội tâm con người</li>
    <li>Kỹ năng nâng tầm nhận thức – chuyển hóa tư duy</li>
    <li>Kỹ năng khai vấn dựa trên nền tảng Nhân – Duyên – Quả</li>
    <li>Kỹ năng huấn luyện thể chất: chạy bền 21km trên cát, bơi biển 2km</li>
    <li>Năng lực quản trị toàn diện 4 lĩnh vực:
      <ul>
        <li>* Nội tâm</li>
        <li>* Sức khỏe</li>
        <li>* Mối quan hệ</li>
        <li>* Tài chính</li>
      </ul>
    </li>
   
  </ul>
</section>`,
    score: "Bằng Tốt",
    highlight: false,
  },
];

const job = [
  {
    title: "Nhân viên SEO & Kỹ thuật tại Laptop",
    subtitle: "Laptop Đức Việt ( 2017 - 2019 )",
    description: `  <h5>Mô tả công việc:</h5>
  <ul>
    <li>SEO website bán hàng – tối ưu nội dung và từ khóa.</li>
    <li>Tư vấn bán hàng, giới thiệu sản phẩm phù hợp nhu cầu khách hàng.</li>
    <li>Lắp đặt, cấu hình phần cứng và cài đặt hệ điều hành.</li>
    <li>Hỗ trợ kỹ thuật – xử lý sự cố cho khách hàng.</li>
    <li>Quản lý thiết bị, bảo trì máy tính định kỳ.</li>
  </ul>`,
    score: "4.30",
    highlight: true,
  },
  {
    title: "Lập trình viên Fullstack ",
    subtitle: "Công ty Cổ Phần Nhà Thông Minh Lumi (2020 – 2023)",
    description: `  <h5>Mô tả công việc:</h5>
  <ul>
    <li>Phát triển API backend để kết nối và điều khiển thiết bị nhà thông minh cho các đối tác.</li>
    <li>Xây dựng giao diện web desktop ứng dụng Lumi App.</li>
    <li>Phân tích, thiết kế hệ thống backend, đánh giá và tối ưu các tính năng mới và cũ.</li>
    <li>Viết tài liệu kỹ thuật, đảm bảo chất lượng và tiến độ dự án.</li>
    <li>Hợp tác chặt chẽ cùng team kỹ thuật theo mô hình Agile/Scrum.</li>
  </ul>

  <h5>Công nghệ sử dụng:</h5>
  <ul>
    <li><strong>Backend:</strong> PHP (Yii2), NodeJS, RESTful API, JSON</li>
    <li><strong>Frontend:</strong> JavaScript, HTML/CSS (Web App)</li>
    <li><strong>Database:</strong> MySQL, PostgreSQL, MongoDB</li>
    <li><strong>Realtime / Message Queue:</strong> MQTT, RabbitMQ, Kafka (ưu tiên)</li>
    <li><strong>Khác:</strong> Git, Linux (Ubuntu, CentOS), LEMP stack</li>
  </ul>`,
    score: "4.70",
    highlight: false,
  },
  {
    title: "Freelancer – Kinh doanh & Chăm sóc Sức khỏe  ",
    subtitle: "(2024 – nay)",
    description: `  <h5>Mô tả công việc:</h5>
  <li>Quản lý và vận hành web Shopee <a className='text-secondary' href="https://shopee.vn/bobestore688" target="_blank">Bobe Store 688</a>, và fanpage bán hàng online <a className='text-secondary' href="https://www.facebook.com/KousCorner" target="_blank">KousCorner</a>, xử lý đơn hàng và chăm sóc khách hàng</li>
    <li>Khởi xướng và điều phối CLB chăm sóc sức khỏe Herbalife, tổ chức các buổi chia sẻ và kết nối cộng đồng</li>
    <li>Phát triển kỹ năng tổ chức, làm việc nhóm, giao tiếp và giải quyết vấn đề – nền tảng quan trọng trong môi trường Agile/Scrum</li>`,
    score: "4.70",
    highlight: false,
  },
];

const ExperienceSkills = () => {
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
              Visit my portfolio & hire me
            </p>
            <AboutMe />
            <p className="text-muted">
              Tôi là một Lập trình viên Fullstack với kinh nghiệm hơn 3 năm
              trong việc phát triển hệ thống Web App cả Frontend và Backend. Tôi
              từng làm việc tại công ty công nghệ nhà thông minh Lumi, tham gia
              phát triển API, thiết kế hệ thống backend, và xây dựng ứng dụng
              desktop web. Đồng thời, tôi còn có kinh nghiệm kinh doanh tự do và
              điều phối cộng đồng, giúp tôi phát triển kỹ năng giao tiếp, làm
              việc nhóm và tư duy tổ chức theo mô hình Scrum.
            </p>
            <p className="text-muted">
              Tôi đam mê công nghệ, yêu thích khám phá nội tâm con người, và
              luôn hướng đến việc xây dựng đội ngũ vững mạnh – cả về chuyên môn
              lẫn văn hóa.
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
                pháp chỉ còn là chất xúc tác để bứt phá.
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          {" "}
          <button className=" edu-card  bg-light btn  mt-1 shadow">
            Download My CV
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
                  Tôi không chỉ vận hành đội ngũ theo phương pháp{" "}
                  <strong>Agile/Scrum</strong>, mà còn kết hợp những công cụ
                  khám phá con người như <strong>DISC</strong> và{" "}
                  <strong>Thần số học</strong> để hiểu sâu từng cá nhân. Từ đó
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
              className={`edu-card edu-card-2  p-4 position-relative rounded-3 mb-3  bg-light`}
            >
              <span className="badge score-badge">{item.score}/10</span>
              <h5 className="fw-bold" style={{ maxWidth: "395px" }}>
                {item.title}
              </h5>
              <small className="text-muted d-block mb-3">{item.subtitle}</small>
              <hr />
              <p className={`mb-0 text-muted `}> {parse(item.description)}</p>
            </div>
          ))}
        </div>

        <div className="col-md-6">
          <h5 className="text-uppercase text-muted">2007 - 2010</h5>
          <h5 className="fw-bold mb-4">Job Experience</h5>

          {job.map((item, index) => (
            <div
              key={index}
              className={`edu-card edu-card-2 p-4 position-relative rounded-3 mb-3  bg-light`}
            >
              <span className="badge score-badge">{item.score}/5</span>
              <h5 className="fw-bold" style={{ maxWidth: "395px" }}>
                {item.title}
              </h5>
              <small className="text-muted d-block mb-3">{item.subtitle}</small>
              <hr />
              <p className={`mb-0 text-muted `}>{parse(item.description)}</p>
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
                <AnimatedProgress value={skill.value} />
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

                <AnimatedProgress value={skill.value} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSkills;
