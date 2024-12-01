import { render, screen } from '@testing-library/react';
import VideoSection from '../../../components/MovieDetail/VideoSection';
import type { Video } from '../../../types/movie';

describe('VideoSection', () => {
  it('renders official YouTube trailer when available', () => {
    const videos: Video[] = [
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'Official Trailer',
        key: 'test-key',
        site: 'YouTube',
        size: 1080,
        type: 'Trailer',
        official: true,
        published_at: '2023-01-01T00:00:00.000Z',
        id: 'test-id',
      },
    ];

    render(<VideoSection videos={videos} />);

    expect(screen.getByText('預告片')).toBeInTheDocument();
    expect(screen.getByTitle('Official Trailer')).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/test-key'
    );
  });

  it('returns null when no official YouTube trailer is available', () => {
    const videos: Video[] = [
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: 'Not Official Trailer',
        key: 'test-key',
        site: 'YouTube',
        size: 1080,
        type: 'Trailer',
        official: false,
        published_at: '2023-01-01T00:00:00.000Z',
        id: 'test-id',
      },
    ];

    const { container } = render(<VideoSection videos={videos} />);
    expect(container.firstChild).toBeNull();
  });

  it('returns null when videos array is empty', () => {
    const { container } = render(<VideoSection videos={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
