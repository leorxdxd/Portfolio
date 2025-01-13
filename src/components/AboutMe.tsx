import React from "react";
import "../assets/styles/AboutMe.scss";

const AboutMe = () => {
  return (
    <section className="about-me-container">
      <div className="about-me-content">
        {/* Image Section */}
        <div className="about-me-image">
          <img
            src={require("../assets/images/1.jpg")} // Adjust path if necessary
            alt="Your Portrait"
            className="profile-picture"
          />
        </div>

        {/* Text Section */}
        <div className="about-me-text">
          <h1>About Me</h1>
          <p className="pronunciation">/roh-EL DEH-los REH-yes/</p>
          <p>
            Hello World! I'm Roel Delos Reyes, a Front-End Web Developer based
            out of Metro Manila. I love combining the worlds of logic and
            creative design to make eye-catching, accessible, and user-friendly
            websites and applications.
          </p>
          <p>
            Technology leads, society follows. The move toward increasing
            inclusivity and diversity in the industry through representation is
            of importance to me.
          </p>
          <p>
            I'm excited to make the leap and continue refining my skills with
            the right company. Drop me a line or check out my profiles below:
          </p>

          {/* Social Links */}
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-medium"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
