import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  const faqs = [
    {
      id: 1,
      question: "What is an onward ticket and why do I need it?",
      answer: "An onward ticket is a flight reservation that proves you have a confirmed flight out of a country before your visa expires. It is commonly required by airlines and immigration at check-in or border control to verify you won't overstay."
    },
    {
      id: 2,
      question: "Are these flight reservations completely legal and valid?",
      answer: "Yes. We create legitimate, verifiable flight reservations with leading airlines. They include a valid PNR number that can be checked on the airline's website. They are not fake tickets but actual reservations held for a short period."
    },
    {
      id: 3,
      question: "How fast will I receive my ticket?",
      answer: "The process is fully automated. As soon as your payment is confirmed, your flight reservation is generated instantly and sent to your email address within 2 minutes."
    },
    {
      id: 4,
      question: "Do I need to cancel the flight reservation later?",
      answer: "No, you don't need to do anything. The reservation will automatically expire after the validity period (usually 48-72 hours). You will not be charged any cancellation fees."
    },
    {
      id: 5,
      question: "Can I use this for my Schengen Visa application?",
      answer: "Yes! Many of our customers use our flight itineraries successfully for Schengen visa applications, as consulates specifically ask for a reservation rather than a fully purchased flight ticket."
    }
  ];

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Structured Data for SEO Rich Results
  const serializeFaqData = () => {
    const data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
    return JSON.stringify(data);
  };

  return (
    <section className="section faq-section" id="faq">
      {/* Search Engine Rich Snippet */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeFaqData() }} />
      
      <div className="container">
        
        <div className="text-center section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Get answers to common queries about our verifiable flight reservation service.
          </p>
        </div>
        
        <div className="faq-container">
          {faqs.map((faq) => (
            <div 
              className={`faq-item ${openId === faq.id ? 'active' : ''}`} 
              key={faq.id}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={openId === faq.id}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {openId === faq.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              
              <div 
                className={`faq-answer-wrapper ${openId === faq.id ? 'open' : ''}`}
                style={openId === faq.id ? {maxHeight: '300px', opacity: 1} : {maxHeight: '0px', opacity: 0}}
              >
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FAQ;
