import MovieSearch from '../../components/MovieSearch';
import MovieList from '../../components/MovieList';
import { StyledSearchPrompt } from '../../components/MovieSearch/styled';
import { useState } from 'react';
import { useMovieSearch } from '../../hooks/useMovieSearch';
import { StyledWatchListLink } from '../WatchList/styled';

const Home = () => {
  const [page, setPage] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);
  const [query, setQuery] = useState('');
  const { movies, hasMore, fetchMovies, error } = useMovieSearch();

  if (error) {
    throw error;
  }

  const handleSearch = (searchQuery: string) => {
    setPage(1);
    setHasSearched(true);
    fetchMovies(searchQuery, 1);
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(query, nextPage);
  };

  return (
    <>
      <StyledWatchListLink to="/watch_list">我的收藏清單</StyledWatchListLink>
      <MovieSearch onSearch={handleSearch} query={query} setQuery={setQuery} />
      {!hasSearched ? (
        <StyledSearchPrompt>請輸入關鍵字開始搜尋電影</StyledSearchPrompt>
      ) : (
        <MovieList movies={movies} hasMore={hasMore} loadMore={loadMore} />
      )}
    </>
  );
};

export default Home;
