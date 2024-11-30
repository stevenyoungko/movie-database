import { useState, useEffect } from 'react';

export const useFavorite = (
  movieId: string | undefined,
  movieTitle: string | undefined
) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(
      favorites.some((fav: { id: number }) => fav.id === Number(movieId))
    );
  }, [movieId]);

  const toggleFavorite = () => {
    if (!movieId || !movieTitle) return;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (isFavorite) {
      const newFavorites = favorites.filter(
        (fav: { id: number }) => fav.id !== Number(movieId)
      );

      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      favorites.push({
        id: Number(movieId),
        title: movieTitle,
      });
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  return { isFavorite, toggleFavorite };
};
