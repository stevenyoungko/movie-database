import { useEffect } from 'react';
import { getMovieDetails } from '../../../api/movies';
import type { MovieFullDetail } from '../../../types/movie';
import { useFetchData } from '../../../hooks/useFetchData';
import { adaptMovieDetail } from '../../../utils/adaptMovieDetail';

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
        const rawData = await getMovieDetails(id);
        const adaptedData = adaptMovieDetail(rawData);
        setMovie(adaptedData);
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
