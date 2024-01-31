import { render, screen } from '@testing-library/react';
import CharacterCard from './CharacterCard.tsx';

describe('CharacterCard', () => {
  const mockCharacter = {
    name: 'Rick Sanchez',
    species: 'Human',
    status: 'Alive',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    location: {
      name: 'Earth (Replacement Dimension)',
    },
  };

  it('renders correctly with all character details', () => {
    render(<CharacterCard character={mockCharacter} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', mockCharacter.image);
    expect(screen.getByRole('img')).toHaveAttribute('alt', `Character ${mockCharacter.name}`);
    expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
    expect(screen.getByText(`${mockCharacter.species}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockCharacter.status}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockCharacter.gender}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockCharacter.location.name}`)).toBeInTheDocument();
  });

  it('does not display location if not provided', () => {
    const characterWithoutLocation = { ...mockCharacter, location: null };
    render(<CharacterCard character={characterWithoutLocation} />);

    expect(screen.queryByText(/Location:/)).not.toBeInTheDocument();
  });
});
