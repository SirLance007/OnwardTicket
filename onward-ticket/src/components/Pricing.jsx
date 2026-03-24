import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  const features = [
    "Valid for 48 Hours to 14 Days",
    "Verifiable on Airline Websites",
    "Sent instantly via Email",
    "100% Legal & Safe",
    "Accepted by all Embassies",
    "No hidden subscriptions"
  ];

  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        
        <motion.div 
          className="text-center section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="pricing-badge">Simple Pricing</span>
          <h2 className="section-title">One Tiny Fee, Zero Stress</h2>
          <p className="section-subtitle">
            Don't risk thousands on unconfirmed flights. Secure your legitimate, verifiable itinerary for the price of a coffee.
          </p>
        </motion.div>
        
        <div className="pricing-wrapper">
          <motion.div 
            className="pricing-card main-pricing-card"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          >
            <div className="pricing-header">
              <h3>Onward Ticket</h3>
              <div className="price-block">
                <span className="currency">$</span>
                <span className="amount">12</span>
                <span className="period">/ticket</span>
              </div>
              <p>Everything you need to bypass immigration seamlessly.</p>
            </div>
            
            <div className="pricing-features">
              {features.map((feature, i) => (
                <div className="feature-item" key={i}>
                  <div className="check-ring">
                    <Check size={14} className="check-icon" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="pricing-footer">
              <a href="#booking" className="btn btn-primary btn-lg w-full">
                Get Ticket Now
              </a>
              <div className="secure-checkout">
                <ShieldCheck size={16} />
                <span>256-bit Secure Checkout</span>
              </div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default Pricing;
