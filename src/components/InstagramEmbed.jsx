import React, { useEffect, useState, useRef } from 'react';

const InstagramEmbed = ({ url }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [isVisible, url]);

  return (
    <div ref={containerRef} style={{ minHeight: '400px', display: 'flex', justifyContent: 'center' }}>
      {isVisible ? (
        <blockquote 
          className="instagram-media" 
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{ background: '#FFF', border: '0', borderRadius: '12px', width: '100%' }}
        >
          <a href={url} target="_blank" rel="noopener noreferrer">Ver trabajo en Instagram</a>
        </blockquote>
      ) : (
        <div style={{ color: '#ccc', fontSize: '0.8rem', marginTop: '20px' }}>Cargando pieza...</div>
      )}
    </div>
  );
};

export default InstagramEmbed;
