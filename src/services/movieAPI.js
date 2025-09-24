import { tamilMovies } from '../data/tamilMovies';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const searchMovies = async (query) => {
  await delay(300);
  
  if (!query || query.trim() === '') {
    return {
      movies: tamilMovies,
      totalResults: tamilMovies.length
    };
  }
  
  const filteredMovies = tamilMovies.filter(movie =>
    movie.Title.toLowerCase().includes(query.toLowerCase()) ||
    movie.Director.toLowerCase().includes(query.toLowerCase()) ||
    movie.Actors.toLowerCase().includes(query.toLowerCase()) ||
    movie.Genre.toLowerCase().includes(query.toLowerCase())
  );
  
  return {
    movies: filteredMovies,
    totalResults: filteredMovies.length
  };
};

export const getMovieDetails = async (imdbID) => {
  await delay(200);
  const movie = tamilMovies.find(m => m.imdbID === imdbID);
  return movie || null;
};