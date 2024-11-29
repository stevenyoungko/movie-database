import React, { useState } from 'react';
import {
  StyledSearchForm,
  StyledMovieGrid,
  StyledMovieCard,
  StyledSearchContainer,
  LoadingSpinner,
  StyledSearchPrompt,
} from './styled';
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
  const [hasSearched, setHasSearched] = useState(false);

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
    setHasSearched(true);
    fetchMovies(query, 1);
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(query, nextPage);
  };

  return (
    <StyledSearchContainer>
      <StyledSearchForm onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="搜尋電影..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">搜尋</button>
      </StyledSearchForm>
      {!hasSearched ? (
        <StyledSearchPrompt>請輸入關鍵字開始搜尋電影</StyledSearchPrompt>
      ) : (
        <InfiniteScroll
          dataLength={movies.length}
          next={loadMore}
          hasMore={hasMore}
          loader={<LoadingSpinner>載入中...</LoadingSpinner>}
        >
          <StyledMovieGrid>
            {movies.map((movie) => (
              <StyledMovieCard key={movie.id}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : 'https://via.placeholder.com/500x750?text=No+Image'
                  }
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split('-')[0]}</p>
              </StyledMovieCard>
            ))}
          </StyledMovieGrid>
        </InfiniteScroll>
      )}
    </StyledSearchContainer>
  );
};

export default MovieSearch;
