import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">

        <div className="footer__brand">
          <h2 className="footer__logo-text">ADS <span>NEPAL</span></h2>
          <p>Full-service digital advertising and brand development agency. We help businesses grow through strategic marketing and performance-driven solutions.</p>
          <div className="footer__socials">
            <a href="https://www.facebook.com/AdsNepal01/" target="_blank" rel="noreferrer"><FiFacebook /></a>
            <a href="https://www.instagram.com/ads_nepal0/" target="_blank" rel="noreferrer"><FiInstagram /></a>
            <a href="https://www.tiktok.com/@adsnepal0x4" target="_blank" rel="noreferrer">
              <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-4.77-.6 2.34 2.34 0 0 1 2.38-2.38c.38 0 .74.08 1.08.24V9.5a5.32 5.32 0 0 0-1.09-.11A5.77 5.77 0 0 0 4 15.26a5.71 5.71 0 0 0 5.46 5.93 5.58 5.58 0 0 0 5.42-5.6v-5.6a7.35 7.35 0 0 0 4.41-4.3z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/why-choose-us">Why Choose Us</Link></li>
            <li><Link to="/benefits">Benefits</Link></li>
            <li><Link to="/industries">Industries</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/services">Brand Strategy & Design</Link></li>
            <li><Link to="/services">Video Production</Link></li>
            <li><Link to="/services">Social Media Marketing</Link></li>
            <li><Link to="/services">Website Design</Link></li>
            <li><Link to="/services">SEO Services</Link></li>
            <li><Link to="/services">Digital Advertising</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul className="footer__contact">
            <li><FiMapPin size={14} /> Gatthaghar, Bhaktapur</li>
            <li><FiPhone size={14} /> +977 9827927006 / 9827927402</li>
            <li><FiMail size={14} /> adsnepal0@gmail.com</li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} ADS Nepal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;