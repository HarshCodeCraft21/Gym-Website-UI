import React from 'react';
import { motion } from 'framer-motion';
import './JoinNow.css';

const JoinNow = () => {
  return (
    <motion.div 
      className="join-now-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="join-now-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Get Fit with Us!
      </motion.h1>

      <motion.p 
        className="join-now-subtitle"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Join our gym community and achieve your fitness goals!
      </motion.p>

      <motion.form
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Phone:</label>
        <input type="tel" placeholder="Enter your phone number" required />

        <motion.button
          type="submit"
          whileHover={{
            scale: 1.1,
            boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
          }}
          whileTap={{ scale: 0.9 }}
        >
          Join Now
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default JoinNow;
