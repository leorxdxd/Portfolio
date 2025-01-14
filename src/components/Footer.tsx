import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="social-links">
        <a
          href="https://github.com/leorxdxd"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <GitHubIcon className="social-icon" />
        </a>
        <a
          href="https://ph.linkedin.com/in/roel-de-los-reyes-3a5627251"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <LinkedInIcon className="social-icon" />
        </a>
      </div>
      <p className="footer-text">
        A portfolio designed & built by{" "}
        <a
          href="https://github.com/leorxdxd/Portfolio"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
        >
          Roel Delos Reyes
        </a>{" "}
        with 💜
      </p>
    </footer>
  );
}

export default Footer;