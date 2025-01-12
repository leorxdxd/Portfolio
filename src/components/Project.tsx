import React from "react";
import "../assets/styles/Project.scss";

// Project data array for easy maintenance and scalability
const projects = [
  {
    id: 1,
    title: "Filmate AI",
    description:
      "Developed a movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.",
    image: require("../assets/images/mock10.png"),
    liveLink: "https://www.filmate.club/",
    githubLink: "https://github.com/your-repo/filmate-ai",
  },
  {
    id: 2,
    title: "High Speed Chase",
    description:
      "Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. Available on Itch.io.",
    image: require("../assets/images/mock09.png"),
    liveLink: "https://yujisatojr.itch.io/highspeedchase",
    githubLink: "https://github.com/your-repo/high-speed-chase",
  },
  // Add more project data objects here...
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <a href={project.liveLink} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                className="zoom project-image"
                alt={project.title}
              />
            </a>
            <a href={project.liveLink} target="_blank" rel="noreferrer">
              <h2 className="project-title">{project.title}</h2>
            </a>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a
                href={project.liveLink}
                className="project-btn"
                target="_blank"
                rel="noreferrer"
              >
                View Live
              </a>
              <a
                href={project.githubLink}
                className="project-btn github-link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
