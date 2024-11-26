import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Welcome to <strong>Hercules Gym</strong>, where fitness meets passion. Our mission is to help 
            you achieve your fitness goals with state-of-the-art equipment and professional trainers.
          </p>
          <p>
            Whether you're a beginner or a seasoned athlete, we provide tailored programs to suit your needs. Join us and be part of a community that thrives on health, motivation, and excellence.
          </p>
          <div className="about-highlights">
            <div className="highlight">
              <span role="img" aria-label="dumbbell">💪</span>
              <p>Expert Trainers</p>
            </div>
            <div className="highlight">
              <span role="img" aria-label="equipment">🏋️‍♂️</span>
              <p>Modern Equipment</p>
            </div>
            <div className="highlight">
              <span role="img" aria-label="community">🤝</span>
              <p>Friendly Community</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src="../../public/Images/about.jpg" alt="Hercules Gym" />
        </div>
      </div>
    </section>
  );
};

export default About;

