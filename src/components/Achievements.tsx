import React from "react";
import "../assets/styles/Achievements.scss";

const Achievements = () => {
  const achievements = [
    {
      title: "Dean's Lister (3 Consecutive Semesters)",
      date: "2022 - 2023",
      description:
        "Consistently recognized for academic excellence, maintaining a GPA of 1.5 or higher.",
      image: require("../assets/images/roel.png"), // Add image for Dean's Lister
    },
    {
      title: "Outstanding Student Assistant Award",
      date: "October 2023",
      description:
        "Awarded for exceptional dedication and contributions as a student assistant at SISFU.",
      image: require("../assets/images/roel.png"), // Add image for Student Assistant
    },
    {
      title: "Best Capstone Project (BSIT Program)",
      date: "May 2023",
      description:
        "Developed an AI-powered attendance system using facial recognition, praised for innovation and practicality.",
      image: require("../assets/images/roel.png"), // Add image for Capstone Project
    },
    {
      title: "Hackathon Winner (SISFU Tech Fest 2023)",
      date: "March 2023",
      description:
        "Led a team to victory in a 24-hour coding competition, creating a web-based disaster management system.",
      image: require("../assets/images/roel.png"), // Add image for Hackathon
    },
    {
      title: "Certified Full-Stack Developer (MERN Stack)",
      date: "August 2023",
      description:
        "Completed an advanced certification in full-stack development, mastering React, Node.js, MongoDB, and Express.",
      image: require("../assets/images/roel.png"), // Add image for Full-Stack Certification
    },
    {
      title: "Best Thesis Proposal (BSIT Program)",
      date: "December 2022",
      description:
        "Proposed a blockchain-based voting system, earning top marks for originality and feasibility.",
      image: require("../assets/images/roel.png"), // Add image for Thesis Proposal
    },
  ];

  return (
    <section className="achievements-container" id="achievements">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-list">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-item">
            <img
              src={achievement.image}
              alt={achievement.title}
              className="achievement-image"
            />
            <div className="achievement-text">
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-date">{achievement.date}</p>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;