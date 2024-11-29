import apiInstance from '../utils/api';

interface MovieResponse {
  results: Movie[];
  total_pages: number;
}

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
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
