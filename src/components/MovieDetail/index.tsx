import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../../api/movies';
import type { MovieFullDetail } from '../../types/movie';
import {
  StyledDetailContainer,
  StyledHeader,
  StyledLoadingContainer,
  StyledBackButton,
} from './styled';
import CastSection from './CastSection';
import ReviewSection from './ReviewSection';
import InfoSection from './InfoSection';
import VideoSection from './VideoSection';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<MovieFullDetail | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(id!);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return (
      <StyledDetailContainer>
        <StyledLoadingContainer>載入中...</StyledLoadingContainer>
      </StyledDetailContainer>
    );
  }

  const director = movie.credits.crew.find(
    (member) => member.job === 'Director'
  );

  return (
    <StyledDetailContainer>
      <StyledBackButton onClick={() => navigate(-1)}>返回</StyledBackButton>
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
      </StyledHeader>
      <VideoSection videos={movie.videos.results} />
      <CastSection cast={movie.credits.cast} />
      <ReviewSection reviews={movie.reviews.results} />
    </StyledDetailContainer>
  );
};

export default MovieDetail;
