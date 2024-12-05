import MovieSearch from './components/MovieSearch';
import MovieList from './components/MovieList';
import MovieSort from './components/MovieSort';
import { StyledSearchPrompt } from './components/MovieSearch/styled';
import { useState, useEffect } from 'react';
import { useMovieSearch } from './hooks/useMovieSearch';
import { useMovieSort } from './hooks/useMovieSort';
import { StyledWatchListLink } from '../WatchList/styled';

const Home = () => {
  const [page, setPage] = useState(1);
  const [hasSearched, setHasSearched] = useState(false);
  const [query, setQuery] = useState('');
  const { movies, hasMore, fetchMovies, error } = useMovieSearch();
  const { sortBy, setSortBy, sortedMovies } = useMovieSort(movies);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const searchQuery = localStorage.getItem('searchQuery');
    if (searchQuery) {
      setQuery(searchQuery);
      handleSearch(searchQuery);
    }
  }, []);

  const handleSearch = async (searchQuery: string) => {
    setIsSearching(true);
    setPage(1);
    setHasSearched(true);
    localStorage.setItem('searchQuery', searchQuery);
    await fetchMovies(searchQuery, 1);
    setIsSearching(false);
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(query, nextPage);
  };

  const renderContent = () => {
    if (error) {
      throw error;
    }

    if (!hasSearched) {
      return <StyledSearchPrompt>請輸入關鍵字開始搜尋電影</StyledSearchPrompt>;
    }

    if (isSearching) {
      return <StyledSearchPrompt>搜尋中...</StyledSearchPrompt>;
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
