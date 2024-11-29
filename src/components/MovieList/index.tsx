import { StyledMovieGrid, StyledMovieCard, LoadingSpinner } from './styled';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Movie } from '../../types/movie';

interface MovieListProps {
  movies: Movie[];
  hasMore: boolean;
  loadMore: () => void;
}

const MovieList = ({ movies, hasMore, loadMore }: MovieListProps) => {
  return (
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
  );
};

export default MovieList;
