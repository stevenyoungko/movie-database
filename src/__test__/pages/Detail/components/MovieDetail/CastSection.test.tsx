import { render, screen } from '@testing-library/react';
import CastSection from '../../../../../pages/Detail/components/MovieDetail/CastSection';
import { mockMovieDetail } from '../../../../../mocks/movie';

describe('CastSection', () => {
  it('should render cast information correctly', () => {
    render(<CastSection cast={mockMovieDetail.credits.cast} />);

    expect(screen.getByText('演員陣容')).toBeInTheDocument();
    expect(screen.getByText('Tom Hardy')).toBeInTheDocument();
    expect(screen.getByText('飾演：Eddie Brock / Venom')).toBeInTheDocument();

    const actorImage = screen.getByAltText('Tom Hardy') as HTMLImageElement;
    expect(actorImage.src).toContain(
      'https://image.tmdb.org/t/p/w200/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg'
    );
  });

  it('should display placeholder image when actor has no profile image', () => {
    const castWithoutImage = [
      {
        ...mockMovieDetail.credits.cast[0],
        profile_path: null,
      },
    ];

    render(<CastSection cast={castWithoutImage} />);

    const placeholderImage = screen.getByAltText(
      'Tom Hardy'
    ) as HTMLImageElement;
    expect(placeholderImage.src).toBe(
      'https://via.placeholder.com/200x300?text=No+Image'
    );
  });

  it('should only display first 5 cast members', () => {
    const multipleCast = Array(8)
      .fill({})
      .map((_, index) => ({
        ...mockMovieDetail.credits.cast[0],
        id: index,
      }));

    render(<CastSection cast={multipleCast} />);

    const castCards = screen.getAllByRole('img');
    expect(castCards).toHaveLength(5);
  });
});
