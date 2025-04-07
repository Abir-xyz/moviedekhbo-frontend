import { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

const rootURL = `https://api.themoviedb.org/3`;
const key = import.meta.env.VITE_API_KEY;

export const DataProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState('');

  // get trendingMovies
  const getTrendingMovies = async () => {
    setIsLoading(true);
    try {
      const response = await axios(
        `${rootURL}/trending/movie/day?api_key=${key}`
      );
      const data = await response.data;
      setTrendingMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <DataContext.Provider value={{ trendingMovies }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
