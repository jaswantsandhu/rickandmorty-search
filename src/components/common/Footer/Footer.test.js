/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer', () => {
  const currentYear = new Date().getFullYear();
  
  it('renders the current year and API credit', () => {
    render(<Footer />);
    expect(screen.getByText(`© ${currentYear}`)).toBeInTheDocument();
    expect(screen.getByText('The Rick and Morty API')).toBeInTheDocument();
    expect(screen.getByText('The Rick and Morty API').closest('a')).toHaveAttribute('href', 'https://rickandmortyapi.com');
  });
});
