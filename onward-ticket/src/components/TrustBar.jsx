import React from 'react';
import { ShieldCheck } from 'lucide-react';
import './TrustBar.css';

const airlines = [
  {
    name: 'Emirates',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg',
    height: '2.4rem',
  },
  {
    name: 'Lufthansa',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Lufthansa_Logo_2018.svg/800px-Lufthansa_Logo_2018.svg.png',
    height: '2rem',
  },
  {
    name: 'Qatar Airways',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Qatar_Airways_logo.svg',
    height: '2rem',
  },
  {
    name: 'KLM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/KLM_logo.svg/400px-KLM_logo.svg.png',
    height: '2.5rem',
  },
];

const TrustBar = () => {
  return (
    <div className="trust-bar">
      <div className="container trust-bar-inner">
        <div className="trust-bar-label">
          <ShieldCheck size={18} className="trust-bar-icon" />
          <span>Our PNRs are instantly verifiable on official airline portals:</span>
        </div>
        <div className="trust-bar-logos">
          {airlines.map((a) => (
            <div key={a.name} className="trust-bar-airline">
              <img
                src={a.logo}
                alt={`${a.name} logo`}
                style={{ height: a.height }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="trust-bar-airline-fallback" style={{ display: 'none' }}>
                {a.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
