import type { Cast } from '../../types/movie';
import { StyledSection, StyledCastList, StyledCastCard } from './styled';

interface CastSectionProps {
  cast: Cast[];
}

const CastSection = ({ cast }: CastSectionProps) => {
  return (
    <StyledSection>
      <h2>演員陣容</h2>
      <StyledCastList>
        {cast.slice(0, 5).map((actor) => (
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
  );
};

export default CastSection;
