import { useCharacters } from "../../../context/characters";

const Search = () => {
  const {
    searchTerm,
    setSearchTerm,
    setPageNumber,
    isLoading,
    charactersData,
  } = useCharacters();

  const { count } = charactersData?.info ?? {};

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
    setPageNumber(1);
  };

  return (
    <div className="p-5 container mx-auto flex relative">
      <input
        className="border-cyan-500 border p-5 w-full rounded-lg text-cyan-400 text-xl font-bold"
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for Rick and Morty across the multi-universe."
      />
      {count && !isLoading && (
        <div className="absolute top-10 right-10">Found {count} results</div>
      )}
      {isLoading && <div className="absolute top-10 right-10">Loading...</div>}
    </div>
  );
};

export default Search;
