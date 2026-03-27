import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './About.css';

const values = [
  { icon: '🎨', title: 'Brand-Focused', desc: 'Strategies that prioritize your growth and bottom line results.' },
  { icon: '📊', title: 'Data-Driven', desc: 'All decisions backed by real metrics and analytics, not guesswork.' },
  { icon: '🔍', title: 'Transparent', desc: 'Clear reporting and insights so you always know campaign performance.' },
  { icon: '🏅', title: 'Certified Experts', desc: 'Expertise from trained marketing professionals with proven track records.' },
  { icon: '📈', title: 'Scalable Solutions', desc: 'Services that grow alongside your business needs and ambitions.' },
  { icon: '💹', title: 'ROI Driven', desc: 'Every campaign designed to deliver measurable return on investment.' },
];

const team = [
  { name: 'Bimal Rajbanshi', role: 'Founder & CEO', icon: '👨‍💼' },
  { name: 'Priya Thapa', role: 'Creative Director', icon: '👩‍🎨' },
  { name: 'Anil Gurung', role: 'Digital Strategist', icon: '👨‍💻' },
  { name: 'Sita Rai', role: 'Social Media Manager', icon: '👩‍💼' },
];

const About = () => {
  return (
    <div className="about">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero__content">
          <span className="section-tag">About Us</span>
          <h1>We Are <span>ADS Nepal</span> —<br />Your Growth Partner</h1>
          <p>ADS Nepal is a full-service digital advertising and brand development agency helping businesses grow through strategic marketing and performance-driven advertising. We combine creativity, technology, and data to build strong brands and deliver measurable results.</p>
        </div>
      </section>

      {/* STORY */}
      <section className="about-story">
        <div className="about-story__inner">
          <div className="about-story__text">
            <span className="section-tag">Our Story</span>
            <h2>Full-Service Digital Solutions</h2>
            <p>ADS Nepal provides comprehensive digital advertising services combining brand development, creative design, video production, and performance marketing. We work across multiple disciplines to create cohesive strategies that drive real business growth.</p>
            <p>Our approach is simple: combine creativity with data, focus on measurable results, and treat your business success as our own. We've helped businesses across industries achieve significant growth through strategic digital marketing.</p>
            <p>From brand identity to digital advertising campaigns, our certified professionals deliver scalable solutions tailored to your unique business needs.</p>
            <Link to="/contact" className="btn-primary" style={{ marginTop: 24, display: 'inline-block' }}>
              Work With Us <FiArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
            </Link>
          </div>

          <div className="about-story__visual">
            {[
              { number: '150+', label: 'Happy Clients' },
              { number: '1000+', label: 'Projects Done' },
              { number: '6+', label: 'Years Experience' },
              { number: '95%', label: 'Satisfaction Rate' },
            ].map((s, i) => (
              <div className="about-stat-box" key={i}>
                <div className="about-stat-box__number">{s.number}</div>
                <div className="about-stat-box__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="about-values__inner">
          <span className="section-tag">Our Values</span>
          <h2 className="section-title">What We Stand For</h2>
          <div className="about-values__grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team">
        <div className="about-team__inner">
          <span className="section-tag">Our Team</span>
          <h2 className="section-title">The People Behind ADS Nepal</h2>
          <div className="about-team__grid">
            {team.map((t, i) => (
              <div className="team-card" key={i}>
                <div className="team-card__avatar">{t.icon}</div>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Ready to work together?</h2>
          <p>Let's discuss how ADS Nepal can help grow your business in the digital space.</p>
          <Link to="/contact" className="btn-primary">
            Get in Touch <FiArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;