import React from 'react';

const TrailerModal = ({ movie, onClose }) => {
  if (!movie || !movie.Trailer) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.95)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '20px'
    }} onClick={onClose}>
      
      <div style={{
        background: '#1a1a1a',
        borderRadius: '15px',
        maxWidth: '900px',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'hidden',
        position: 'relative'
      }} onClick={(e) => e.stopPropagation()}>
        
        <button style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          background: 'rgba(255, 107, 107, 0.9)',
          border: 'none',
          color: 'white',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '20px',
          fontWeight: 'bold',
          zIndex: 2001,
          backdropFilter: 'blur(10px)'
        }} onClick={onClose}>×</button>

        {/* Trailer Video */}
        <div style={{
          position: 'relative',
          paddingBottom: '56.25%', // 16:9 aspect ratio
          height: 0
        }}>
          <iframe
            src={movie.Trailer}
            title={`${movie.Title} Trailer`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '15px 15px 0 0'
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Movie Info */}
        <div style={{ padding: '20px' }}>
          <h2 style={{ 
            color: '#ff6b6b', 
            marginBottom: '10px',
            fontSize: '1.5rem'
          }}>
            {movie.Title} ({movie.Year}) - Official Trailer
          </h2>
          <p style={{ color: '#b0b0b0', lineHeight: '1.5' }}>
            {movie.Plot}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrailerModal;