import styled from 'styled-components';
import { useDataContext } from '../context api/DataContext';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { LiaStarSolid } from 'react-icons/lia';
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
          <span className='icon'>
            <LiaStarSolid />
          </span>
          <span className='name'>Most Rated Series</span>
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
                    <Link to={`/tv/${id}`} className='link' key={movie.id}>
                      <div className='movie-info-wrapper'>
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
                            <div className='info-container'>
                              <p className='title'>{name}</p>
                            </div>
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
  .heading {
    display: flex;
  }
  .heading .icon {
    font-size: 1.7rem;
    margin-left: 2.4rem;
    margin-right: 6px;
    color: var(--accentClr);
  }
  .heading .name {
    color: var(--primaryClr);
    font-size: 1.3rem;
  }
  .heading {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
  .movie-info-wrapper {
    display: flex;
    justify-content: center;
  }

  .wrapper {
    overflow: hidden;
    display: inline-block;
    border-radius: 5px;
  }

  .wrapper:hover img {
    scale: 1.1;
  }

  .img-container img {
    display: block;
    position: relative;
    height: 400px;
    border-radius: 5px;
    -webkit-mask-image: linear-gradient(to bottom, black, transparent);
    mask-image: linear-gradient(to bottom, black, transparent);
    transition: all 0.3s ease-in-out;
  }
  .info-container {
    position: absolute;
    bottom: 5%;
    left: 2%;
  }
  .title {
    font-size: 1rem;
    font-weight: 400;
    max-width: 260px;
    text-align: center;
    color: var(--primaryClr);
  }
  .date,
  .stars {
    font-size: 1rem;
  }
  .date {
    background-color: #00000085;
    border-radius: 10rem;
    padding: 0px 3px;
    color: #ffffff;
  }
  .img-container {
    position: relative;
    margin: 10px 0;
  }
  .flow-container {
    position: absolute;
    top: 1%;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 265px;
    padding: 0 5px;
  }
  .stars {
    color: #ffa600;
    background-color: #03030375;
    border-radius: 10rem;
    padding: 0px 3px;
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
