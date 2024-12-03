import { useState } from 'react';
import {
  StyledLotteryButton,
  StyledLotteryResult,
  StyledMovieLink,
  StyledWatchButton,
} from './styled';
import type { Movie } from '../../types/movie';

interface MovieLotteryProps {
  movies: Movie[];
}

const MovieLottery = ({ movies }: MovieLotteryProps) => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleLotteryClick = () => {
    if (movies.length === 0) return;
    const randomIndex = Math.floor(Math.random() * movies.length);
    setSelectedMovie(movies[randomIndex]);
  };

  return (
    <>
      <StyledLotteryButton onClick={handleLotteryClick}>
        幫我抽一部片！
      </StyledLotteryButton>
      {selectedMovie && (
        <StyledLotteryResult>
          抽中了：{selectedMovie.title}
          <StyledMovieLink to={`/movies/${selectedMovie.id}`}>
            <StyledWatchButton>立即觀看</StyledWatchButton>
          </StyledMovieLink>
        </StyledLotteryResult>
      )}
    </>
  );
};

export default MovieLottery;
