import React from "react";
import AnimatedProgress from "../components/AnimatedProgress";

const skills = {
  design: [
    { label: "Photoshot", value: 85 },
    { label: "Figma", value: 95 },
    { label: "Adobe XD", value: 60 },
    { label: "Adobe Illustrator", value: 70 },
    { label: "Design", value: 90 },
  ],
  development: [
    { label: "HTML", value: 85 },
    { label: "CSS", value: 80 },
    { label: "JavaScript", value: 90 },
    { label: "Software", value: 75 },
    { label: "Plugin", value: 70 },
  ],
};
const edu = [
  {
    title: "Personal Portfolio April Fools",
    subtitle: "University of DVI (1997 - 2001)",
    description:
      "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
    score: "4.30",
    highlight: true,
  },
  {
    title: "Diploma in Web Development",
    subtitle: "BSE in CSE (2004 – 2008)",
    description:
      "Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
    score: "4.70",
    highlight: false,
  },
];

const job = [
  {
    title: "Personal Portfolio April Fools",
    subtitle: "University of DVI (1997 - 2001)",
    description:
      "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
    score: "4.30",
    highlight: true,
  },
  {
    title: "Diploma in Web Development",
    subtitle: "BSE in CSE (2004 – 2008)",
    description:
      "Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
    score: "4.70",
    highlight: false,
  },
];

const ExperienceSkills = () => {
  return (
    <div className="container mt-5">
      {/* Education & Job */}
      <div className="row g-4">
        <div className="col-md-6">
          <h5 className="text-uppercase text-muted">2007 - 2010</h5>
          <h3 className="fw-bold mb-4">Education Quality</h3>
          {edu.map((item, index) => (
            <div
              key={index}
              className={`edu-card p-4 position-relative rounded-3 mb-3  bg-light`}
            >
              <span className="badge score-badge">{item.score}/5</span>
              <h5 className="fw-bold">{item.title}</h5>
              <small className="text-muted d-block mb-3">{item.subtitle}</small>
              <hr />
              <p className={`mb-0 text-muted `}>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="col-md-6">
          <h5 className="text-uppercase text-muted">2007 - 2010</h5>
          <h3 className="fw-bold mb-4">Job Experience</h3>

          {job.map((item, index) => (
            <div
              key={index}
              className={`edu-card p-4 position-relative rounded-3 mb-3  bg-light`}
            >
              <span className="badge score-badge">{item.score}/5</span>
              <h5 className="fw-bold">{item.title}</h5>
              <small className="text-muted d-block mb-3">{item.subtitle}</small>
              <hr />
              <p className={`mb-0 text-muted `}>{item.description}</p>
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
            <h4 className="fw-bold">Design Skill</h4>
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
            <h4 className="fw-bold">Development Skill</h4>
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
