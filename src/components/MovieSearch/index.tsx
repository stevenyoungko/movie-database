import { StyledSearchForm } from './styled';

interface MovieSearchProps {
  onSearch: (query: string) => void;
  query: string;
  setQuery: (query: string) => void;
}

const MovieSearch = ({ onSearch, query, setQuery }: MovieSearchProps) => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <StyledSearchForm onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="搜尋電影..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">搜尋</button>
    </StyledSearchForm>
  );
};

export default MovieSearch;
