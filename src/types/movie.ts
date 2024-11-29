export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
}

interface AuthorDetails {
  name: string;
  username: string;
  avatar_path: string | null;
  rating: number | null;
}

export interface Review {
  id: string;
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  updated_at: string;
  url: string;
}

export interface Cast {
  id: number;
  name: string;
  profile_path: string | null;
  character: string;
}

export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface MovieFullDetail {
  title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
  genres: { id: number; name: string }[];
  runtime: number;
  credits: {
    cast: Cast[];
    crew: { id: number; name: string; job: string }[];
  };
  reviews: {
    results: Review[];
  };
  videos: {
    results: Video[];
  };
}
