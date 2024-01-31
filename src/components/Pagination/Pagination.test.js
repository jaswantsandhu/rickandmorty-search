import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from './Pagination';

describe('Pagination', () => {
  const mockOnPageChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders pagination buttons correctly', () => {
    const totalPages = 5;
    const currentPage = 3;
    render(<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={mockOnPageChange} />);

    const prevButton = screen.getByText('Previous');
    const nextButton = screen.getByText('Next');
    expect(prevButton).not.toBeDisabled();
    expect(nextButton).not.toBeDisabled();

    const pageButtons = screen.getAllByRole('button');
    expect(pageButtons).toHaveLength(totalPages + 2);
    expect(screen.getByText(currentPage)).toHaveClass('bg-green-200');
  });

  it('disables the Previous button on the first page', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={mockOnPageChange} />);
    expect(screen.getByText('Previous')).toBeDisabled();
  });

  it('disables the Next button on the last page', () => {
    render(<Pagination currentPage={5} totalPages={5} onPageChange={mockOnPageChange} />);
    expect(screen.getByText('Next')).toBeDisabled();
  });

  it('calls onPageChange with the correct page number when a page button is clicked', () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={mockOnPageChange} />);
    fireEvent.click(screen.getByText('4'));
    expect(mockOnPageChange).toHaveBeenCalledWith(4);
  });

  it('calls onPageChange with next page when Next is clicked', () => {
    render(<Pagination currentPage={2} totalPages={5} onPageChange={mockOnPageChange} />);
    fireEvent.click(screen.getByText('Next'));
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });

  it('calls onPageChange with previous page when Previous is clicked', () => {
    render(<Pagination currentPage={3} totalPages={5} onPageChange={mockOnPageChange} />);
    fireEvent.click(screen.getByText('Previous'));
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });
});
