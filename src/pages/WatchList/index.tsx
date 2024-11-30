import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Movie } from '../../types/movie';

const WatchList = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <h1>我的待看清單</h1>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>你的待看清單是空的。</p>
      )}
    </div>
  );
};

export default WatchList;
