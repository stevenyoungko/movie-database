import MovieSearch from '../../components/MovieSearch';
import MovieList from '../../components/MovieList';
import { StyledSearchPrompt } from '../../components/MovieSearch/styled';
import { useState } from 'react';
import type { Movie } from '../../types/movie';
import { getSearchMovie } from '../../api/movies';

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [hasSearched, setHasSearched] = useState(false);
  const [query, setQuery] = useState('');

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
