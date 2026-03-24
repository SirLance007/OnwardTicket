import React from 'react';
import { Plane, Ticket, Banknote, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import './Benefits.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, y: 0,
    transition: { type: 'spring', stiffness: 50, damping: 20 }
  }
};

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: <Clock className="benefit-icon" />,
      title: "Instant Booking",
      desc: "Get your onward ticket generated instantly. No waiting for manual processing."
    },
    {
      id: 2,
      icon: <Ticket className="benefit-icon" />,
      title: "Verifiable PNR Reservation",
      desc: "Each flight reservation is booked directly with airlines and provides a genuine PNR for easy verification."
    },
    {
      id: 3,
      icon: <Plane className="benefit-icon" />,
      title: "Valid for Visa Purposes",
      desc: "Accepted by embassies and consulates worldwide for tourist and business visa applications."
    },
    {
      id: 4,
      icon: <Banknote className="benefit-icon" />,
      title: "Save Your Money",
      desc: "No need to buy an expensive full-price ticket just to prove your travel plans."
    }
  ];

  return (
    <section className="section benefits-section" id="benefits">
      <div className="container">
        
        <motion.div 
          className="text-center section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">First-Class Service for Visa Seekers</h2>
          <p className="section-subtitle">
            Skip the expensive full-fare tickets. Access legitimate, guaranteed flight itineraries instantly for your proof of onward travel needs.
          </p>
        </motion.div>
        
        <motion.div 
          className="benefits-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {benefits.map(benefit => (
            <motion.div variants={itemVariants} className="benefit-card glass-panel" key={benefit.id}>
              <div className="benefit-icon-wrapper">
                {benefit.icon}
              </div>
              <div className="benefit-content">
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center cta-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#booking" className="btn btn-accent btn-lg">Get Your Reservation Now</a>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Benefits;
