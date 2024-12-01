import { render, screen } from '@testing-library/react';
import MovieList from '../../../components/MovieList';
import type { MovieListProps } from '../../../components/MovieList';
import { BrowserRouter } from 'react-router-dom';

const mockMovies = [
  {
    id: 1,
    title: 'Test Movie',
    poster_path: '/test-path.jpg',
    release_date: '2023-03-20',
  },
  {
    id: 2,
    title: 'Test Movie 2',
    poster_path: null,
    release_date: '2024-01-01',
  },
];

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

    expect(screen.getByText('Test Movie')).toBeInTheDocument();
    expect(screen.getByText('Test Movie 2')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
    expect(screen.getByText('2024')).toBeInTheDocument();

    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute(
      'src',
      'https://image.tmdb.org/t/p/w500/test-path.jpg'
    );
    expect(images[1]).toHaveAttribute(
      'src',
      'https://via.placeholder.com/500x750?text=No+Image'
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
