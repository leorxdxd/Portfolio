import React from "react";
import "../assets/styles/Project.scss";

// Project data array for easy maintenance and scalability
const projects = [
  {
    id: 1,
    title: "Technical Ticketing System",
    description:
      "Developed a robust technical ticketing system to categorize and resolve IT concerns effectively. Integrated AI capabilities for ticket classification and prioritization.",
    image: require("../assets/images/mock11.png"),
    githubLink: "https://github.com/leorxdxd/technical-ticketing-system",
  },
  {
    id: 2,
    title: "AI Plagiarism Checker",
    description:
      "Created an AI-powered plagiarism detection system to analyze and compare text content for originality. Utilized advanced machine learning models for accurate analysis.",
    image: require("../assets/images/mock12.png"),
    githubLink: "https://github.com/leorxdxd/ai-plagiarism-checker",
  },
  {
    id: 3,
    title: "MiroMail",
    description:
      "Developed MiroMail, a user-friendly email composer integrated with Gmail, enabling seamless email composition and editing with a sleek, Canva-like interface.",
    image: require("../assets/images/mock13.png"),
    githubLink: "https://github.com/leorxdxd/MiroMail",
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
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                className="zoom project-image"
                alt={project.title}
              />
            </a>
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              <h2 className="project-title">{project.title}</h2>
            </a>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
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
