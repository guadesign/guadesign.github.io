import React, { useEffect } from 'react';

const InstagramEmbed = ({ url }) => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement('script');
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [url]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '10px 0' }}>
      <blockquote 
        className="instagram-media" 
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ 
          background: '#FFF', 
          border: '0', 
          borderRadius: '12px', 
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
          margin: '1px', 
          maxWidth: '540px', 
          minWidth: '326px', 
          width: 'calc(100% - 2px)' 
        }}
      >
      </blockquote>
    </div>
  );
};

export default InstagramEmbed;
