import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Book Your Appointment Today
        </h1>
        <p>
          Experience seamless healthcare management with our online booking system. Easily find doctors, book appointments, and manage your health records all in one place. We're committed to making healthcare accessible and convenient for everyone.
        </p>
      </div>
      <div className="hero-img">
        <img src={image} alt="hero"/>
      </div>
    </section>
  );
};

export default Hero;
