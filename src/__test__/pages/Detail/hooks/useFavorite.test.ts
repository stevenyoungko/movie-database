import { renderHook, act } from '@testing-library/react';
import { useFavorite } from '../../../../pages/Detail/hooks/useFavorite';

describe('useFavorite', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with false when movie is not in favorites', () => {
    const { result } = renderHook(() => useFavorite('1', 'Test Movie'));

    expect(result.current.isFavorite).toBe(false);
  });

  it('should initialize with true when movie is in favorites', () => {
    localStorage.setItem(
      'favorites',
      JSON.stringify([{ id: 1, title: 'Test Movie' }])
    );

    const { result } = renderHook(() => useFavorite('1', 'Test Movie'));

    expect(result.current.isFavorite).toBe(true);
  });

  it('should toggle favorite status when toggleFavorite is called', () => {
    const { result } = renderHook(() => useFavorite('1', 'Test Movie'));

    act(() => {
      result.current.toggleFavorite();
    });

    expect(result.current.isFavorite).toBe(true);
    expect(JSON.parse(localStorage.getItem('favorites') || '[]')).toEqual([
      { id: 1, title: 'Test Movie' },
    ]);

    act(() => {
      result.current.toggleFavorite();
    });

    expect(result.current.isFavorite).toBe(false);
    expect(JSON.parse(localStorage.getItem('favorites') || '[]')).toEqual([]);
  });

  it('should not toggle when movieId or movieTitle is undefined', () => {
    const { result } = renderHook(() => useFavorite(undefined, 'Test Movie'));

    act(() => {
      result.current.toggleFavorite();
    });

    expect(result.current.isFavorite).toBe(false);
    expect(JSON.parse(localStorage.getItem('favorites') || '[]')).toEqual([]);
  });
});
