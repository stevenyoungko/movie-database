import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../../pages/Home';
import { mockMovies } from '../../../mocks/movie';
import userEvent from '@testing-library/user-event';

// Mock the custom hook
jest.mock('../../../hooks/useMovieSearch', () => ({
  useMovieSearch: () => ({
    movies: mockMovies,
    hasMore: true,
    fetchMovies: jest.fn(),
    error: null,
  }),
}));

const renderHome = () => {
  return render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

describe('Home', () => {
  it('renders initial search prompt', () => {
    renderHome();
    expect(screen.getByText('請輸入關鍵字開始搜尋電影')).toBeInTheDocument();
  });

  it('renders watchlist link', () => {
    renderHome();
    expect(screen.getByText('我的收藏清單')).toBeInTheDocument();
  });

  it('displays movie list after search', () => {
    renderHome();
    const searchInput = screen.getByRole('textbox');
    userEvent.type(searchInput, 'venom');
    userEvent.click(screen.getByRole('button'));

    expect(
      screen.queryByText('請輸入關鍵字開始搜尋電影')
    ).not.toBeInTheDocument();
    expect(screen.getByText('Venom: Let There Be Carnage')).toBeInTheDocument();
    expect(screen.getByText('Carmen 1945')).toBeInTheDocument();
  });
});
