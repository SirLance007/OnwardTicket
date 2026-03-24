import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const reviews = [
  {
    id: 1,
    name: 'Sarah J.',
    role: 'Schengen Visa Applicant',
    country: '🇺🇸 USA',
    avatar: 'https://i.pravatar.cc/150?img=47',
    text: 'Saved me at the airport in Bangkok when they asked for proof of onward travel! Had the booking in my inbox within 10 minutes. The airline verified it instantly.',
    rating: 5,
    use: 'Proof of Onward Travel',
  },
  {
    id: 2,
    name: 'Alex M.',
    role: 'Digital Nomad',
    country: '🇩🇪 Germany',
    avatar: 'https://i.pravatar.cc/150?img=11',
    text: 'Worked perfectly for my visa run to Thailand. The PNR was verifiable on the airline site within minutes. Used Onward Sky three times now — never had an issue.',
    rating: 5,
    use: 'Visa Run',
  },
  {
    id: 3,
    name: 'David K.',
    role: 'Backpacker',
    country: '🇬🇧 UK',
    avatar: 'https://i.pravatar.cc/150?img=33',
    text: 'Super fast and reliable. Customer support even helped me correct a typo on my name immediately. A must-have for frequent travelers.',
    rating: 5,
    use: 'Airport Check-in',
  },
  {
    id: 4,
    name: 'Maria L.',
    role: 'Schengen Visa Applicant',
    country: '🇧🇷 Brazil',
    avatar: 'https://i.pravatar.cc/150?img=25',
    text: 'My French embassy required a confirmed booking. I was worried about paying for a real ticket I might not use. Onward Sky was the perfect solution, and my visa was approved!',
    rating: 5,
    use: 'Schengen Visa',
  },
];

const sliderVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.3 } }),
};

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const timer = useRef(null);

  const go = (next) => {
    setDir(next > current ? 1 : -1);
    setCurrent(next);
  };

  const prev = () => go((current - 1 + reviews.length) % reviews.length);
  const next = () => go((current + 1) % reviews.length);

  useEffect(() => {
    timer.current = setInterval(() => {
      setDir(1);
      setCurrent((c) => (c + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer.current);
  }, []);

  const review = reviews[current];

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">

        <motion.div
          className="text-center section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="testimonial-badge">Real Human Proof</span>
          <h2 className="section-title">Real Experiences from Global Travelers</h2>
          <p className="section-subtitle">
            Join 10,000+ travellers who secured their visas and boarding approvals with Onward Sky.
          </p>
        </motion.div>

        <div className="testimonials-slider-wrapper">
          {/* Large quote icon */}
          <div className="quote-mark"><Quote size={48} /></div>

          <div className="testimonials-slider">
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={review.id}
                className="testimonial-slide"
                custom={dir}
                variants={sliderVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <div className="slide-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" stroke="none" />
                  ))}
                </div>
                <p className="slide-text">"{review.text}"</p>
                <div className="slide-author">
                  <img src={review.avatar} alt={review.name} className="slide-avatar" />
                  <div className="slide-author-info">
                    <strong>{review.name}</strong>
                    <span>{review.role} &bull; {review.country}</span>
                    <span className="slide-use-case">{review.use}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="slider-controls">
            <button className="slider-btn" onClick={prev} aria-label="Previous review">
              <ChevronLeft size={20} />
            </button>
            <div className="slider-dots">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`slider-dot${i === current ? ' active' : ''}`}
                  onClick={() => go(i)}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button className="slider-btn" onClick={next} aria-label="Next review">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Bottom mini cards */}
        <div className="mini-reviews-grid">
          {reviews.map((r, i) => (
            <motion.button
              key={r.id}
              className={`mini-review-card${i === current ? ' active' : ''}`}
              onClick={() => go(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <img src={r.avatar} alt={r.name} className="mini-avatar" />
              <div className="mini-info">
                <strong>{r.name}</strong>
                <span>{r.country}</span>
              </div>
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
