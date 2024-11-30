import { useState } from 'react';

export const useFetchData = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  return {
    data,
    setData,
    error,
    setError,
    loading,
    setLoading,
  };
};
