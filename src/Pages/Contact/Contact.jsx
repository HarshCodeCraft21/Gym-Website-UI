import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="contact-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h1>

      <motion.p 
        className="contact-description"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        We're here to help! Reach out to us with any questions or inquiries.
      </motion.p>

      <motion.form
        className="contact-form"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Message:</label>
        <textarea placeholder="Write your message..." required></textarea>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.1, backgroundColor: '#333' }}
          whileTap={{ scale: 0.9 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
