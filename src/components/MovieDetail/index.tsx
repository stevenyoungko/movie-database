import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../api/movies';
import type { MovieFullDetail } from '../../types/movie';
import {
  StyledDetailContainer,
  StyledHeader,
  StyledLoadingContainer,
} from './styled';
import CastSection from './CastSection';
import ReviewSection from './ReviewSection';
import InfoSection from './InfoSection';

const MovieDetail = () => {
  const { id } = useParams();
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
      <CastSection cast={movie.credits.cast} />
      <ReviewSection reviews={movie.reviews.results} />
    </StyledDetailContainer>
  );
};

export default MovieDetail;
