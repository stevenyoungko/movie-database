import React, { useState } from 'react';
import { StyledSearchForm, StyledMovieGrid, StyledMovieCard } from './styled';
import { getSearchMovie } from '../../api/movies';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
}

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMovies = async (searchQuery: string, pageNum: number) => {
    try {
      const { results, total_pages } = await getSearchMovie(
        searchQuery,
        pageNum
      );
      setMovies((prev) => (pageNum === 1 ? results : [...prev, ...results]));
      setHasMore(pageNum < total_pages);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(1);
    fetchMovies(query, 1);
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(query, nextPage);
  };

  return (
    <div>
      <StyledSearchForm onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="搜尋電影..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">搜尋</button>
      </StyledSearchForm>
      <InfiniteScroll
        dataLength={movies.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <StyledMovieGrid>
          {movies.map((movie) => (
            <StyledMovieCard key={movie.id}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : 'https://via.placeholder.com/200x300?text=No+Image'
                }
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.release_date?.split('-')[0]}</p>
            </StyledMovieCard>
          ))}
        </StyledMovieGrid>
      </InfiniteScroll>
    </div>
  );
};

export default MovieSearch;
