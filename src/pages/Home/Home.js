import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import api from 'services/movies-api';

import { Loader } from 'components/Loader/Loader';

import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await api.fetchPopularMovies();

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
  }, []);

  useEffect(() => {
    if (error === null) return;
    toast.error('some error');
  }, [error]);

  return (
    <>
      <section>
        <h1>Trending movies</h1>
        <MoviesList movies={movies} />
      </section>

      {isLoading && <Loader />}
      <Toaster />
    </>
  );
};

export default Home;
