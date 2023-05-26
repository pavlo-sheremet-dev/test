import { useSearchParams } from 'react-router-dom';

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.query.value.toLowerCase().trim();

    if (!value) return;

    setSearchParams({ q: value });

    e.target.reset();
  };

  const query = searchParams.get('q');

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="query" defaultChecked={query} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
