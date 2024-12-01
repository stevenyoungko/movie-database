import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ErrorFallback from '../../../components/ErrorFallback';

describe('ErrorFallback', () => {
  const mockError = new Error('Test error message');

  it('should render error message correctly', () => {
    render(<ErrorFallback error={mockError} />);

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('😢 發生錯誤')).toBeInTheDocument();
    expect(screen.getByText('抱歉，出現了一些問題：')).toBeInTheDocument();
    expect(screen.getByText('Test error message')).toBeInTheDocument();
  });

  it('should reload page when retry button is clicked', () => {
    const mockReload = jest.fn();
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { reload: mockReload },
    });
    render(<ErrorFallback error={mockError} />);
    const retryButton = screen.getByText('重試');
    userEvent.click(retryButton);

    expect(mockReload).toHaveBeenCalledTimes(1);
  });
});
