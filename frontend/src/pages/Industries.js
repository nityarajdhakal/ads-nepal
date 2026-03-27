import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './Industries.css';

const industries = [
  {
    icon: '🏗️',
    title: 'Real Estate & Construction',
    desc: 'We help real estate agencies and developers showcase properties and generate quality leads through targeted digital campaigns.',
    tags: ['Property Marketing', 'Lead Generation', 'Virtual Tours'],
  },
  {
    icon: '🎓',
    title: 'Education & Training',
    desc: 'Schools, colleges and training institutes reach more students and parents with compelling campaigns that drive enrollments.',
    tags: ['Student Recruitment', 'Course Promotion', 'Institution Branding'],
  },
  {
    icon: '🏥',
    title: 'Healthcare & Wellness',
    desc: 'Clinics, hospitals and wellness centers reach patients online while maintaining professionalism and trust in their digital presence.',
    tags: ['Patient Outreach', 'Health Content', 'Local SEO'],
  },
  {
    icon: '🛒',
    title: 'E-commerce & Retail',
    desc: 'Retail businesses and online stores drive more traffic and increase sales through targeted digital campaigns and social commerce.',
    tags: ['Product Ads', 'Social Commerce', 'Retargeting'],
  },
  {
    icon: '🏦',
    title: 'Finance & Insurance',
    desc: 'Financial institutions and fintech companies reach target audiences with compliant and effective digital campaigns.',
    tags: ['Financial Advertising', 'Trust Building', 'Customer Education'],
  },
  {
    icon: '✈️',
    title: 'Hospitality, Tourism & Travel',
    desc: 'Travel agencies and hospitality businesses attract both local and international customers with compelling digital marketing.',
    tags: ['Travel Marketing', 'Booking Campaigns', 'Destination Promotion'],
  },
  {
    icon: '🏢',
    title: 'Startups & Corporate Brands',
    desc: 'New businesses and established corporations build strong online presence and reach their target markets effectively.',
    tags: ['Brand Building', 'Growth Hacking', 'Market Reach'],
  },
  {
    icon: '💻',
    title: 'Technology & Digital Services',
    desc: 'Tech companies build brand awareness, attract users, and grow customer base through strategic digital marketing.',
    tags: ['App Marketing', 'B2B Advertising', 'Tech Branding'],
  },
];

const Industries = () => {
  return (
    <div className="industries">

      {/* HERO */}
      <section className="industries-hero">
        <div className="industries-hero__content">
          <span className="section-tag">Industries We Serve</span>
          <h1>We Work Across<br /><span>All Major Industries</span></h1>
          <p>No matter what industry you are in, ADS Nepal has the experience and expertise to help your business grow online in Nepal.</p>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="industries-main">
        <div className="industries-main__inner">
          <span className="section-tag">Our Expertise</span>
          <h2 className="section-title">Industries We Have<br />Helped Grow</h2>
          <div className="industries-main__grid">
            {industries.map((ind, i) => (
              <div className="industry-card" key={i}>
                <div className="industry-card__icon" style={{ fontSize: '2.2rem' }}>{ind.icon}</div>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
                <div className="industry-card__tags">
                  {ind.tags.map((tag, j) => (
                    <span className="industry-card__tag" key={j}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Don't see your industry?</h2>
          <p>We work with businesses from all industries. Contact us and let's talk about how we can help you grow.</p>
          <Link to="/contact" className="btn-primary">
            Contact Us <FiArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Industries;