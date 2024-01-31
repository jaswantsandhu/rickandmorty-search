import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorNotification from './Error'; 
import * as CharactersContext from '../../../context/characters';

jest.mock('../../../context/characters', () => ({
  useCharacters: jest.fn(),
}));

describe('ErrorNotification', () => {
  it('renders correctly when there is an error', () => {
    CharactersContext.useCharacters.mockImplementation(() => ({
      error: { message: 'Test Error' },
    }));

    render(<ErrorNotification />);
    expect(screen.getByRole('alert')).toHaveTextContent('Test Error');
  });

  it('does not render when there is no error', () => {
    CharactersContext.useCharacters.mockImplementation(() => ({
      error: null,
    }));

    const { container } = render(<ErrorNotification />);
    expect(container).toBeEmptyDOMElement();
  });
});
