import { useState, useEffect } from 'react';
import {
  StyledContainer,
  StyledTitle,
  StyledMovieList,
  StyledMovieItem,
  StyledMovieLink,
  StyledEmptyMessage,
  StyledWatchButton,
  StyledSortButton,
} from './styled';
import type { Movie } from '../../types/movie';
import { StyledHomeLink } from '../Home/styled';
import { IoMdArrowRoundUp, IoMdArrowRoundDown } from 'react-icons/io';

const WatchList = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    setFavorites(storedFavorites);
  }, []);

  const sortedFavorites = [...favorites].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    }
    return b.title.localeCompare(a.title);
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <>
      <StyledHomeLink to="/">回首頁</StyledHomeLink>
      <StyledContainer>
        <StyledTitle>我的待看清單</StyledTitle>
        {favorites.length > 0 ? (
          <>
            <StyledSortButton onClick={toggleSortOrder}>
              {sortOrder === 'asc' ? (
                <>
                  按標題降序排列 <IoMdArrowRoundDown />
                </>
              ) : (
                <>
                  按標題升序排列 <IoMdArrowRoundUp />
                </>
              )}
            </StyledSortButton>
            <StyledMovieList>
              {sortedFavorites.map((movie) => (
                <StyledMovieItem key={movie.id}>
                  {movie.title}
                  <StyledMovieLink to={`/movies/${movie.id}`}>
                    <StyledWatchButton>查看</StyledWatchButton>
                  </StyledMovieLink>
                </StyledMovieItem>
              ))}
            </StyledMovieList>
          </>
        ) : (
          <StyledEmptyMessage>你的待看清單是空的。</StyledEmptyMessage>
        )}
      </StyledContainer>
    </>
  );
};

export default WatchList;
