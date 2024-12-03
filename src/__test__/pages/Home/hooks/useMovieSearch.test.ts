import { renderHook, act } from '@testing-library/react';
import { useMovieSearch } from '../../../../pages/Home/hooks/useMovieSearch';
import { getSearchMovie } from '../../../../api/movies';
import { mockMovies } from '../../../../mocks/movie';

jest.mock('../../../../api/movies');
const mockGetSearchMovie = getSearchMovie as jest.Mock;

describe('useMovieSearch', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockSearchResponse = {
    results: mockMovies,
    total_pages: 2,
  };

  it('should fetch movies successfully on first page', async () => {
    mockGetSearchMovie.mockResolvedValueOnce(mockSearchResponse);

    const { result } = renderHook(() => useMovieSearch());

    await act(() => {
      return result.current.fetchMovies('venom', 1);
    });

    expect(result.current.movies).toEqual(mockMovies);
    expect(result.current.hasMore).toBe(true);
    expect(result.current.error).toBeNull();
  });

  it('should append movies when fetching next page', async () => {
    const page1Response = {
      results: [mockMovies[0]],
      total_pages: 2,
    };
    const page2Response = {
      results: [mockMovies[1]],
      total_pages: 2,
    };

    mockGetSearchMovie
      .mockResolvedValueOnce(page1Response)
      .mockResolvedValueOnce(page2Response);

    const { result } = renderHook(() => useMovieSearch());

    await act(() => {
      return result.current.fetchMovies('venom', 1);
    });

    await act(() => {
      return result.current.fetchMovies('venom', 2);
    });

    expect(result.current.movies).toEqual(mockMovies);
    expect(result.current.hasMore).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should handle API error', async () => {
    const mockError = new Error('API Error');
    mockGetSearchMovie.mockRejectedValueOnce(mockError);

    const { result } = renderHook(() => useMovieSearch());

    await act(async () => {
      try {
        await result.current.fetchMovies('venom', 1);
      } catch (e) {
        console.log('e', e);
      }
    });

    expect(result.current.movies).toEqual([]);
    expect(result.current.error).toEqual(mockError);
    expect(result.current.hasMore).toBe(false);
  });
});
