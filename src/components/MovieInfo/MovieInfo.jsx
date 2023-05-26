import api from 'services/movies-api';

export const MovieInfo = ({ movieInfo }) => {
  const { title, release_date, vote_average, overview, genres, poster_path } =
    movieInfo;

  const date = new Date(release_date).getFullYear();
  const vote = Math.round(vote_average * 10);

  const normalizedGenres =
    genres.length > 0 ? genres.map(({ name }) => name).join(', ') : 'No info';

  const posterUrl = api.getPoster(poster_path);

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <img src={posterUrl} alt={title} />
      </div>
      <div>
        <h2>
          {title} ({date})
        </h2>
        <p>User score: {vote}</p>
        <p>Overview</p>
        <br />
        <p>{overview}</p>
        <p>Genres</p>
        <br />
        <p>{normalizedGenres}</p>
      </div>
    </div>
  );
};
