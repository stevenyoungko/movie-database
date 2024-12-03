import { renderHook, waitFor } from '@testing-library/react';
import { useMovieDetail } from '../../../../pages/Detail/hooks/useMovieDetail';
import { getMovieDetails } from '../../../../api/movies';
import { adaptMovieDetail } from '../../../../utils/adaptMovieDetail';
import { mockMovieDetail } from '../../../../mocks/movie';

jest.mock('../../../../api/movies');
jest.mock('../../../../utils/adaptMovieDetail');

const mockGetMovieDetails = getMovieDetails as jest.Mock;
const mockAdaptMovieDetail = adaptMovieDetail as jest.Mock;

describe('useMovieDetail', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch and return movie details successfully', async () => {
    mockGetMovieDetails.mockResolvedValueOnce(mockMovieDetail);
    mockAdaptMovieDetail.mockReturnValueOnce(mockMovieDetail);

    const { result } = renderHook(() => useMovieDetail('580489'));

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);
    expect(result.current.movie).toBe(null);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.movie).toEqual(mockMovieDetail);
    expect(result.current.error).toBe(null);
    expect(mockGetMovieDetails).toHaveBeenCalledWith('580489');
    expect(mockAdaptMovieDetail).toHaveBeenCalledWith(mockMovieDetail);
  });

  it('should handle error when fetching movie details fails', async () => {
    const mockError = new Error('Failed to fetch');
    mockGetMovieDetails.mockRejectedValueOnce(mockError);

    const { result } = renderHook(() => useMovieDetail('580489'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.movie).toBe(null);
    expect(result.current.error).toEqual(mockError);
    expect(mockGetMovieDetails).toHaveBeenCalledWith('580489');
    expect(mockAdaptMovieDetail).not.toHaveBeenCalled();
  });
});
