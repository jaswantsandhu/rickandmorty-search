import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import debounce from "lodash.debounce";
import { CharactersResponse } from "../models/character";
import { CHARACTER_URL } from "../constants/URL";

interface CharactersContextType {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
  charactersData: CharactersResponse | null;
  isLoading: boolean;
  error: { message: string } | null;
}

const CharactersContext = createContext<CharactersContextType | undefined>(
  undefined
);

export const useCharacters = () => {
  const context = useContext(CharactersContext);
  if (!context) {
    throw new Error("useCharacters must be used within a CharactersProvider");
  }
  return context;
};

interface CharactersProviderProps {
  children: ReactNode;
}

export const CharactersProvider = ({ children }: CharactersProviderProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [charactersData, setCharactersData] =
    useState<CharactersResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string } | null>(null);

  const fetchCharacters = async (name: string, page: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${CHARACTER_URL}?name=${name}&page=${page}`
      );
      if (!response.ok) {
        throw new Error(`API responded with status ${response.status}`);
      }
      const data: CharactersResponse = await response.json();
      setCharactersData(data);
      setError(null);
    } catch (error) {
      setError({
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
      setCharactersData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let isSubscribed = true;
    const debouncedFetchCharacters = debounce(fetchCharacters, 300);
    const trimmedSearchTerm = searchTerm.trim();

    if (trimmedSearchTerm && isSubscribed) {
      debouncedFetchCharacters(trimmedSearchTerm, pageNumber);
    }

    return () => {
      isSubscribed = false;
      debouncedFetchCharacters.cancel();
    };
  }, [searchTerm, pageNumber]);

  const value = {
    searchTerm,
    setSearchTerm,
    pageNumber,
    setPageNumber,
    charactersData,
    isLoading,
    error,
  };

  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  );
};
