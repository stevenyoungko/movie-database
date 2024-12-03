import { useState } from 'react';
import { Movie } from '../types/movie';
import { getSearchMovie } from '../api/movies';

export const useMovieSearch = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async (searchQuery: string, pageNum: number) => {
    try {
      setIsLoading(true);
      const { results, total_pages } = await getSearchMovie(
        searchQuery,
        pageNum
      );
      setMovies((prev) => (pageNum === 1 ? results : [...prev, ...results]));
      setHasMore(pageNum < total_pages);
      setError(null);
    } catch (error) {
      setError(error as Error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { movies, hasMore, error, isLoading, fetchMovies };
};
