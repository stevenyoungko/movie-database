export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
}

export interface MovieFullDetail {
  title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
  genres: { id: number; name: string }[];
  runtime: number;
  credits: {
    cast: {
      id: number;
      name: string;
      profile_path: string | null;
      character: string;
    }[];
    crew: { id: number; name: string; job: string }[];
  };
}
