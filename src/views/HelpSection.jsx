import React, { useState, useCallback } from 'react'; 
import '../styles/help.css';
import colors from '../styles/colors';
import helpItems from '../data/helpData';

const DURATION = 600;

const HelpSection = () => {
  const [flipped, setFlipped] = useState(() => new Set());
  const [crisp, setCrisp] = useState(() => new Set());

  const toggleFlip = useCallback((idx) => {
    setCrisp(prev => { const next = new Set(prev); next.delete(idx); return next; });

    setFlipped(prev => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      setTimeout(() => { setCrisp(prevC => { const nn = new Set(prevC); nn.add(idx); return nn; }); }, DURATION + 20);
      return next;
    });
  }, []);

  const onKeyToggle = (e, idx) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFlip(idx);
    }
  };

  return (
    <section
      id="help"
      className="help-section"
      style={{ backgroundColor: colors.white, '--white': colors.white }}
    >
      <div className="help-container">
        <h2 className="help-title" style={{ color: colors.darkblue }}>
          Kolay Kullanım Rehberi
        </h2>

        <div className="help-grid">
          {helpItems.map((item, idx) => (
            <article
              key={idx}
              className={`help-card ${flipped.has(idx) ? 'is-flipped' : ''} ${crisp.has(idx) ? 'crisp' : ''}`}
              onClick={() => toggleFlip(idx)}
              role="button"
              tabIndex={0}
              aria-expanded={flipped.has(idx)}
              onKeyDown={(e) => onKeyToggle(e, idx)}
            >
              <div className="help-inner">
                <div className="help-face help-front">
                  <div className="help-icon">
                    <item.icon size={48} strokeWidth={0.75} color="#e20a17" />
                  </div>
                  <h3 className="help-q" style={{ color: colors.darkblue }}>
                    {item.question}
                  </h3>
                </div>

                <div className="help-face help-back">
                  <p className="help-a">{item.answer}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
