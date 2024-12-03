import {
  StyledMovieGrid,
  StyledMovieCard,
  LoadingSpinner,
  StyledNoMoviesMessage,
} from './styled';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Movie } from '../../../../types/movie';
import { Link } from 'react-router-dom';

export interface MovieListProps {
  movies: Movie[];
  hasMore: boolean;
  loadMore: () => void;
}

const MovieList = ({ movies, hasMore, loadMore }: MovieListProps) => {
  if (!movies || movies.length === 0) {
    return (
      <StyledNoMoviesMessage>目前沒有符合條件的電影</StyledNoMoviesMessage>
    );
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<LoadingSpinner>載入中...</LoadingSpinner>}
    >
      <StyledMovieGrid>
        {movies.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <StyledMovieCard>
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
          </Link>
        ))}
      </StyledMovieGrid>
    </InfiniteScroll>
  );
};

export default MovieList;
