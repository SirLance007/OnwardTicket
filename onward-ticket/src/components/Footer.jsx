import React from 'react';
import { Mail, Shield, ShieldCheck, MapPin, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import './Footer.css';

const FlightIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(45deg)' }}>
    <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="url(#neonGradientFooter)"/>
    <defs>
      <linearGradient id="neonGradientFooter" x1="2" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38bdf8" />
        <stop offset="1" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top wave divider */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" fill="#f0f9ff"/>
        </svg>
      </div>

      <div className="container">

        {/* Newsletter banner */}
        <div className="footer-newsletter">
          <div className="footer-nl-text">
            <h4>✈ Travel tips & visa guides straight to your inbox</h4>
            <p>Join 8,000+ travellers getting weekly updates</p>
          </div>
          <form className="footer-nl-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="your@email.com" className="footer-nl-input" />
            <button type="submit" className="footer-nl-btn">
              <Send size={16} /> Subscribe
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Main grid */}
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-about">
            <a href="/" className="footer-brand">
              <div className="footer-brand-icon"><FlightIcon /></div>
              <span>Onward<span className="footer-brand-accent">Sky</span></span>
            </a>
            <p className="footer-desc">
              Your trusted partner for verifiable onward flight reservations.
              Secure your visa, protect your boarding pass — in under 2 minutes.
            </p>
            <div className="footer-trust-badge">
              <ShieldCheck size={16} />
              <span>100% Secure &amp; Embassy-Accepted</span>
            </div>
            {/* Socials */}
            <div className="footer-socials">
              <a href="#" aria-label="Twitter" className="social-btn"><Twitter size={16} /></a>
              <a href="#" aria-label="Instagram" className="social-btn"><Instagram size={16} /></a>
              <a href="#" aria-label="LinkedIn" className="social-btn"><Linkedin size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#booking">Book Reservation</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#comparison">Why Choose Us</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Top Destinations */}
          <div className="footer-links-group">
            <h4>Top Destinations</h4>
            <ul className="footer-links">
              <li><a href="/schengen-visa-flights">🇪🇺 Schengen Visa Flights</a></li>
              <li><a href="/japan-visa-flights">🇯🇵 Japan Visa Flights</a></li>
              <li><a href="/uk-visa-flights">🇬🇧 UK Visa Flights</a></li>
              <li><a href="/usa-visa-flights">🇺🇸 USA Visa Flights</a></li>
              <li><a href="/thailand-visa-flights">🇹🇭 Thailand Visa Flights</a></li>
              <li><a href="/uae-visa-flights">🇦🇪 UAE Visa Flights</a></li>
              <li><a href="/australia-visa-flights">🇦🇺 Australia Visa Flights</a></li>
            </ul>
          </div>

          {/* Legal + Contact */}
          <div className="footer-links-group">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
            <h4 style={{ marginTop: '2rem' }}>Contact</h4>
            <a href="mailto:support@onwardsky.com" className="footer-email-link">
              <Mail size={15} />
              support@onwardsky.com
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} OnwardSky. All rights reserved.</p>
          <div className="footer-bottom-badges">
            <span className="footer-secure-badge">
              <Shield size={14} /> Stripe Secured
            </span>
            <span className="footer-secure-badge">
              <ShieldCheck size={14} /> SSL Encrypted
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
