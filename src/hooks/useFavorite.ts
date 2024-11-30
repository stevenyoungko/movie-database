import { useState, useEffect } from 'react';

export const useFavorite = (movieId: string | undefined) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.some((fav: number) => fav === Number(movieId)));
  }, [movieId]);

  const toggleFavorite = () => {
    if (!movieId) return;

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (isFavorite) {
      const newFavorites = favorites.filter(
        (fav: number) => fav !== Number(movieId)
      );
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(Number(movieId));
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  return { isFavorite, toggleFavorite };
};
