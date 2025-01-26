import React, { useState } from 'react';
import '../styles/Contact.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus(null);

    const formBody = {
      access_key: '0a27e74c-afca-47e5-9235-7ec28c83b5e1',
      name: formData.name,
      email: formData.email,
      message: formData.message,
      subject: 'New Contact Form Submission - Portfolio'
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formBody)
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="social-links">
              <a href="https://github.com/aryan88111" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/aryan-gautam-33a820233" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
      <div className="contact-content">
        <h2>Get In Touch</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>aryansdatia88111@gmail.com</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p>+91 9301610719</p>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Siddharth colony, Datia, MP 475661</p>
            </div>
            
          </div>

          <div className="form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="fas fa-user"></i> Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass-input"
                    placeholder="Enter your name"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i className="fas fa-envelope"></i> Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass-input"
                    placeholder="Enter your email"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <i className="fas fa-comment"></i> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="glass-input"
                  placeholder="Write your message here..."
                  rows="6"
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="spinner"></div>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {status && (
                <div className={`form-status ${status}`}>
                  {status === 'success' ? (
                    <p><i className="fas fa-check-circle"></i> Message sent successfully! I'll get back to you soon.</p>
                  ) : (
                    <p><i className="fas fa-exclamation-circle"></i> Failed to send message. Please try again later.</p>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
