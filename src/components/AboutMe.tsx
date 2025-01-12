import React from "react"; // Import React to make this a module
import "../assets/styles/AboutMe.scss";

const AboutMe = () => {
  return (
    <section className="about-me-container">
      <div className="about-me-header">
        <h2>About Me</h2>
        <p>Discover who I am and what drives my passion for technology and creativity.</p>
      </div>

      <div className="about-me-content">
        <div className="about-me-image">
          <img
            src={require("../assets/images/1.jpg")} // Adjust to match the actual filename
            alt="Your Portrait"
            className="profile-picture"
          />
        </div>

        <div className="about-me-text">
          <h3>Hello! I'm Roel Delos Reyes</h3>
          <p>
            I am a passionate and creative individual with a strong background in
            technology and design. My goal is to bridge the gap between
            functionality and aesthetics, creating solutions that are both effective
            and visually stunning.
          </p>
          <p>
            When I'm not coding or designing, I enjoy exploring new ideas,
            engaging in collaborative projects, and continuously learning to stay
            ahead in the fast-paced world of technology.
          </p>

          <div className="skills">
            <h4>Skills:</h4>
            <ul>
              <li>💻 Full-stack Web Development</li>
              <li>🎨 UI/UX Design</li>
              <li>⚙️ Problem Solving & Debugging</li>
              <li>🌐 Cloud Integration</li>
            </ul>
          </div>

          <div className="hobbies">
            <h4>Hobbies:</h4>
            <ul>
              <li>🎮 Gaming</li>
              <li>📚 Reading Tech Blogs</li>
              <li>🌱 Watching Movies</li>
              <li>✈️ Coding</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
