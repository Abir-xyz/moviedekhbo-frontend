import { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

const rootURL = `https://api.themoviedb.org/3`;
const key = import.meta.env.VITE_API_KEY;

export const DataProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState('');
  const [trendingSeries, setTrendingSeries] = useState('');
  const [topMovies, setTopMovies] = useState('');
  const [topSeries, setTopSeries] = useState('');
  const [results, setResults] = useState('');

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

  // get trendingSeries
  const getTrendingSeries = async () => {
    setIsLoading(true);
    try {
      const response = await axios(`${rootURL}/trending/tv/day?api_key=${key}`);
      const data = await response.data;
      setTrendingSeries(data);
    } catch (error) {
      console.log(error);
    }
  };

  // get top movies
  const getTopMovies = async () => {
    setIsLoading(true);
    try {
      const response = await axios(`${rootURL}/movie/top_rated?api_key=${key}`);
      const data = await response.data;
      setTopMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  // get top series
  const getTopSeries = async () => {
    setIsLoading(true);
    try {
      const response = await axios(`${rootURL}/tv/top_rated?api_key=${key}`);
      const data = await response.data;
      setTopSeries(data);
    } catch (error) {
      console.log(error);
    }
  };

  // get results
  const getSearchedValue = async (value) => {
    try {
      const response = await axios(
        `${rootURL}/search/multi?api_key=${key}&query=${value}`
      );
      const data = response.data;
      // console.log(data);
      setResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrendingMovies();
    getTrendingSeries();
    getTopMovies();
    getTopSeries();
  }, []);

  return (
    <DataContext.Provider
      value={{
        trendingMovies,
        trendingSeries,
        topMovies,
        topSeries,
        getSearchedValue,
        results,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
