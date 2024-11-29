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
} from './styled';

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
    return <div>Loading...</div>;
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
        <div>
          <h1>{movie.title}</h1>
          <p>
            <strong>上映日期：</strong>
            {movie.release_date}
          </p>
          <p>
            <strong>片長：</strong>
            {movie.runtime} 分鐘
          </p>
          <p>
            <strong>類型：</strong>
            {movie.genres.map((genre) => genre.name).join(', ')}
          </p>
          <p>
            <strong>導演：</strong>
            {director?.name || '未知'}
          </p>
          <p>
            <strong>劇情簡介：</strong>
            {movie.overview}
          </p>
        </div>
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
    </StyledDetailContainer>
  );
};

export default MovieDetail;
