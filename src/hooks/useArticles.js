import { useEffect, useState } from 'react';
import { justBeerApi } from '../api/justBeerApi';
import { data } from '../api/data';

const ENDPOINT = 'articles';

export const useArticles = () => {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState({});

  const loadArticles = async () => {
    try {
      const resp = await justBeerApi.get(ENDPOINT);
      setArticles(resp.data.payload);
    } catch (error) {
      setArticles(data.payload);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadArticles();
  }, []);

  return {
    isLoading,
    articles,
  };
};
