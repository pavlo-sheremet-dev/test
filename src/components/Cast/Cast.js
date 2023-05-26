import api from 'services/movies-api';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await api.fetchCreditsMovies(movieId);

        const normalizedCast = data.cast
          .map(({ id, name, profile_path }) => ({
            id,
            name,
            poster: api.getPoster(profile_path),
          }))
          .slice(0, 10);

        setActors(normalizedCast);
      } catch (error) {
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };

    asyncWrapper();
  }, [movieId]);

  useEffect(() => {
    if (error === null) return;
    toast.error('some error');
  }, [error]);

  return (
    <>
      {actors.length > 0 ? (
        <ul>
          {actors.map(({ id, name, poster }) => (
            <li key={id}>
              <img src={poster} alt={name} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No actors</p>
      )}
      {isLoading && <Loader />}
      <Toaster />
    </>
  );
};

export default Cast;
