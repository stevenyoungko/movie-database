import { render, screen } from '@testing-library/react';
import MovieList from '../../../../../pages/Home/components/MovieList';
import type { MovieListProps } from '../../../../../pages/Home/components/MovieList';
import { BrowserRouter } from 'react-router-dom';
import { mockMovies } from '../../../../../mocks/movie';

const renderMovieList = (props: MovieListProps) => {
  return render(
    <BrowserRouter>
      <MovieList {...props} />
    </BrowserRouter>
  );
};

describe('MovieList', () => {
  it('should render movie list correctly', () => {
    renderMovieList({
      movies: mockMovies,
      hasMore: true,
      loadMore: jest.fn(),
    });

    expect(screen.getByText('Venom: Let There Be Carnage')).toBeInTheDocument();
    expect(screen.getByText('Carmen 1945')).toBeInTheDocument();
    expect(screen.getByText('2021')).toBeInTheDocument();
    expect(screen.getByText('1988')).toBeInTheDocument();

    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute(
      'src',
      'https://image.tmdb.org/t/p/w500/1MJNcPZy46hIy2CmSqOeru0yr5C.jpg'
    );
    expect(images[1]).toHaveAttribute(
      'src',
      'https://image.tmdb.org/t/p/w500/raNbLci95MJ3L3dMnG7L7bD37lY.jpg'
    );
  });

  it('should not show loading when there are no more movies', () => {
    renderMovieList({
      movies: mockMovies,
      hasMore: false,
      loadMore: jest.fn(),
    });

    expect(screen.queryByText('載入中...')).not.toBeInTheDocument();
  });
});
