import { render, screen } from '@testing-library/react';
import InfoSection from '../../../../../pages/Detail/components/MovieDetail/InfoSection';
import { mockMovieDetail } from '../../../../../mocks/movie';

describe('InfoSection', () => {
  it('should render movie information correctly', () => {
    const director = { name: 'Test Director' };
    render(<InfoSection movie={mockMovieDetail} director={director} />);

    expect(screen.getByText('Venom: Let There Be Carnage')).toBeInTheDocument();
    expect(screen.getByText('2021-09-30')).toBeInTheDocument();
    expect(screen.getByText('97 分鐘')).toBeInTheDocument();
    expect(
      screen.getByText('Science Fiction, Action, Adventure')
    ).toBeInTheDocument();
    expect(screen.getByText('Test Director')).toBeInTheDocument();
    expect(screen.getByText(mockMovieDetail.overview)).toBeInTheDocument();
  });

  it('should show "未知" when director is undefined', () => {
    render(<InfoSection movie={mockMovieDetail} director={undefined} />);
    expect(screen.getByText('未知')).toBeInTheDocument();
  });
});
