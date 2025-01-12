import React, { useState, useEffect } from "react";
import profileImage1 from '../assets/images/1.png'; // Import the first image
import profileImage2 from '../assets/images/2.png'; // Import the second image
import profileImage3 from '../assets/images/roel.png'; // Import the third image
import '../assets/styles/Main.scss';

function Main() {
  const [currentImage, setCurrentImage] = useState(0); // State to track the current image
  const images = [profileImage1, profileImage2, profileImage3]; // Array of images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="portfolio-container">
      {/* Header Section */}
      <header className="portfolio-header">
        <div className="logo">ROEL</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <div className="main-content compact">
        <div className="text-content">
          <p className="greeting">HELLO!</p>
          <h1 className="name">
            I'm <span className="highlight">Roel Delos Reyes</span>
          </h1>
          <p className="profession">
            <span className="animated-profession">A Full Stack Developer</span>
          </p>
          <div className="action-buttons">
            <a href="#hire-me" className="btn hire-me">Hire Me</a>
            <a href="#my-works" className="btn my-works">My Projects</a>
          </div>
        </div>
        <div className="image-content">
          <img
            src={images[currentImage]} // Dynamically set the current image
            alt="Roel"
            className="profile-picture"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
