import { useEffect } from 'react';
import { getMovieDetails } from '../api/movies';
import type { MovieFullDetail } from '../types/movie';
import { useFetchData } from './useFetchData';

export const useMovieDetail = (id: string) => {
  const {
    data: movie,
    setData: setMovie,
    error,
    setError,
    loading,
    setLoading,
  } = useFetchData<MovieFullDetail>();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
        setError(null);
      } catch (error) {
        setError(error as Error);
        setMovie(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id, setError, setLoading, setMovie]);

  return { movie, error, loading };
};
