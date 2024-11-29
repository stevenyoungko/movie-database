import type { MovieFullDetail } from '../../types/movie';

const InfoSection = ({
  movie,
  director,
}: {
  movie: MovieFullDetail;
  director: { name: string } | undefined;
}) => (
  <div>
    <h1>{movie.title}</h1>
    <p>
      <strong>上映日期：</strong>
      {movie.release_date}
    </p>
    <p>
      <strong>片長：</strong>
      {movie.runtime} 分鐘
    </p>
    <p>
      <strong>類型：</strong>
      {movie.genres.map((genre) => genre.name).join(', ')}
    </p>
    <p>
      <strong>導演：</strong>
      {director?.name || '未知'}
    </p>
    <p>
      <strong>劇情簡介：</strong>
      {movie.overview}
    </p>
  </div>
);

export default InfoSection;
