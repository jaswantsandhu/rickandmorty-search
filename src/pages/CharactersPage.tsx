import CharacterCard from "../components/CharacterCard/CharacterCard";
import List from "../components/common/List/List";
import Pagination from "../components/Pagination/Pagination";
import Search from "../components/common/Search/Search";
import { useCharacters } from "../context/characters";

function CharactersPage() {
  const { charactersData, pageNumber, setPageNumber } = useCharacters();
  const { pages = 0 } = charactersData?.info || {};

  return (
    <div style={{ minHeight: "calc(100vh - 235px)" }}>
      <Search />
      {charactersData?.results && (
        <div className="container mx-auto px-4">
          <List
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            list={charactersData?.results}
            item={({ item, i }) => {
              return <CharacterCard character={item} />;
            }}
          ></List>
          {pages ? (
            <Pagination
              currentPage={pageNumber}
              totalPages={pages}
              onPageChange={setPageNumber}
            />
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}

export default CharactersPage;
