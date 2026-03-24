import React from 'react';
import { motion } from 'framer-motion';
import './TargetAudience.css';

const SmallPlaneIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(45deg)' }}>
    <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="#bae6fd" stroke="#0369a1" strokeWidth="1"/>
    <ellipse cx="11.5" cy="11" rx="2" ry="6" fill="#fbcfe8" />
  </svg>
);

const AnimatedTicket = ({ item, index }) => {
  // Randomize the starting positions heavily so they fly in from everywhere!
  const startTrajectories = [
    { x: -300, y: -200, rotate: -25, scale: 0.4 }, // Top left
    { x: 300, y: -100, rotate: 35, scale: 0.4 },  // Top right
    { x: -200, y: 300, rotate: -40, scale: 0.4 }, // Bottom left
    { x: 350, y: 250, rotate: 20, scale: 0.4 }    // Bottom right
  ];

  const trajectory = startTrajectories[index % 4];

  return (
    <motion.div 
      className="boarding-ticket-card"
      initial={{ 
        opacity: 0, 
        x: trajectory.x, 
        y: trajectory.y, 
        rotate: trajectory.rotate,
        scale: trajectory.scale 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0, 
        rotate: 0,
        scale: 1 
      }}
      viewport={{ once: true, margin: "-25% 0px" }}
      transition={{ 
        type: "spring", 
        stiffness: 60, 
        damping: 12, 
        delay: index * 0.15 
      }}
    >
      {/* Front Left Panel */}
      <div className="ticket-left">
        <div className="ticket-top-icon"><SmallPlaneIcon /></div>
        <p className="ticket-small-label">Target</p>
        <h3 className="ticket-large-code">{item.shortTitle}</h3>
        <div className="ticket-pills">
          <div className="ticket-pill pill-green" />
          <div className="ticket-pill pill-pink" />
          <div className="ticket-pill pill-aqua" />
        </div>
      </div>

      {/* Perforated Center Line */}
      <div className="ticket-divider" />

      {/* Right Content Panel */}
      <div className="ticket-right">
        <p className="ticket-small-label">Benefit</p>
        <h4 className="ticket-dest-code">{item.title}</h4>
        <p className="ticket-desc">{item.desc}</p>
      </div>

      {/* Barcode edge */}
      <div className="ticket-barcode" />
    </motion.div>
  );
};

const TargetAudience = () => {
  const audiences = [
    {
      id: 1,
      shortTitle: "NMD",
      title: "Digital Nomads",
      desc: "Enter countries on one-way tickets without being forced to book rigid, expensive return flights prematurely."
    },
    {
      id: 2,
      shortTitle: "VSA",
      title: "Visa Applicants",
      desc: "Provide embassies with 100% genuine, verifiable PNRs to perfectly satisfy strict proof of travel rules."
    },
    {
      id: 3,
      shortTitle: "BKR",
      title: "Backpackers",
      desc: "Keep your itinerary open. Buy yourself an onward ticket just to clear airport immigration hassle-free."
    },
    {
      id: 4,
      shortTitle: "BIZ",
      title: "Business Execs",
      desc: "Perfect for unconfirmed meeting schedules where your departure date from a country isn't locked in yet."
    }
  ];

  return (
    <section className="section target-audience-section" id="audience">
      <div className="container">
        
        <motion.div 
          className="text-center section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="audience-badge">Who It's For</span>
          <h2 className="section-title">Built For The Modern Traveler</h2>
          <p className="section-subtitle">
            Whether you are securing a Schengen visa or hopping across borders in Asia, our verifiable itineraries keep you moving.
          </p>
        </motion.div>
        
        <div className="audience-grid">
          {audiences.map((item, i) => (
            <AnimatedTicket 
              key={item.id} 
              item={item} 
              index={i} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default TargetAudience;
