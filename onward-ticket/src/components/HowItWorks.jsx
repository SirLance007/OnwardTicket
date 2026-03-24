import React from 'react';
import { PlaneTakeoff, CreditCard, MailCheck, Plane } from 'lucide-react';
import { motion } from 'framer-motion';
import './HowItWorks.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, y: 0,
    transition: { type: 'spring', stiffness: 40, damping: 15 }
  }
};

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <PlaneTakeoff size={32} />,
      title: "Set Coordinates",
      desc: "Enter your personal info and choose your origin and destination. It only takes 60 seconds."
    },
    {
      id: 2,
      icon: <CreditCard size={32} />,
      title: "Make Payment",
      desc: "Proceed with our secure payment gateway to finalize your reservation safely."
    },
    {
      id: 3,
      icon: <MailCheck size={32} />,
      title: "Receive Reservation",
      desc: "Get your verifiable flight reservation PDF instantly in your email, ready for your visa application."
    }
  ];

  return (
    <section className="section how-it-works-section" id="how-it-works">
      <div className="container">
        
        <motion.div 
          className="text-center section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Your Pre-Flight Checklist</h2>
          <p className="section-subtitle">
            Getting your onward ticket or valid flight reservation is fast, seamless, and hassle-free.
          </p>
        </motion.div>
        
        <motion.div 
          className="steps-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, index) => (
            <motion.div variants={itemVariants} className="step-card" key={step.id}>
              <div className="step-number">{step.id}</div>
              <div className="step-icon-wrapper">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              
              {/* Connector line for desktop */}
              {index !== steps.length - 1 && (
                <div className="step-connector">
                  <Plane size={16} className="connector-plane" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default HowItWorks;
