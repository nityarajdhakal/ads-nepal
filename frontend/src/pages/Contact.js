import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setSubmitted(true);
    } catch (error) {
      console.error('Error details:', error);
      console.error('Error response:', error.response);
      const errorMsg = error.response?.data?.message || error.message || 'Something went wrong. Please try again!';
      alert(errorMsg);
    }
  };

  return (
    <div className="contact">

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero__content">
          <span className="section-tag">Contact Us</span>
          <h1>Let's Grow Your<br /><span>Business Together</span></h1>
          <p>Ready to take your digital marketing to the next level? Get in touch with our team today for a free consultation.</p>
        </div>
      </section>

      {/* MAIN */}
      <section className="contact-main">
        <div className="contact-main__inner">

          {/* LEFT - CONTACT INFO */}
          <div className="contact-info">
            <span className="section-tag">Get In Touch</span>
            <h2>We Would Love to Hear From You</h2>
            <p>Whether you have a question about our services, pricing or just want to say hello — we are here and ready to help!</p>

            <div className="contact-info__items">
              <div className="contact-info__item">
                <div className="contact-info__item-icon">📍</div>
                <div className="contact-info__item-text">
                  <h4>Our Location</h4>
                  <p>Gatthaghar, Bhaktapur</p>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="contact-info__item-icon">📞</div>
                <div className="contact-info__item-text">
                  <h4>Phone Number</h4>
                  <p>+977 9827927006 / 9827927402</p>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="contact-info__item-icon">📧</div>
                <div className="contact-info__item-text">
                  <h4>Email Address</h4>
                  <p>adsnepal0@gmail.com</p>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="contact-info__item-icon">⏰</div>
                <div className="contact-info__item-text">
                  <h4>Working Hours</h4>
                  <p>Sunday - Friday, 9am - 6pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="contact-form-box">
            {submitted ? (
              <div className="form-success">
                <div className="form-success__icon">🎉</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for contacting ADS Nepal. Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3>Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+977 98XXXXXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Service You Are Interested In</label>
                    <select
  name="service"
  value={formData.service}
  onChange={handleChange}
  required
>
  <option value="">Select a service</option>
  <option value="brand-strategy">Brand Strategy & Design</option>
  <option value="video-production">Video Production</option>
  <option value="social-media">Social Media Marketing</option>
  <option value="website">Website Design & Development</option>
  <option value="seo">SEO Services</option>
  <option value="digital-advertising">Digital Advertising</option>
  <option value="all">All Services</option>
</select>
                  </div>

                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your business and what you need help with..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn-primary form-submit">
                    Send Message ✉️
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;