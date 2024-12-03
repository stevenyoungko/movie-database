import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieDetail from '../../../../../pages/Detail/components/MovieDetail';
import { mockMovieDetail } from '../../../../../mocks/movie';
import * as useMovieDetailHook from '../../../../../pages/Detail/hooks/useMovieDetail';
import * as useFavoriteHook from '../../../../../pages/Detail/hooks/useFavorite';

jest.mock('../../../../../pages/Detail/hooks/useMovieDetail');
jest.mock('../../../../../pages/Detail/hooks/useFavorite');

describe('MovieDetail', () => {
  const mockUseMovieDetail = useMovieDetailHook.useMovieDetail as jest.Mock;
  const mockUseFavorite = useFavoriteHook.useFavorite as jest.Mock;

  beforeEach(() => {
    mockUseMovieDetail.mockReturnValue({
      movie: mockMovieDetail,
      loading: false,
      error: null,
    });

    mockUseFavorite.mockReturnValue({
      isFavorite: false,
      toggleFavorite: jest.fn(),
    });
  });

  const renderComponent = () => {
    return render(<MovieDetail />);
  };

  it('should render movie details correctly', () => {
    renderComponent();

    expect(screen.getByText(mockMovieDetail.title)).toBeInTheDocument();
    expect(screen.getByAltText(mockMovieDetail.title)).toBeInTheDocument();
    expect(screen.getByText(mockMovieDetail.overview)).toBeInTheDocument();
  });

  it('should show loading message when loading', () => {
    mockUseMovieDetail.mockReturnValue({
      movie: null,
      loading: true,
      error: null,
    });

    renderComponent();

    expect(screen.getByText('載入中...')).toBeInTheDocument();
  });

  it('should toggle favorite status', () => {
    const mockToggleFavorite = jest.fn();
    mockUseFavorite.mockReturnValue({
      isFavorite: false,
      toggleFavorite: mockToggleFavorite,
    });

    renderComponent();

    const favoriteButton = screen.getByText('加入收藏');
    userEvent.click(favoriteButton);

    expect(mockToggleFavorite).toHaveBeenCalled();
  });

  it('should display correct favorite/unfavorite text', () => {
    mockUseFavorite.mockReturnValue({
      isFavorite: true,
      toggleFavorite: jest.fn(),
    });

    renderComponent();

    expect(screen.getByText('移除收藏')).toBeInTheDocument();
  });
});
