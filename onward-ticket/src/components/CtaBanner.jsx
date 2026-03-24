import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';
import './CtaBanner.css';

const CtaBanner = () => {
  return (
    <section className="cta-banner-section" id="cta-mid">
      <div className="cta-banner-sky" />
      <div className="container">
        <motion.div
          className="cta-banner-inner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="cta-banner-badge">
            <Zap size={14} /> Ready in 2 Minutes
          </div>
          <h2 className="cta-banner-heading">
            Traveling Is Easier Now.<br />
            <span>Get Your Onward Ticket Instantly.</span>
          </h2>
          <p className="cta-banner-sub">
            No expensive return flight needed. Just a verifiable reservation that works at every embassy and airport.
          </p>
          <div className="cta-banner-actions">
            <a href="#booking" className="btn cta-btn-main">
              Book Now — From $12 <ArrowRight size={18} />
            </a>
            <span className="cta-banner-note">✓ No hidden fees &nbsp; ✓ Instant Email Delivery &nbsp; ✓ Money-back Guarantee</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
