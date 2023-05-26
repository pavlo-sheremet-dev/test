import { useEffect, useRef, useState } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
// import style from './movieDetails.module.scss';
import api from 'services/movies-api';

import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { NavLink } from 'components/Layout/Layout.styled';

const MoviesDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  const goBackLink = useRef(location.state?.from ?? '/');

  const { movieId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await api.fetchFullDataMovie(movieId);

        const {
          title,
          release_date,
          vote_average,
          overview,
          genres,
          poster_path,
        } = data;

        setMovieInfo({
          title,
          release_date,
          vote_average,
          overview,
          genres,
          poster_path,
        });
      } catch (error) {
        console.log(error);
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
      <Link to={goBackLink.current}>Go back</Link>
      {movieInfo && <MovieInfo movieInfo={movieInfo} />}
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />

      {isLoading && <Loader />}
      <Toaster />
    </>
  );
};

export default MoviesDetails;
