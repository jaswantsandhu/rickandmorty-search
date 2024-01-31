/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  it('renders the header with navigation links', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    expect(screen.getByText('Rick and Morty search')).toBeInTheDocument();
    expect(screen.getByText('Rick and Morty search').closest('a')).toHaveAttribute('href', '/');

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');

    const charactersLink = screen.getByText('Characters');
    expect(charactersLink).toBeInTheDocument();
    expect(charactersLink).toHaveAttribute('href', '/characters');
  });
});
