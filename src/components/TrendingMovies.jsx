import styled from 'styled-components';
import { useDataContext } from '../context api/DataContext';

const TrendingMovies = () => {
  const { trendingMovies } = useDataContext();

  const moviePosterURL = `https://image.tmdb.org/t/p/w500`;
  console.log(trendingMovies.results);

  return (
    <Wrapper className='section'>
      <div className='trending-movie-container'>
        <div className='section-wrapper'>
          {trendingMovies &&
            trendingMovies.results.map((movie) => {
              const { poster_path, title, release_date, vote_average } = movie;

              return (
                <div className='movie-info-wrapper' key={movie.id}>
                  <div className='wrapper'>
                    <div className='img-container'>
                      <img
                        src={`${moviePosterURL}${poster_path}`}
                        alt='movie-poster'
                      />
                      <div className='info-container'>
                        <p className='title'>{title}</p>
                        <div className='flow-container'>
                          <p className='date'>
                            {release_date
                              ? new Date(movie.release_date)
                                  .getFullYear()
                                  .toString()
                              : 'N/A'}
                          </p>
                          <p className='stars'>{vote_average.toFixed(1)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default TrendingMovies;
