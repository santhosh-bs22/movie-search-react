import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import MovieGrid from './components/MovieGrid';
import MovieDetails from './components/MovieDetails';
import TrailerModal from './components/TrailerModal';
import Particles from './components/Particles';
import { searchMovies, getMovieDetails } from './services/movieAPI';
import { tamilMovies } from './data/tamilMovies';
import './styles/App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [trailerMovie, setTrailerMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeSection, setActiveSection] = useState('featured');

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await searchMovies('');
      setMovies(result.movies);
      setFeaturedMovies(result.movies.filter(movie => movie.Featured));
      setTrendingMovies(result.movies.filter(movie => movie.Trending));
    } catch (err) {
      setError('Failed to load movies.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');
    try {
      const result = await searchMovies(query);
      setMovies(result.movies);
      setActiveSection('search');
      
      if (result.movies.length === 0) {
        setError('No movies found. Try searching for different keywords.');
      }
    } catch (err) {
      setError('Search failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleMovieClick = async (movie) => {
    setSelectedMovie(movie);
  };

  const handleTrailerClick = (movie) => {
    setTrailerMovie(movie);
  };

  const showFeatured = () => {
    setMovies(featuredMovies);
    setActiveSection('featured');
  };

  const showTrending = () => {
    setMovies(trendingMovies);
    setActiveSection('trending');
  };

  const showAll = () => {
    setMovies(tamilMovies);
    setActiveSection('all');
  };

  return (
    <div className="App">
      <Particles />
      <Header />
      
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        
        {/* Navigation Tabs */}
        <div style={{
          background: 'var(--darker)',
          padding: '2rem 0',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div className="container">
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              {[
                { key: 'featured', label: '⭐ Featured', action: showFeatured },
                { key: 'trending', label: '🔥 Trending', action: showTrending },
                { key: 'all', label: '🎬 All Movies', action: showAll }
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={tab.action}
                  style={{
                    padding: '12px 24px',
                    background: activeSection === tab.key ? 
                      'linear-gradient(135deg, #ff6b6b, #ff8e53)' : 'transparent',
                    border: `2px solid ${activeSection === tab.key ? 'transparent' : '#4ecdc4'}`,
                    borderRadius: '25px',
                    color: activeSection === tab.key ? 'white' : '#4ecdc4',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <SearchBar onSearch={handleSearch} loading={loading} />
        
        {error && (
          <div className="error-banner">
            <div className="container">
              <div className="error-content">
                <span>⚠️ {error}</span>
                <button onClick={showAll} className="error-retry">
                  Show All Movies
                </button>
              </div>
            </div>
          </div>
        )}

        <MovieGrid 
          movies={movies} 
          onMovieClick={handleMovieClick}
          onTrailerClick={handleTrailerClick}
          loading={loading}
        />
      </main>

      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      {trailerMovie && (
        <TrailerModal
          movie={trailerMovie}
          onClose={() => setTrailerMovie(null)}
        />
      )}

      {/* Footer */}
      <footer style={{
        background: 'var(--darker)',
        padding: '3rem 0',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container">
          <p style={{ color: '#b0b0b0', marginBottom: '1rem' }}>
            🎬 MovieHub - Tamil Cinema Universe
          </p>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>
            Discover the magic of Kollywood with our curated collection of the finest Tamil movies
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;