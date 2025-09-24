// import React, { useState } from 'react';

// const MovieCard = ({ movie, onClick, onTrailerClick }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div 
//       className={`movie-card hover-lift ${isHovered ? 'glow-animation' : ''}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{
//         background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
//         borderRadius: '15px',
//         overflow: 'hidden',
//         cursor: 'pointer',
//         border: '1px solid rgba(255, 255, 255, 0.1)',
//         position: 'relative',
//         transition: 'all 0.3s ease'
//       }}
//     >
//       {/* Featured Badge */}
//       {movie.Featured && (
//         <div style={{
//           position: 'absolute',
//           top: '15px',
//           left: '15px',
//           background: 'linear-gradient(135deg, #ff6b6b, #ff8e53)',
//           color: 'white',
//           padding: '5px 10px',
//           borderRadius: '20px',
//           fontSize: '0.7rem',
//           fontWeight: 'bold',
//           zIndex: 2
//         }}>
//           ⭐ Featured
//         </div>
//       )}
      
//       {/* Trending Badge */}
//       {movie.Trending && (
//         <div style={{
//           position: 'absolute',
//           top: '15px',
//           right: '15px',
//           background: 'linear-gradient(135deg, #4ecdc4, #44a08d)',
//           color: 'white',
//           padding: '5px 10px',
//           borderRadius: '20px',
//           fontSize: '0.7rem',
//           fontWeight: 'bold',
//           zIndex: 2
//         }}>
//           🔥 Trending
//         </div>
//       )}

//       {/* Poster Image */}
//       <div style={{ position: 'relative', overflow: 'hidden' }}>
//         <img 
//           src={movie.Poster}
//           alt={movie.Title}
//           style={{
//             width: '100%',
//             height: '350px',
//             objectFit: 'cover',
//             transition: 'transform 0.5s ease'
//           }}
//           onError={(e) => {
//             e.target.src = 'https://via.placeholder.com/300x400/333/fff?text=No+Image';
//           }}
//         />
        
//         {/* Overlay with buttons */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8) 100%)',
//           display: 'flex',
//           alignItems: 'flex-end',
//           justifyContent: 'space-between',
//           padding: '20px',
//           opacity: isHovered ? 1 : 0,
//           transition: 'opacity 0.3s ease'
//         }}>
//           <button 
//             onClick={(e) => {
//               e.stopPropagation();
//               onClick(movie);
//             }}
//             style={{
//               background: 'rgba(255, 107, 107, 0.9)',
//               border: 'none',
//               padding: '8px 16px',
//               borderRadius: '20px',
//               color: 'white',
//               cursor: 'pointer',
//               fontWeight: 'bold',
//               backdropFilter: 'blur(10px)'
//             }}
//           >
//             📖 Details
//           </button>
          
//           <button 
//             onClick={(e) => {
//               e.stopPropagation();
//               onTrailerClick(movie);
//             }}
//             style={{
//               background: 'rgba(78, 205, 196, 0.9)',
//               border: 'none',
//               padding: '8px 16px',
//               borderRadius: '20px',
//               color: 'white',
//               cursor: 'pointer',
//               fontWeight: 'bold',
//               backdropFilter: 'blur(10px)'
//             }}
//           >
//             ▶ Trailer
//           </button>
//         </div>

//         {/* Rating */}
//         <div style={{
//           position: 'absolute',
//           bottom: '10px',
//           left: '10px',
//           background: 'rgba(0,0,0,0.8)',
//           color: '#ffd700',
//           padding: '5px 10px',
//           borderRadius: '10px',
//           fontSize: '0.8rem',
//           fontWeight: 'bold'
//         }}>
//           ⭐ {movie.imdbRating}
//         </div>
//       </div>

//       {/* Movie Info */}
//       <div style={{ padding: '20px' }}>
//         <h3 style={{ 
//           color: 'white', 
//           marginBottom: '10px',
//           fontSize: '1.2rem',
//           fontWeight: '600',
//           lineHeight: '1.3'
//         }}>
//           {movie.Title}
//         </h3>
        
