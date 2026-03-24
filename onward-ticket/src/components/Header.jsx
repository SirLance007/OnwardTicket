import React, { useState, useEffect } from 'react';
import './Header.css';

const FlightIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(45deg)' }}>
    <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="url(#neonGradient)"/>
    <defs>
      <linearGradient id="neonGradient" x1="2" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="var(--color-primary)" />
        <stop offset="1" stopColor="var(--color-accent)" />
      </linearGradient>
    </defs>
  </svg>
);

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Only hide if we scrolled down AND we're more than 100px from the top
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className="header" style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)', transition: 'transform 0.3s ease' }}>
      <div className="container header-container">
        <a href="/" className="logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary-dark)' }}>
          <div style={{ backgroundColor: 'rgba(2, 132, 199, 0.15)', padding: '0.4rem', borderRadius: '50%', border: '1px solid rgba(2, 132, 199, 0.3)', display: 'flex' }}>
            <FlightIcon />
          </div>
          <span>Onward<span style={{ color: 'var(--color-primary)' }}>Sky</span></span>
        </a>
        
        <nav className="desktop-nav">
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#benefits" className="nav-link">Benefits</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>
        
        <div className="header-actions">
          <a href="#booking" className="btn btn-primary" style={{borderRadius: '9999px', fontSize: '0.9rem', padding: '0.6rem 1.25rem'}}>Get Ticket</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
