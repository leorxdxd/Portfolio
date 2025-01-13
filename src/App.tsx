import React, { useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Gallery,
  Achievements,
  Testimonials, // Import Gallery component
  Contact,
  Navigation,
  AboutMe,
  Footer,
} from "./components";
import FadeIn from "./components/FadeIn";
import "./index.scss";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="main-container">
      <Navigation />
      <FadeIn transitionDuration={700}>
        <Main />
        <AboutMe />
        <Expertise />
        <Project />
        <Timeline />
        
        <Gallery /> 
        <Achievements />
        <Testimonials />{/* Add Gallery section here */}
        <Contact />
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