//         <div style={{ 
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginBottom: '10px'
//         }}>
//           <span style={{ color: '#4ecdc4', fontSize: '0.9rem' }}>
//             {movie.Year}
//           </span>
//           <span style={{ color: '#ff6b6b', fontSize: '0.8rem', fontWeight: 'bold' }}>
//             {movie.Genre.split(',')[0]}
//           </span>
//         </div>
        
//         <p style={{ 
//           color: '#b0b0b0', 
//           fontSize: '0.85rem',
//           lineHeight: '1.4',
//           display: '-webkit-box',
//           WebkitLineClamp: 2,
//           WebkitBoxOrient: 'vertical',
//           overflow: 'hidden'
//         }}>
//           {movie.Plot}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;
import React, { useState } from 'react';

const MovieCard = ({ movie, onClick, onTrailerClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`movie-card hover-lift ${isHovered ? 'glow-animation' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
        borderRadius: '15px',
        overflow: 'hidden',
        cursor: 'pointer',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Featured Badge */}
      {movie.Featured && (
        <div style={{
          position: 'absolute',
          top: '15px',
          left: '15px',
          background: 'linear-gradient(135deg, #ff6b6b, #ff8e53)',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '20px',
          fontSize: '0.7rem',
          fontWeight: 'bold',
          zIndex: 2
        }}>
          ⭐ Featured
        </div>
      )}
      
      {/* Poster Section - Entirely Clickable for Details */}
      <div 
        style={{ position: 'relative', overflow: 'hidden' }}
        onClick={() => onClick(movie)} // Make poster clickable for details
      >
        <img 
          src={movie.Poster}
          alt={movie.Title}
          style={{
            width: '100%',
            height: '350px',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            cursor: 'pointer'
          }}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x400/333/fff?text=No+Image';
          }}
        />
        
        {/* Overlay with Trailer Button */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.8) 100%)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          padding: '20px',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}>
          <button 
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering details click
              onTrailerClick(movie);
            }}
            style={{
              background: 'rgba(78, 205, 196, 0.9)',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '25px',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 'bold',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            ▶ Watch Trailer
          </button>
        </div>

        {/* Rating */}
        <div style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          background: 'rgba(0,0,0,0.8)',
          color: '#ffd700',
          padding: '5px 10px',
          borderRadius: '10px',
          fontSize: '0.8rem',
          fontWeight: 'bold'
        }}>
          ⭐ {movie.imdbRating}
        </div>

        {/* Year */}
        <div style={{
          position: 'absolute',
          bottom: '15px',
          left: '15px',
          background: 'rgba(255, 107, 107, 0.9)',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '10px',
          fontSize: '0.8rem',
          fontWeight: 'bold'
        }}>
          {movie.Year}
        </div>
      </div>

      {/* Movie Info */}
      <div 
        style={{ padding: '20px', cursor: 'pointer' }}
        onClick={() => onClick(movie)} // Also make info area clickable
      >
        <h3 style={{ 
          color: 'white', 
          marginBottom: '10px',
          fontSize: '1.2rem',
          fontWeight: '600',
          lineHeight: '1.3'
        }}>
          {movie.Title}
        </h3>
        
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px'
        }}>
          <span style={{ color: '#4ecdc4', fontSize: '0.9rem' }}>
            {movie.Runtime}
          </span>
          <span style={{ color: '#ff6b6b', fontSize: '0.8rem', fontWeight: 'bold' }}>
            {movie.Genre.split(',')[0]}
          </span>
        </div>
        
        <p style={{ 
          color: '#b0b0b0', 
          fontSize: '0.85rem',
          lineHeight: '1.4',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOriental: 'vertical',
          overflow: 'hidden'
        }}>
          {movie.Plot}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;