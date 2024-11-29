import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../api/movies';
import type { MovieFullDetail } from '../../types/movie';
import {
  StyledDetailContainer,
  StyledHeader,
  StyledSection,
  StyledCastList,
  StyledCastCard,
  StyledLoadingContainer,
  StyledReviewList,
  StyledReviewCard,
} from './styled';
import MovieInfo from './MovieInfo';

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
        <MovieInfo movie={movie} director={director} />
      </StyledHeader>
      <StyledSection>
        <h2>演員陣容</h2>
        <StyledCastList>
          {movie.credits.cast.slice(0, 5).map((actor) => (
            <StyledCastCard key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : 'https://via.placeholder.com/200x300?text=No+Image'
                }
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>飾演：{actor.character}</p>
            </StyledCastCard>
          ))}
        </StyledCastList>
      </StyledSection>
      <StyledSection>
        <h2>評論</h2>
        <StyledReviewList>
          {movie.reviews.results.length > 0 ? (
            movie.reviews.results.slice(0, 5).map((review) => (
              <StyledReviewCard key={review.id}>
                <h3>{review.author}</h3>
                <p>
                  {review.content.length > 300
                    ? `${review.content.substring(0, 300)}...`
                    : review.content}
                </p>
                <small>
                  {new Date(review.created_at).toLocaleDateString()}
                </small>
              </StyledReviewCard>
            ))
          ) : (
            <p>目前沒有評論</p>
          )}
        </StyledReviewList>
      </StyledSection>
    </StyledDetailContainer>
  );
};

export default MovieDetail;
