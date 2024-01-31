import { render, act, screen } from "@testing-library/react";
import { CharactersProvider, useCharacters } from "./characters";

global.fetch = jest.fn();

const mockCharactersResponse = {
  results: [],
  info: {
    count: 0,
    pages: 1,
  },
};

const MockConsumerComponent = () => {
  const { searchTerm, setSearchTerm, charactersData } = useCharacters();

  return (
    <div>
      <p>Search Term: {searchTerm}</p>
      <button onClick={() => setSearchTerm("Rick")}>Set Search Term</button>
      {charactersData && <p>Characters Loaded</p>}
    </div>
  );
};

describe("CharactersContext", () => {
  beforeEach(() => {
    fetch.mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            results: [],
            info: { count: 0, pages: 1 },
          }),
      })
    );
  });

  it("provides context values to consumer components", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockCharactersResponse),
      })
    );

    await act(async () => {
      render(
        <CharactersProvider>
          <MockConsumerComponent />
        </CharactersProvider>
      );
    });

    expect(screen.getByText("Search Term:")).toBeInTheDocument();

    await act(async () => {
      screen.getByText("Set Search Term").click();
    });

    expect(screen.getByText("Search Term: Rick")).toBeInTheDocument();
  });
});
