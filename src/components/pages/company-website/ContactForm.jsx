import React from 'react';
import './css/ContactForm.css'; // Ensure you have the correct path to your CSS file    
// This component renders a contact form for users to reach out to the company
const ContactForm = ({ contactRef }) => {
  return (
    <section ref={contactRef} className="section contact-section">
      <h2>Contact Us</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Handle form submission
          alert("Form submitted!");
        }}
      >
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            required
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Write your message..."
          ></textarea>
        </div>

        <button type="submit">Submit Message</button>
      </form>
    </section>
  );
};

export default ContactForm;