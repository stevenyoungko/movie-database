import { Video } from '../../types/movie';
import { StyledSection, StyledVideoContainer, StyledIframe } from './styled';

interface VideoSectionProps {
  videos: Video[];
}

const VideoSection = ({ videos }: VideoSectionProps) => {
  const officialTrailer = videos.filter(
    (video) =>
      video.official && video.site === 'YouTube' && video.type === 'Trailer'
  )[0];

  if (!officialTrailer) {
    return null;
  }

  return (
    <StyledSection>
      <h2>預告片</h2>
      <StyledVideoContainer>
        <StyledIframe
          src={`https://www.youtube.com/embed/${officialTrailer.key}`}
          title={officialTrailer.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </StyledVideoContainer>
    </StyledSection>
  );
};

export default VideoSection;
