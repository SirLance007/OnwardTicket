import React from 'react';
import { PlaneTakeoff } from 'lucide-react';
import './AirlinesMarquee.css';

const AirlinesMarquee = () => {
  const airlines = [
    { name: "Emirates", url: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg", style: { height: "3rem" } },
    { name: "Lufthansa", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Lufthansa_Logo_2018.svg/800px-Lufthansa_Logo_2018.svg.png", style: { height: "2rem" } },
    { name: "Qatar Airways", url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Qatar_Airways_logo.svg", style: { height: "2rem" } },
    { name: "KLM", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/KLM_logo.svg/400px-KLM_logo.svg.png", style: { height: "2.5rem" } },
    { name: "Air France", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Air_France_Logo.svg/640px-Air_France_Logo.svg.png", style: { height: "1.75rem" } },
    { name: "Delta", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Delta_logo.svg/640px-Delta_logo.svg.png", style: { height: "2rem" } },
    { name: "Singapore Airlines", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Singapore_Airlines_Logo_2.svg/640px-Singapore_Airlines_Logo_2.svg.png", style: { height: "2.5rem" } },
  ];

  return (
    <div className="airlines-marquee-wrapper">
      <div className="container marquee-header">
        <p>100% Verifiable on Global Airlines</p>
      </div>
      <div className="marquee">
        <div className="marquee-content">
          {[...airlines, ...airlines, ...airlines, ...airlines, ...airlines, ...airlines].map((airline, idx) => (
            <div className="airline-item" key={idx}>
              <img 
                src={airline.url} 
                alt={`${airline.name} logo`} 
                className="airline-img-wide"
                style={airline.style}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="fallback-airline-content" style={{display: 'none', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '1.25rem', fontWeight: 'bold'}}>
                <PlaneTakeoff size={20} />
                {airline.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AirlinesMarquee;
