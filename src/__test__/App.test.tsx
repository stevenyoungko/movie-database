import { render, screen } from '@testing-library/react';
import { act } from 'react';
import App from '../App';

const mockHome = jest.fn();
jest.mock('../pages/Home', () => {
  return () => mockHome();
});
jest.mock('../pages/Detail', () => () => <div>Detail Page</div>);
jest.mock('../pages/WatchList', () => () => <div>Watch List Page</div>);

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockHome.mockReturnValue(<div>Home Page</div>);
  });

  test('renders header with title and subtitle', () => {
    render(<App />);

    expect(screen.getByText('🎬 電影數據庫')).toBeInTheDocument();
    expect(screen.getByText('探索你最愛的電影')).toBeInTheDocument();
  });

  test('renders footer with copyright text', () => {
    render(<App />);

    expect(screen.getByText(/© 2024 電影數據庫/)).toBeInTheDocument();
  });

  test('renders navigation routes correctly', () => {
    render(<App />);

    expect(screen.getByText('Home Page')).toBeInTheDocument();
    expect(screen.queryByText('Detail Page')).not.toBeInTheDocument();
    expect(screen.queryByText('Watch List Page')).not.toBeInTheDocument();
  });

  test('renders ErrorFallback component when an error occurs', () => {
    mockHome.mockImplementation(() => {
      throw new Error('Test error');
    });

    act(() => {
      render(<App />);
    });

    expect(screen.getByText('😢 發生錯誤')).toBeInTheDocument();

    mockHome.mockReset();
  });
});
