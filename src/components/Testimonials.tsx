import React from "react";
import "../assets/styles/Testimonials.scss";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      position: "CEO, Tech Innovators Inc.",
      feedback:
        "Roel is an exceptional developer with a keen eye for detail. His ability to solve complex problems is unmatched.",
    },
    {
      name: "Jane Doe",
      position: "Project Manager, Creative Solutions",
      feedback:
        "Working with Roel has been a pleasure. His professionalism and technical expertise have greatly contributed to our success.",
    },
    {
      name: "Michael Lee",
      position: "CTO, Digital Ventures",
      feedback:
        "Roel’s dedication to excellence is evident in every project he undertakes. Highly recommended!",
    },
  ];

  return (
    <section className="testimonials-container" id="testimonials">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <p className="testimonial-author">
              - {testimonial.name}, {testimonial.position}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

export {}; // Add this line
