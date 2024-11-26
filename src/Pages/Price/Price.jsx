import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Price.css';

const Price = () => {
  const navigate = useNavigate(); // For navigation

  return (
    <div className="pricing-page">
      <h1 className="pricing-title">Membership Pricing</h1>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h2 className="pricing-plan">Basic Plan</h2>
          <p className="price">$19.99/month</p>
          <ul className="plan-details">
            <li>Access to all gym equipment</li>
            <li>1 Free personal training session</li>
            <li>Free Wi-Fi</li>
          </ul>
          <button className="cta-button" onClick={() => navigate('/join')}>
            Join Now
          </button>
        </div>
        <div className="pricing-card featured">
          <h2 className="pricing-plan">Premium Plan</h2>
          <p className="price">$39.99/month</p>
          <ul className="plan-details">
            <li>Access to all gym equipment</li>
            <li>5 Free personal training sessions</li>
            <li>Free Wi-Fi and Sauna</li>
            <li>Priority access to group classes</li>
          </ul>
          <button className="cta-button" onClick={() => navigate('/join')}>
            Join Now
          </button>
        </div>
        <div className="pricing-card">
          <h2 className="pricing-plan">VIP Plan</h2>
          <p className="price">$59.99/month</p>
          <ul className="plan-details">
            <li>All Premium Plan benefits</li>
            <li>Unlimited personal training</li>
            <li>Free nutrition consultation</li>
            <li>Exclusive member events</li>
          </ul>
          <button className="cta-button" onClick={() => navigate('/join')}>
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;
