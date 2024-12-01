import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import WatchList from '../../../pages/WatchList';
import { mockMovies } from '../../../mocks/movie';

const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

const renderWatchList = () => {
  return render(
    <BrowserRouter>
      <WatchList />
    </BrowserRouter>
  );
};

describe('WatchList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should display empty message when no favorites', () => {
    mockLocalStorage.getItem.mockReturnValue('[]');
    renderWatchList();

    expect(screen.getByText('你的待看清單是空的。')).toBeInTheDocument();
  });

  it('should display movies from localStorage', () => {
    mockLocalStorage.getItem.mockReturnValue(JSON.stringify(mockMovies));
    renderWatchList();

    expect(screen.getByText(mockMovies[0].title)).toBeInTheDocument();
    expect(screen.getByText(mockMovies[1].title)).toBeInTheDocument();
  });

  it('should toggle sort order when clicking sort button', () => {
    mockLocalStorage.getItem.mockReturnValue(JSON.stringify(mockMovies));
    renderWatchList();

    const sortButton = screen.getByText(/按標題/);
    expect(screen.getByText('按標題降序排列')).toBeInTheDocument();

    userEvent.click(sortButton);
    expect(screen.getByText('按標題升序排列')).toBeInTheDocument();

    userEvent.click(sortButton);
    expect(screen.getByText('按標題降序排列')).toBeInTheDocument();
  });

  it('should navigate to movie detail page when clicking view button', () => {
    mockLocalStorage.getItem.mockReturnValue(JSON.stringify(mockMovies));
    renderWatchList();

    const viewButton = screen.getAllByText('查看')[0];
    userEvent.click(viewButton);

    expect(window.location.pathname).toMatch('/movies/383634');
  });
});
