import React from "react";
import AnimatedProgress from "../components/AnimatedProgress";
import my_img from "../assets/img/my_img.jpg";
import { FaPeopleGroup, FaCrown } from "react-icons/fa6";
import { MdWeb } from "react-icons/md";
import parse from "html-react-parser";
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
    subtitle: "07/2022 – 3/2023",
    description: `<section>
  <h2>Kỹ năng & Năng lực đạt được (Mentor WiT)</h2>
  <ul>
    <li>Kỹ năng Tư vấn & Huấn luyện cá nhân và đội nhóm</li>
    <li>Kỹ năng giao tiếp và truyền cảm hứng sâu sắc</li>
    <li>Năng lực thấu hiểu và dẫn dắt nội tâm con người</li>
    <li>Kỹ năng nâng tầm nhận thức – chuyển hóa tư duy</li>
    <li>Kỹ năng khai vấn dựa trên nền tảng Nhân – Duyên – Quả</li>
    <li>Kỹ năng huấn luyện thể chất: chạy bền 21km trên cát, bơi biển 2km</li>
    <li>Năng lực quản trị toàn diện 4 lĩnh vực:
      <ul>
        <li>Nội tâm</li>
        <li>Sức khỏe</li>
        <li>Mối quan hệ</li>
        <li>Tài chính</li>
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
  <li>Quản lý và vận hành web Shopee <a href="https://shopee.vn/bobestore688" target="_blank">Bobe Store 688</a>,  https://shopee.vn/bobestore688 và fanpage bán hàng online <a href="https://www.facebook.com/KousCorner" target="_blank">KousCorner</a>, xử lý đơn hàng và chăm sóc khách hàng</li>
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
          <div className="col-md-4 rounded text-center zoom-container pointer">
            <img
              src={my_img}
              className="img-fluid rounded zoom-image "
              alt="Profile"
            />
          </div>

          {/* Info */}
          <div className="col-md-8">
            <p className="text-uppercase text-danger fw-bold small">
              Visit my portfolio & hire me
            </p>
            <h2>About Me</h2>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in
              eos saepe ipsa cupiditate accusantium voluptatibus quidem nam,
              reprehenderit, et necessitatibus adipisci.
            </p>
            <ul className="list-unstyled text-muted">
              <li>✔ Web Design Full stack</li>
              <li>✔ 24/7 Support</li>
              <li>✔ Unlimited Revisions</li>
            </ul>
            <button className=" edu-card  bg-light btn  mt-3 shadow">
              Download My CV
            </button>
          </div>
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
                <h6 className="fw-bold">
                  <div className="d-flex justify-center mb-4 w-100 ">
                    <FaPeopleGroup className="w-100 color_main pointer display-6" />
                  </div>

                  <div className="mb-1  align-items-center gap-1">
                    QUẢN LÝ <FaCrown className="d-inline mb-1" />{" "}
                  </div>
                  <div>XÂY DỰNG VĂN HÓA ĐỘI NHÓM</div>
                </h6>
                <p className="text-muted">
                  {" "}
                  Scrum + DISC/Thần số học + Đam mê phát triển con người
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="border rounded p-4 h-100">
                <div className="mb-3 text-danger fs-2">
                  <i className="bi bi-display"></i>
                </div>

                <div className="d-flex justify-center mb-4 w-100  ">
                  <MdWeb className="w-100 color_main pointer display-6" />
                </div>
                <h6 className="fw-bold" style={{ height: "40px" }}>
                  Lập trình Web Fullstack
                </h6>
                <p className="text-muted">Fullstack Web Frontend & Backend</p>
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
              className={`edu-card p-4 position-relative rounded-3 mb-3  bg-light`}
            >
              <span className="badge score-badge">{item.score}/10</span>
              <h5 className="fw-bold">{item.title}</h5>
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
              className={`edu-card p-4 position-relative rounded-3 mb-3  bg-light`}
            >
              <span className="badge score-badge">{item.score}/5</span>
              <h5 className="fw-bold">{item.title}</h5>
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
            <p className="text-danger mb-1 fw-semibold">Features</p>
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
            <p className="text-danger mb-1 fw-semibold">Features</p>
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
