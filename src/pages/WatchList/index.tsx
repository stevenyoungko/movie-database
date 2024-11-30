import { useState, useEffect } from 'react';
import {
  StyledContainer,
  StyledTitle,
  StyledMovieList,
  StyledMovieItem,
  StyledMovieLink,
  StyledEmptyMessage,
  StyledWatchButton,
} from './styled';
import type { Movie } from '../../types/movie';

const WatchList = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    setFavorites(storedFavorites);
  }, []);

  return (
    <StyledContainer>
      <StyledTitle>我的待看清單</StyledTitle>
      {favorites.length > 0 ? (
        <StyledMovieList>
          {favorites.map((movie) => (
            <StyledMovieItem key={movie.id}>
              {movie.title}
              <StyledMovieLink to={`/movies/${movie.id}`}>
                <StyledWatchButton>查看</StyledWatchButton>
              </StyledMovieLink>
            </StyledMovieItem>
          ))}
        </StyledMovieList>
      ) : (
        <StyledEmptyMessage>你的待看清單是空的。</StyledEmptyMessage>
      )}
    </StyledContainer>
  );
};

export default WatchList;
