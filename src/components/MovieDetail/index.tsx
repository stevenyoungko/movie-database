import { useParams } from 'react-router-dom';
import { useMovieDetail } from '../../hooks/useMovieDetail';
import { useFavorite } from '../../hooks/useFavorite';
import { StyledDetailContainer, StyledHeader, StyledButton } from './styled';
import CastSection from './CastSection';
import ReviewSection from './ReviewSection';
import InfoSection from './InfoSection';
import VideoSection from './VideoSection';

const MovieDetail = () => {
  const { id } = useParams();
  const { movie } = useMovieDetail(id!);
  const { isFavorite, toggleFavorite } = useFavorite(id);

  if (!movie) {
    return null;
  }

  const director = movie.credits.crew.find(
    (member) => member.job === 'Director'
  );

  return (
    <StyledDetailContainer>
      <StyledHeader>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : 'https://via.placeholder.com/300x450?text=No+Image'
          }
          alt={movie.title}
        />
        <InfoSection movie={movie} director={director} />
        <StyledButton onClick={toggleFavorite}>
          {isFavorite ? '移除收藏' : '加入收藏'}
        </StyledButton>
      </StyledHeader>
      <VideoSection videos={movie.videos.results} />
      <CastSection cast={movie.credits.cast} />
      <ReviewSection reviews={movie.reviews.results} />
    </StyledDetailContainer>
  );
};

export default MovieDetail;
