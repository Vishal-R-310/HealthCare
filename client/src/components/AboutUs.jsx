import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img src={image} alt="Our Team"/>
          </div>
          <div className="hero-content">
            <p>
              Welcome to HealthCare, your trusted partner in healthcare. We believe in making quality healthcare accessible and affordable for everyone. 
              With our innovative online platform, you can easily find top-rated doctors, book appointments, and access your medical records anytime, anywhere. 
              Our team of dedicated professionals is committed to providing exceptional care and support, ensuring you receive the best possible treatment tailored to your needs. 
              Join us on our mission to revolutionize healthcare and bring peace of mind to millions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
