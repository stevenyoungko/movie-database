import { useState, useMemo } from 'react';
import type { Movie } from '../types/movie';

export const useMovieSort = (movies: Movie[]) => {
  const [sortBy, setSortBy] = useState('default');

  const sortedMovies = useMemo(() => {
    if (sortBy === 'default') return movies;

    return [...movies].sort((a: Movie, b: Movie) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        case 'year':
          return (a.release_date || '').localeCompare(b.release_date || '');
        case 'year-desc':
          return (b.release_date || '').localeCompare(a.release_date || '');
        default:
          return 0;
      }
    });
  }, [movies, sortBy]);

  return {
    sortBy,
    setSortBy,
    sortedMovies,
  };
};
