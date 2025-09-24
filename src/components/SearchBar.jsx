import React, { useState } from 'react';

const SearchBar = ({ onSearch, loading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleRandomSearch = () => {
    const tamilKeywords = ['Vikram', 'Master', 'Jai Bhim', 'Kaithi', 'Asuran'];
    const randomKeyword = tamilKeywords[Math.floor(Math.random() * tamilKeywords.length)];
    setQuery(randomKeyword);
    onSearch(randomKeyword);
  };

  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      background: '#1a1a1a'
    }}>
      <form onSubmit={handleSubmit} style={{
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '1rem'
        }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Tamil movies... (e.g., Vikram, Master, PS-1)"
            style={{
              flex: 1,
              padding: '12px 16px',
              fontSize: '16px',
              border: '2px solid #333',
              borderRadius: '8px',
              background: '#2a2a2a',
              color: 'white',
              outline: 'none'
            }}
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '12px 24px',
              background: '#ff6b6b',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button
            type="button"
            onClick={handleRandomSearch}
            disabled={loading}
            style={{
              padding: '10px 20px',
              background: '#4ecdc4',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            🎲 Random Movie
          </button>
          <button
            type="button"
            onClick={() => {
              setQuery('');
              onSearch('');
            }}
            disabled={loading}
            style={{
              padding: '10px 20px',
              background: '#ffd166',
              color: 'black',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            🔥 All Movies
          </button>
        </div>
      </form>
      
      <div style={{
        marginTop: '1rem',
        color: '#ccc',
        fontSize: '14px'
      }}>
        Popular: Vikram, Master, PS-1, Jai Bhim, Kaithi
      </div>
    </div>
  );
};

export default SearchBar;