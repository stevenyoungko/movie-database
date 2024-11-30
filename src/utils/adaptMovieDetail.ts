import type { MovieFullDetail } from '../types/movie';

const DEFAULT_MOVIE: MovieFullDetail = {
  title: '未知標題',
  overview: '暫無簡介',
  release_date: '',
  poster_path: null,
  genres: [],
  runtime: 0,
  credits: {
    cast: [],
    crew: [],
  },
  reviews: {
    results: [],
  },
  videos: {
    results: [],
  },
};

export const adaptMovieDetail = (data: unknown): MovieFullDetail => {
  if (!data || Array.isArray(data) || typeof data !== 'object') {
    return DEFAULT_MOVIE;
  }

  return data as MovieFullDetail;
};
