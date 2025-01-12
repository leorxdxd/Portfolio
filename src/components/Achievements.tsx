import React from "react";
import "../assets/styles/Achievements.scss";

const Achievements = () => {
  const achievements = [
    {
      title: "Top Full-Stack Developer Award",
      date: "December 2023",
      description:
        "Recognized for outstanding contributions to full-stack development projects.",
    },
    {
      title: "Best Project of the Year",
      date: "June 2023",
      description:
        "Awarded for developing an innovative ticketing system for a major client.",
    },
    {
      title: "Hackathon Winner",
      date: "March 2022",
      description:
        "Led a team to victory in a 24-hour coding competition focused on AI solutions.",
    },
  ];

  return (
    <section className="achievements-container" id="achievements">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-list">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-item">
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-date">{achievement.date}</p>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;

export {}; // Add this line
