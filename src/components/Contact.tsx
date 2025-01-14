import React from 'react';
import '../assets/styles/Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp, faTelegram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-content">
        <h1>Contact Me</h1>
        <p>Feel free to reach out to me via email or any of my social media profiles.</p>

        {/* Email Address */}
        <div className="contact-info">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <a href="mailto:roeldelosreyes0105@gmail.com" className="contact-link">
            roeldelosreyes0105@gmail.com
          </a>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
          <a
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
          <a
            href="https://wa.me/your-whatsapp-number"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
          </a>
          <a
            href="https://t.me/your-telegram-username"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faTelegram} className="social-icon" />
          </a>
          <a
            href="https://twitter.com/your-twitter-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </a>
          <a
            href="https://facebook.com/your-facebook-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;