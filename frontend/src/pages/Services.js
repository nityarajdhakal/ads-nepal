import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './Services.css';

const services = [
  {
    icon: '🎨',
    title: 'Brand Strategy & Design',
    desc: 'Complete brand identity design, logo creation, visual systems, corporate branding, marketing collateral, and digital/print design solutions.',
    features: ['Logo & Identity Design', 'Corporate Branding', 'Marketing Collateral', 'Visual System Design'],
  },
  {
    icon: '🎬',
    title: 'Video Production',
    desc: 'High-quality ad films, promotional videos, social media content, corporate videos, and motion graphics designed for maximum impact.',
    features: ['Ad Films & Promotional Videos', 'Social Media Content', 'Corporate Videos', 'Motion Graphics'],
  },
  {
    icon: '📲',
    title: 'Social Media Marketing',
    desc: 'Complete platform management across Facebook, Instagram, TikTok, and YouTube with growth strategy and community engagement.',
    features: ['Page Setup & Management', 'Content Strategy', 'Community Engagement', 'Lead Generation'],
  },
  {
    icon: '🌐',
    title: 'Website Design & Development',
    desc: 'Corporate websites, e-commerce solutions, and optimized landing pages focused on conversions and user experience.',
    features: ['Corporate Websites', 'E-commerce Development', 'UI/UX Design', 'Performance Optimization'],
  },
  {
    icon: '🔍',
    title: 'SEO Services',
    desc: 'Complete SEO solutions including on-page, technical, off-page, local SEO, and content strategy for higher Google rankings.',
    features: ['Keyword Research', 'On-Page SEO', 'Local SEO', 'Content Strategy'],
  },
  {
    icon: '🎯',
    title: 'Digital Advertising',
    desc: 'Performance marketing through Google Ads, Meta Ads, retargeting, programmatic advertising, and app install campaigns.',
    features: ['Google Ads', 'Meta Ads', 'Retargeting', 'Performance Tracking'],
  },
];

const steps = [
  { number: '01', title: '🔎 Discovery', desc: 'We learn about your business, goals and target audience.' },
  { number: '02', title: '📋 Strategy', desc: 'We build a custom digital marketing plan just for you.' },
  { number: '03', title: '🚀 Execution', desc: 'Our team launches and manages your campaigns.' },
  { number: '04', title: '📊 Reporting', desc: 'We share clear results and keep improving your campaigns.' },
];

const Services = () => {
  return (
    <div className="services">

      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero__content">
          <span className="section-tag">Our Services</span>
          <h1>Digital Services That<br /><span>Deliver Real Results</span></h1>
          <p>From social media to paid ads, we offer everything your business needs to grow online in Nepal and beyond.</p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-main">
        <div className="services-main__inner">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">Everything You Need to<br />Grow Online</h2>
          <div className="services-main__grid">
            {services.map((s, i) => (
              <div className="service-big-card" key={i}>
                <div className="service-big-card__icon" style={{ fontSize: '2rem' }}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="service-big-card__features">
                  {s.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="services-process">
        <div className="services-process__inner">
          <span className="section-tag">How We Work</span>
          <h2 className="section-title">Our Simple 4 Step Process</h2>
          <div className="process-steps">
            {steps.map((s, i) => (
              <div className="process-step" key={i}>
                <div className="process-step__number">{s.number}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Ready to get started?</h2>
          <p>Let's talk about which services are right for your business.</p>
          <Link to="/contact" className="btn-primary">
            Get Free Consultation <FiArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;