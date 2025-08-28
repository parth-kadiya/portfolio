import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Contact.css';
import './Contact_m.css';

// 🆕 Import custom hook and animation CSS
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/ScrollAnimation.css'; // If not already globally imported

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent successfully!");
    } catch (error) {
      alert("Error sending message");
      console.error(error);
    }
  };

  // Typewriter animation for "GET IN TOUCH"
  const [text, setText] = useState('');
  const fullText = 'GET IN TOUCH';

    // 🆕 Hook for scroll animation
  const [ref, isVisible] = useScrollAnimation();


  useEffect(() => {
    let index = 0;
    let interval;

    const type = () => {
      interval = setInterval(() => {
        if (index < fullText.length) {
          setText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setText('');
            index = 0;
            type(); // Restart loop
          }, 2000);
        }
      }, 150);
    };

    type();
    return () => clearInterval(interval);
  }, []);

  return (
    <section
  className={`contact-section scroll-animate ${isVisible ? 'visible' : ''}`}
  id="footer-section"
  ref={ref}
>
      <div className="contact-container">
        <p className="contact-subtitle typing-text">{text}</p>
        <h2 className="contact-title">Have a Project or Technical Query? Let’s Connect and Create!</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="mobile"
              placeholder="Enter Your Mobile Number"
              required
              pattern="[0-9]{10}"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Enter Your Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="send-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}
