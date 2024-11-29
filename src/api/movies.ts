import apiInstance from '../utils/api';
import type { MovieFullDetail, Movie } from '../types/movie';

interface MovieResponse {
  results: Movie[];
  total_pages: number;
}

export const getSearchMovie = async (
  searchQuery: string,
  pageNum: number
): Promise<MovieResponse> => {
  const response = await apiInstance.get(`/search/movie`, {
    params: {
      query: searchQuery,
      page: pageNum,
    },
  });
  return response.data;
};

export const getMovieDetails = async (id: string): Promise<MovieFullDetail> => {
  const response = await apiInstance.get(`/movie/${id}`, {
    params: {
      append_to_response: 'credits',
    },
  });
  return response.data;
};
