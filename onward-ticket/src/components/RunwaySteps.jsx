import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import { ClipboardList, CreditCard, MailCheck } from 'lucide-react';
import './RunwaySteps.css';

const steps = [
  {
    id: 1,
    label: "Gate 1",
    icon: <ClipboardList size={28} />,
    title: "Enter Your Flight Details",
    desc: "Tell us your route, travel dates, and how many passengers. Takes under 60 seconds.",
  },
  {
    id: 2,
    label: "Gate 2",
    icon: <CreditCard size={28} />,
    title: "Secure & Simple Payment",
    desc: "Pay a fraction of a full ticket price via our encrypted payment gateway.",
  },
  {
    id: 3,
    label: "Gate 3",
    icon: <MailCheck size={28} />,
    title: "Receive Your PNR Instantly",
    desc: "A verified flight reservation PDF lands in your inbox — ready for visa applications.",
  },
];

/* ---- Cleaner top-view aircraft SVG (Standard Commercial Jet format) ---- */
const PlaneSVG = ({ scrollingDown }) => (
  <motion.div
    animate={{ rotate: scrollingDown ? 180 : 0 }}
    transition={{ type: 'spring', stiffness: 60, damping: 15 }}
    style={{ color: '#1d4ed8', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', filter: 'drop-shadow(0px 8px 12px rgba(29, 78, 216, 0.4))' }}
  >
    {/* Clean, standard top-down jet plane. Natively points NORTH (Up). 
        So if scrolling down, we rotate 180 (faces South). If scrolling up, rotate 0 (faces North). */}
    <svg viewBox="0 0 24 24" fill="currentColor" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" />
    </svg>
  </motion.div>
);

/* ---- Individual card that animates in based on scroll progress ---- */
const StepCard = ({ step, progress, index }) => {
  // Plane progress maps 0->1 scroll to 0->82% visual top.
  // Gate 1 is at 8%, Gate 2 at 43%, Gate 3 at 78%.
  // So the plane crosses the gates at Scroll Y: 0.10, 0.52, 0.95.
  // Let's trigger the cards slightly strictly BEFORE the plane gets there.
  
  const triggers = [
    { start: 0.0, end: 0.08 },
    { start: 0.35, end: 0.48 },
    { start: 0.70, end: 0.85 }
  ];

  const { start, end } = triggers[index];

  const opacity = useTransform(progress, [start, end], [0, 1]);
  const x = useTransform(progress, [start, end], [-60, 0]);
  
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 20 });
  const smoothX = useSpring(x, { stiffness: 100, damping: 20 });

  return (
    <motion.div
      className="runway-step-card"
      style={{ opacity: smoothOpacity, x: smoothX }}
    >
      <div className="runway-step-icon">{step.icon}</div>
      <div className="runway-step-body">
        <span className="runway-step-label">{step.label}</span>
        <h3>{step.title}</h3>
        <p>{step.desc}</p>
      </div>
    </motion.div>
  );
};

const RunwaySteps = () => {
  const containerRef = useRef(null);
  const [scrollingDown, setScrollingDown] = useState(true);
  const lastProgress = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  /* Track scroll direction to flip plane */
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    // If progress increases, scrolling down. Plane faces south.
    if (v > lastProgress.current) {
      setScrollingDown(true);
    } else if (v < lastProgress.current) {
      setScrollingDown(false);
    }
    lastProgress.current = v;
  });

  const planeTop = useTransform(scrollYProgress, [0, 1], ['0%', '82%']);
  const smoothPlaneTop = useSpring(planeTop, { stiffness: 60, damping: 14 });

  const exhaustH = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section className="runway-section" ref={containerRef} id="how-it-works">
      <div className="runway-sticky-wrapper">

        {/* Section Header */}
        <motion.div
          className="runway-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="runway-badge">How It Works</span>
          <h2>Book Your Ticket in 3 Steps</h2>
          <p>Scroll down and watch the plane coordinate your booking.</p>
        </motion.div>

        <div className="runway-body">

          {/* LEFT: Step Cards */}
          <div className="runway-cards">
            {steps.map((step, i) => (
              <StepCard
                key={step.id}
                step={step}
                progress={scrollYProgress}
                index={i}
              />
            ))}
          </div>

          {/* RIGHT: Runway Track */}
          <div className="runway-track">

            {/* Dashed center line */}
            <div className="runway-line" />

            {/* Gate markers aligned with cards */}
            {steps.map((_, i) => (
              <div
                key={i}
                className="runway-gate"
                style={{ top: `${i * 35 + 8}%` }}
              />
            ))}

            {/* Animated Plane */}
            <motion.div className="runway-plane" style={{ top: smoothPlaneTop }}>
              <PlaneSVG scrollingDown={scrollingDown} />
              <motion.div
                className="plane-exhaust"
                style={{ height: exhaustH, top: scrollingDown ? '100%' : 'auto', bottom: scrollingDown ? 'auto' : '100%' }}
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RunwaySteps;
