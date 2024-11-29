import React, { useState } from 'react';
import {
  StyledSearchForm,
  StyledSearchContainer,
  StyledSearchPrompt,
} from './styled';
import { getSearchMovie } from '../../api/movies';
import MovieList from '../MovieList';
import { Movie } from '../../types/movie';

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
        <MovieList movies={movies} hasMore={hasMore} loadMore={loadMore} />
      )}
    </StyledSearchContainer>
  );
};

export default MovieSearch;
