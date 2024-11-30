import { useState, useEffect } from 'react';
import { getMovieDetails } from '../api/movies';
import type { MovieFullDetail } from '../types/movie';

export const useMovieDetail = (id: string) => {
  const [movie, setMovie] = useState<MovieFullDetail | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return { movie };
};
