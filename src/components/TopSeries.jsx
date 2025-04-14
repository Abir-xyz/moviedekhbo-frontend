import styled from 'styled-components';
import { useDataContext } from '../context api/DataContext';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { RiStarSFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const TopSeries = () => {
  const { topSeries } = useDataContext();
  const moviePosterURL = `https://image.tmdb.org/t/p/w500`;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1500 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1351, min: 1350 },
      items: 4,
    },
    desktop1: {
      breakpoint: { max: 1350, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <Wrapper className='section'>
      <div className='trending-movie-container margin-wrapper'>
        <div className='heading'>
          <h1>Most Rated Series</h1>
        </div>
        <div className='section-wrapper'>
          {topSeries && (
            <Carousel
              responsive={responsive}
              autoPlay={true}
              autoPlaySpeed={2300}
              infinite={true}
            >
              {topSeries &&
                topSeries.results.map((movie) => {
                  const {
                    poster_path,
                    name,
                    first_air_date,
                    vote_average,
                    id,
                  } = movie;
                  return (
                    <Link to={`/tv/${id}`} className='link'>
                      <div className='movie-info-wrapper' key={movie.id}>
                        <div className='wrapper'>
                          <div className='img-container'>
                            <img
                              src={`${moviePosterURL}${poster_path}`}
                              alt='movie-poster'
                            />
                            <div className='flow-container'>
                              <p className='date'>
                                {first_air_date
                                  ? new Date(movie.first_air_date)
                                      .getFullYear()
                                      .toString()
                                  : 'N/A'}
                              </p>
                              <p className='stars'>
                                <span>
                                  <RiStarSFill />
                                </span>
                                <span className='rating'>
                                  {vote_average.toFixed(1)}
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className='info-container'>
                            <p className='title'>{name}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </Carousel>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .trending-movie-container {
    max-width: 90vw;
    margin-left: auto;
    margin-right: auto;
  }
  .heading h1 {
    font-size: 1.6rem;
    font-weight: 500;
    margin-left: 2.4rem;
    color: var(--primaryClr);
  }
  .heading {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
  .movie-info-wrapper {
    display: flex;
    justify-content: center;
  }
  .img-container img {
    height: 400px;
    border-radius: 5px;
  }
  .title {
    font-size: 1.2rem;
    font-weight: 400;
    max-width: 260px;
    text-align: center;
    color: var(--primaryClr);
  }
  .date,
  .stars {
    font-size: 1rem;
    color: #fff;
  }
  .img-container {
    position: relative;
    margin: 10px 0;
  }
  .flow-container {
    position: absolute;
    bottom: 2%;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 265px;
    padding: 0 5px;
  }
  .stars {
    display: flex;
    align-items: center;
    justify-content: center;
    .rating {
      margin-bottom: 2px;
      margin-left: 2px;
    }
  }

  @media screen and (max-width: 800px) {
    .margin-wrapper {
      padding-bottom: 4rem !important;
    }
  }
`;

export default TopSeries;
