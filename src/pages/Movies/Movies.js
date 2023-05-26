import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { SearchBar } from 'components/Searchbar/SearchBar';
import { useSearchParams } from 'react-router-dom';
import api from 'services/movies-api';

import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = searchParams.get('q');

  useEffect(() => {
    if (query === null) return;
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await api.fetchSearchMovies(query);

        const movies = data.results.map(({ id, original_title, title }) => {
          return { id, original_title, title };
        });

        setMovies(movies);
      } catch (error) {
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };

    asyncWrapper();
  }, [query]);

  useEffect(() => {
    if (error === null) return;
    toast.error('some error');
  }, [error]);

  return (
    <>
      <section>
        <div>
          <h1>Search movies</h1>
          {/* FORM */}
          <SearchBar />
          {movies.length > 0 && <MoviesList movies={movies} />}
        </div>
      </section>

      {isLoading && <Loader />}
      <Toaster />
    </>
  );
};

export default Movies;
