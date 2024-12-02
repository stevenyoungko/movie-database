import { render, screen } from '@testing-library/react';
import ReviewSection from '../../../components/MovieDetail/ReviewSection';
import { mockMovieDetail } from '../../../mocks/movie';

describe('ReviewSection', () => {
  it('should render reviews correctly', () => {
    render(<ReviewSection reviews={mockMovieDetail.reviews.results} />);

    expect(screen.getByText('評論')).toBeInTheDocument();
    expect(screen.getByText('garethmb')).toBeInTheDocument();
    expect(
      screen.getByText(/When audiences last saw Eddie Brock/)
    ).toBeInTheDocument();
  });

  it('should show no reviews message when reviews array is empty', () => {
    render(<ReviewSection reviews={[]} />);

    expect(screen.getByText('目前沒有評論')).toBeInTheDocument();
  });
});
