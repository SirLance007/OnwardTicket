import React from 'react';
import BookingForm from './BookingForm';
import { ShieldCheck, Zap, FileCheck2, Plane, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, y: 0,
    transition: { type: 'spring', stiffness: 50, damping: 15 }
  }
};

const Hero = () => {
  return (
    <section className="hero-section" id="booking">
      {/* Animated Sky Elements */}
      <div className="sky-elements">
        <div className="animated-clouds">
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
          <div className="cloud cloud-4"></div>
        </div>
        
        <svg className="flight-path-svg" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <path d="M-100,150 Q400,-50 1100,100" fill="none" stroke="var(--color-primary-light)" strokeWidth="2" strokeDasharray="10 10" opacity="0.4" className="flight-path-line" />
        </svg>

        <div className="animated-plane">
          <Plane size={36} />
        </div>
      </div>
      <div className="container hero-container">
        
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.span variants={itemVariants} className="hero-badge">Visa Approved Flight Reservations</motion.span>
          
          <motion.h1 variants={itemVariants} className="hero-title">
            Get Onward Ticket & Flight Reservation <span>Instantly</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="hero-subtitle">
            Secure your verifiable flight itinerary for visa applications in just 2 minutes. 
            No need to buy an expensive full ticket. Receive a valid PNR reservation instantly to your email.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-reviews">
            <div className="avatar-group">
              <img src="https://i.pravatar.cc/100?img=11" alt="Customer" />
              <img src="https://i.pravatar.cc/100?img=25" alt="Customer" />
              <img src="https://i.pravatar.cc/100?img=33" alt="Customer" />
              <img src="https://i.pravatar.cc/100?img=49" alt="Customer" />
              <div className="avatar-more">+10k</div>
            </div>
            <div className="hero-reviews-text">
              <div className="hero-stars">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#fbbf24" stroke="none" />)}
              </div>
              <span><strong>4.9/5</strong> from 10,000+ reviews</span>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="trust-badges">
            <div className="trust-badge">
              <Zap className="trust-icon" />
              <span>Instant Delivery</span>
            </div>
            <div className="trust-badge">
              <FileCheck2 className="trust-icon" />
              <span>Verified Reservation</span>
            </div>
            <div className="trust-badge">
              <ShieldCheck className="trust-icon" />
              <span>Secure Payment</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-form-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          viewport={{ once: true }}
        >
          <BookingForm />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
