import styled from 'styled-components';
import { useDataContext } from '../context api/DataContext';
import { Link } from 'react-router';
import { RiStarSFill } from 'react-icons/ri';

const SearchedResults = () => {
  const { results } = useDataContext();
  const moviePosterURL = `https://image.tmdb.org/t/p/w500`;

  {
    results && console.log(results.results);
  }

  return (
    <Wrapper className='section'>
      <div className='result-container'>
        <div className='main'>
          {results &&
            results.results.map((movie) => {
              const {
                poster_path,
                name,
                title,
                first_air_date,
                vote_average,
                id,
                release_date,
                media_type,
              } = movie;
              return (
                <Link to={`/${media_type}/${id}`} className='link' key={id}>
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
                              : new Date(release_date).getFullYear().toString()}
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
                          <p className='title'>{name ? name : title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .result-container {
    color: #ebebeb;
  }

  .movie-info-wrapper {
    display: flex;
    justify-content: center;
  }

  .main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
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
    height: 400px;
    width: 100%;
    border-radius: 5px;
    /* opacity: 0.8; */
    -webkit-mask-image: linear-gradient(to bottom, black, transparent);
    mask-image: linear-gradient(to bottom, black, transparent);
    position: relative;
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
    .main {
      align-items: center;
      justify-content: center;
    }
  }
`;

export default SearchedResults;
