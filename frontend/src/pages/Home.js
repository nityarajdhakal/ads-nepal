import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import ParticlesBackground from '../components/Particles';
import './Home.css';

const stats = [
  { number: 150, suffix: '+', label: 'Clients Served' },
  { number: 95, suffix: '%', label: 'Client Satisfaction' },
  { number: 6, suffix: '+', label: 'Years Experience' },
  { number: 1000, suffix: '+', label: 'Projects Completed' },
];

const services = [
  { icon: '🎨', title: 'Brand Strategy & Design', desc: 'Logo design, brand identity, graphic design, and marketing collateral creation.' },
  { icon: '🎬', title: 'Video Production', desc: 'Ad films, promotional videos, social media content, and high-converting video ads.' },
  { icon: '📲', title: 'Social Media Marketing', desc: 'Platform management, content creation, community engagement, and growth strategy.' },
  { icon: '🎯', title: 'Digital Advertising', desc: 'Google Ads, Meta Ads, programmatic advertising, and performance marketing.' },
];

const CountUp = ({ number, suffix }) => {
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let start = 0;
          const duration = 2000;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const current = Math.floor(progress * number);
            if (ref.current) ref.current.textContent = current + suffix;
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [number, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero__bg" />
        <ParticlesBackground />
        <div className="hero__content">
          <span className="section-tag">Your Business, Our Digital Expertise</span>
          <h1 className="hero__title">
            Full-Service Digital <br />
            <span className="hero__title--gold">Advertising & Brand</span><br />
            Development
          </h1>
          <p className="hero__sub">
            ADS Nepal is a full-service digital advertising and brand development agency helping businesses grow through strategic marketing and performance-driven solutions.
          </p>
          <div className="hero__btns">
            <Link to="/services" className="btn-primary">
              Explore Services <FiArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
            </Link>
            <Link to="/contact" className="btn-outline">
              Get Free Consultation
            </Link>
          </div>
        </div>
        <div className="hero__scroll-hint">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      <section className="stats">
        <div className="stats__inner">
          {stats.map((s, i) => (
            <div className="stats__item" key={i}>
              <div className="stats__number">
                <CountUp number={s.number} suffix={s.suffix} />
              </div>
              <div className="stats__label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Digital Services That <br />Drive Real Results</h2>
          <p className="section-sub">
            From strategy to execution, we handle every aspect of your digital presence so you can focus on running your business.
          </p>
          <div className="services-preview__grid">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-card__icon" style={{ fontSize: '2rem' }}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/services" className="service-card__link">
                  Learn more <FiArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/services" className="btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Ready to grow your brand in Nepal?</h2>
          <p>Let's talk about what ADS Nepal can do for you — free, no-pressure consultation.</p>
          <Link to="/contact" className="btn-primary">Start Today</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;