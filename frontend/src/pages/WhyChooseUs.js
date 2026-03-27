import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './WhyChooseUs.css';

const reasons = [
  { icon: '🎨', title: 'Brand-Focused Approach', desc: 'Every campaign is focused on delivering measurable results and ROI for your business growth.' },
  { icon: '📊', title: 'Data-Driven Management', desc: 'All decisions backed by real metrics and analytics. We optimize campaigns based on actual performance data.' },
  { icon: '📋', title: 'Transparent Reporting', desc: 'Clear, detailed reports so you always know exactly what we are doing and how campaigns perform.' },
  { icon: '🏅', title: 'Certified Professionals', desc: 'Expertise from trained marketing professionals with proven track records in digital advertising.' },
  { icon: '📈', title: 'Scalable Solutions', desc: 'Our services grow alongside your business. From startups to enterprises, we have solutions for all sizes.' },
  { icon: '⚡', title: 'Fast Results', desc: 'Most clients see measurable results within the first 30 days of working with us.' },
  { icon: '🤝', title: 'Dedicated Support', desc: 'Our team is always available. We provide dedicated support whenever you need us.' },
  { icon: '💹', title: 'ROI-Driven Focus', desc: 'We prioritize strategies that directly impact your bottom line and business objectives.' },
];

const compareItems = [
  'Deep knowledge of Nepali market',
  'Affordable local pricing',
  'Dedicated account manager',
  'Monthly detailed reports',
  'Custom strategy for each client',
  'Fast response time',
  'Local language support',
  'Proven results in Nepal',
];

const WhyChooseUs = () => {
  return (
    <div className="why">

      {/* HERO */}
      <section className="why-hero">
        <div className="why-hero__content">
          <span className="section-tag">Why Choose Us</span>
          <h1>Why Businesses in Nepal<br /><span>Choose ADS Nepal</span></h1>
          <p>There are many digital agencies out there. Here is why hundreds of Nepali businesses trust ADS Nepal to grow their brand online.</p>
        </div>
      </section>

      {/* REASONS */}
      <section className="why-reasons">
        <div className="why-reasons__inner">
          <span className="section-tag">Our Advantages</span>
          <h2 className="section-title">8 Reasons to Choose Us</h2>
          <div className="why-reasons__grid">
            {reasons.map((r, i) => (
              <div className="reason-card" key={i}>
                <div className="reason-card__icon" style={{ fontSize: '1.8rem' }}>{r.icon}</div>
                <div className="reason-card__text">
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="why-compare">
        <div className="why-compare__inner">
          <span className="section-tag">Comparison</span>
          <h2 className="section-title">ADS Nepal vs Others</h2>
          <table className="compare-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>ADS Nepal</th>
                <th>Other Agencies</th>
              </tr>
            </thead>
            <tbody>
              {compareItems.map((item, i) => (
                <tr key={i}>
                  <td>{item}</td>
                  <td>✓</td>
                  <td>✗</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Still not convinced?</h2>
          <p>Let's have a free chat and show you exactly what we can do for your business.</p>
          <Link to="/contact" className="btn-primary">
            Talk to Us Free <FiArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default WhyChooseUs;