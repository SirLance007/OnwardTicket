import React from 'react';
import { motion } from 'framer-motion';
import {
  Stamp,
  Globe,
  Ticket,
  RefreshCw,
  ArrowRight,
} from 'lucide-react';
import './BentoServices.css';

const cards = [
  {
    id: 'visa',
    icon: <Stamp size={32} />,
    headline: 'Visa Applications',
    copy: 'Secure embassies-approved flight itineraries for Schengen, US, and UK visas — without risking your cash on non-refundable tickets.',
    cta: 'Read Requirements',
    href: '/flight-reservation-for-visa',
    accent: '#0284c7',
    bg: 'linear-gradient(135deg, rgba(2,132,199,0.12) 0%, rgba(56,189,248,0.06) 100%)',
    border: 'rgba(2,132,199,0.25)',
    tag: 'Most Popular',
  },
  {
    id: 'nomad',
    icon: <Globe size={32} />,
    headline: 'Digital Nomads',
    copy: 'Keep your travel dates fully flexible. Enter countries legally without buying expensive return flights before you\'re ready.',
    cta: 'See Nomad Solutions',
    href: '/onward-tickets-for-nomads',
    accent: '#7c3aed',
    bg: 'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(167,139,250,0.06) 100%)',
    border: 'rgba(124,58,237,0.25)',
    tag: null,
  },
  {
    id: 'boarding',
    icon: <Ticket size={32} />,
    headline: 'Boarding Protection',
    copy: 'Stop check-in denials. Get instant proof of onward travel to show strict airline gate agents at any international airport.',
    cta: 'Guarantee Boarding',
    href: '/proof-of-onward-travel',
    accent: '#059669',
    bg: 'linear-gradient(135deg, rgba(5,150,105,0.12) 0%, rgba(52,211,153,0.06) 100%)',
    border: 'rgba(5,150,105,0.25)',
    tag: null,
  },
  {
    id: 'visarun',
    icon: <RefreshCw size={32} />,
    headline: 'Visa Renewals & Runs',
    copy: 'Crossing borders to renew your tourist visa? Get the necessary verifiable paperwork generated in 60 minutes.',
    cta: 'Learn More',
    href: '/onward-tickets-for-visa-runs',
    accent: '#d97706',
    bg: 'linear-gradient(135deg, rgba(217,119,6,0.12) 0%, rgba(251,191,36,0.06) 100%)',
    border: 'rgba(217,119,6,0.25)',
    tag: null,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 55,
      damping: 14,
      delay: i * 0.12,
    },
  }),
};

const BentoServices = () => {
  return (
    <section className="section bento-section" id="services">
      <div className="container">
        <motion.div
          className="text-center section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bento-badge">Our Services</span>
          <h2 className="section-title bento-heading">
            Tailored Flight Reservations for Every Journey
          </h2>
          <p className="section-subtitle">
            Select your travel reason below to see exactly how we guarantee your boarding and visa approval.
          </p>
        </motion.div>

        <div className="bento-grid">
          {cards.map((card, i) => (
            <motion.a
              key={card.id}
              href={card.href}
              className="bento-card"
              style={{
                background: card.bg,
                borderColor: card.border,
                '--card-accent': card.accent,
              }}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {card.tag && (
                <span className="bento-tag">{card.tag}</span>
              )}
              <div className="bento-icon" style={{ color: card.accent }}>
                {card.icon}
              </div>
              <h3 className="bento-title">{card.headline}</h3>
              <p className="bento-copy">{card.copy}</p>
              <span className="bento-link" style={{ color: card.accent }}>
                {card.cta} <ArrowRight size={16} className="bento-arrow" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoServices;
