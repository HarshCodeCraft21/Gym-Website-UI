// src/HomePage.js

import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className="home-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Get Strong. Stay Fit.</h1>
          <p className="hero-subtitle">Join our community of fitness enthusiasts!</p>
          <button className="cta-button" onClick={() => navigate('/join')}>Join Now</button>
        </div>
      </header>

      <section className="about-section">
        <h2 className="section-title">About Us</h2>
        <p className="about-text">
          We provide state-of-the-art equipment, expert trainers, and a community-driven environment to help you
          achieve your fitness goals.
        </p>
      </section>

      <section className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Personal Training</h3>
            <p>One-on-one training sessions with expert coaches.</p>
          </div>
          <div className="service-card">
            <h3>Group Classes</h3>
            <p>Fun and motivating group workouts.</p>
          </div>
          <div className="service-card">
            <h3>Nutrition Advice</h3>
            <p>Guidance on diet and supplements to boost your performance.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Gym Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
