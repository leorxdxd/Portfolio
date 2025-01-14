import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "SASS", "Flask", 
  "Python", "SQL", "PostgreSQL", "Postman"
];

const labelsSecond = [
  "Git", "GitHub Actions", "Docker", "AWS", "Azure", "Linux", 
  "Snowflake", "Pandas", "Selenium"
];

const labelsThird = [
  "OpenAI", "Groq", "LangChain", "Qdrant", "Hugging Face", 
  "LlamaIndex", "Streamlit"
];

function Expertise() {
  return (
    <div className="expertise-container" id="expertise">
      <h1 className="section-title">Expertise</h1>
      <div className="cards-grid">
        {/* Full Stack Web Development */}
        <div className="card">
          <FontAwesomeIcon icon={faReact} size="3x" className="icon" />
          <h3>Full Stack Web Development</h3>
          <p>
            Building diverse web applications using modern technologies like React and Flask. 
            Proficient in SDLC processes, frontend, and backend development.
          </p>
          <div className="chips">
            <span className="chip-title">Tech stack:</span>
            {labelsFirst.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
        </div>

        {/* DevOps & Automation */}
        <div className="card">
          <FontAwesomeIcon icon={faDocker} size="3x" className="icon" />
          <h3>DevOps & Automation</h3>
          <p>
            Setting up CI/CD pipelines, automated testing, and deployment processes to 
            streamline development and production workflows.
          </p>
          <div className="chips">
            <span className="chip-title">Tech stack:</span>
            {labelsSecond.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
        </div>

        {/* GenAI & LLM */}
        <div className="card">
          <FontAwesomeIcon icon={faPython} size="3x" className="icon" />
          <h3>GenAI & LLM</h3>
          <p>
            Leveraging the latest AI models to create enterprise-grade, GenAI-enabled solutions 
            for intelligent decision-making.
          </p>
          <div className="chips">
            <span className="chip-title">Tech stack:</span>
            {labelsThird.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
