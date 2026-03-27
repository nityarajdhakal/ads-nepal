import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import './Benefits.css';

const benefits = [
  { icon: '💹', number: '3x', title: 'ROI Growth', desc: 'Clients see an average 3x return on their advertising spend through strategic campaigns.' },
  { icon: '🤝', number: '100+', title: 'Clients Served', desc: 'We have successfully helped over 100 businesses achieve their digital marketing goals.' },
  { icon: '⏰', number: '10hrs', title: 'Time Saved Weekly', desc: 'Stop managing marketing yourself. We save you 10+ hours every week on campaigns.' },
  { icon: '⭐', number: '95%', title: 'Satisfaction Rate', desc: 'Our clients are satisfied and trust us to manage their most important digital assets.' },
  { icon: '🚀', number: '30days', title: 'Results Timeline', desc: 'Most clients start seeing measurable results within the first 30 days of partnership.' },
  { icon: '🛡️', number: '6X', title: 'Service Coverage', desc: 'From branding to advertising, we offer 6 major service categories in digital marketing.' },
];

const testimonials = [
  {
    stars: '★★★★★',
    text: 'ADS Nepal transformed our online presence completely. Our sales have doubled since we started working with them. Highly recommended!',
    name: 'Ramesh Shrestha',
    business: 'Owner, Shrestha Electronics',
    icon: '👨‍💼',
  },
  {
    stars: '★★★★★',
    text: 'The team at ADS Nepal really understands the Nepali market. Our Instagram following grew from 500 to 15000 in just 3 months!',
    name: 'Anita Maharjan',
    business: 'Founder, Anita Fashion House',
    icon: '👩‍💼',
  },
  {
    stars: '★★★★★',
    text: 'Professional, transparent and results driven. ADS Nepal is the best investment we have made for our restaurant business.',
    name: 'Bikash Tamang',
    business: 'Manager, Tamang Kitchen',
    icon: '👨‍🍳',
  },
];

const Benefits = () => {
  return (
    <div className="benefits">

      {/* HERO */}
      <section className="benefits-hero">
        <div className="benefits-hero__content">
          <span className="section-tag">Benefits</span>
          <h1>The Real Benefits of<br /><span>Working With Us</span></h1>
          <p>We don't just promise results — we deliver them. Here are the real benefits our clients experience when they partner with ADS Nepal.</p>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="benefits-main">
        <div className="benefits-main__inner">
          <span className="section-tag">What You Get</span>
          <h2 className="section-title">Measurable Results That<br />Impact Your Business</h2>
          <div className="benefits-main__grid">
            {benefits.map((b, i) => (
              <div className="benefit-card" key={i}>
                <div className="benefit-card__icon">{b.icon}</div>
                <div className="benefit-card__number">{b.number}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="benefits-testimonials">
        <div className="benefits-testimonials__inner">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-card__stars">{t.stars}</div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.icon}</div>
                  <div className="testimonial-card__info">
                    <h4>{t.name}</h4>
                    <p>{t.business}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2>Start experiencing these benefits today!</h2>
          <p>Join 150+ businesses already growing with ADS Nepal.</p>
          <Link to="/contact" className="btn-primary">
            Get Started Now <FiArrowRight style={{ marginLeft: 8, verticalAlign: 'middle' }} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Benefits;