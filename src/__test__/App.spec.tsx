import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

jest.mock('../pages/Home', () => () => <div>Home Page</div>);
jest.mock('../pages/Detail', () => () => <div>Detail Page</div>);
jest.mock('../pages/WatchList', () => () => <div>Watch List Page</div>);

describe('App Component', () => {
  test('renders header with title and subtitle', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('🎬 電影數據庫')).toBeInTheDocument();
    expect(screen.getByText('探索你最愛的電影')).toBeInTheDocument();
  });

  test('renders footer with copyright text', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/© 2024 電影數據庫/)).toBeInTheDocument();
  });

  test('renders Home page on default route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  test('renders WatchList page on watch list route', () => {
    render(
      <MemoryRouter initialEntries={['/watch_list']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId('watchlist-page')).toBeInTheDocument();
  });
});
