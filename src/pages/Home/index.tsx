import MovieSearch from '../../components/MovieSearch';
import MovieList from '../../components/MovieList';
import MovieSort from '../../components/MovieSort';
import { StyledSearchPrompt } from '../../components/MovieSearch/styled';
import { useState, useEffect } from 'react';
import { useMovieSearch } from '../../hooks/useMovieSearch';
import { useMovieSort } from '../../hooks/useMovieSort';
import { StyledWatchListLink } from '../WatchList/styled';
import { LoadingSpinner } from './styled';

const Home = () => {
  const [page, setPage] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);
  const [query, setQuery] = useState('');
  const { movies, hasMore, fetchMovies, error, isLoading } = useMovieSearch();
  const { sortBy, setSortBy, sortedMovies } = useMovieSort(movies);

  useEffect(() => {
    const searchQuery = localStorage.getItem('searchQuery');
    if (searchQuery) {
      setQuery(searchQuery);
      handleSearch(searchQuery);
    }
  }, []);

  if (error) {
    throw error;
  }

  const handleSearch = (searchQuery: string) => {
    setPage(1);
    setHasSearched(true);
    localStorage.setItem('searchQuery', searchQuery);
    fetchMovies(searchQuery, 1);
    setQuery('');
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(query, nextPage);
  };

  const renderContent = () => {
    if (!hasSearched) {
      return <StyledSearchPrompt>請輸入關鍵字開始搜尋電影</StyledSearchPrompt>;
    }

    if (isLoading) {
      return <LoadingSpinner>載入中...</LoadingSpinner>;
    }

    return (
      <>
        <MovieSort value={sortBy} onChange={setSortBy} />
        <MovieList
          movies={sortedMovies}
          hasMore={hasMore}
          loadMore={loadMore}
        />
      </>
    );
  };

  return (
    <>
      <StyledWatchListLink to="/watch_list">我的收藏清單</StyledWatchListLink>
      <MovieSearch onSearch={handleSearch} query={query} setQuery={setQuery} />
      {renderContent()}
    </>
  );
};

export default Home;
