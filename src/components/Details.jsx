import styled from 'styled-components';
import { LiaStarSolid } from 'react-icons/lia';

function convertRuntime(runtimeInMinutes) {
  const hours = Math.floor(runtimeInMinutes / 60);
  const minutes = runtimeInMinutes % 60;
  return `${hours}h ${minutes}m`;
}

const Details = ({ details }) => {
  const {
    release_date,
    runtime,
    overview,
    vote_average,
    first_air_date,
    last_air_date,
    number_of_seasons,
  } = details;

  return (
    <Wrapper className='section'>
      <div className='container'>
        <div className='title-wrapper'>
          {details && (
            <div className='basic-info-wrapper'>
              <p className='title'>{details.title || details.name}</p>
              <p className='sub-info'>
                <span className='year'>
                  {release_date &&
                    new Date(release_date).getFullYear().toString()}
                  {first_air_date &&
                    new Date(first_air_date).getFullYear().toString()}
                  {last_air_date && '-'}
                  {last_air_date &&
                    new Date(last_air_date).getFullYear().toString()}
                </span>
                <span className='runtime'>
                  {runtime ? convertRuntime(runtime) : ''}
                  {number_of_seasons ? `Seasons: ${number_of_seasons}` : ''}
                </span>
                <span className='rating'>
                  <LiaStarSolid /> {vote_average.toFixed(1)}
                </span>
              </p>
            </div>
          )}
        </div>
        <div className='more-info'>
          {details && (
            <div className='more-info-wrapper'>
              <p className='desc'>{overview}</p>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    color: #ebebeb;
    background: rgba(39, 39, 39, 0.171);
    backdrop-filter: blur(9.1px);
    -webkit-backdrop-filter: blur(9.1px);
    border: 1px solid rgba(105, 105, 105, 0.25);
    box-shadow: rgba(17, 17, 17, 0.2) 0px 2px 8px 0px;
    padding: 20px;
    border-radius: 1rem;
    margin: 0 10px;
    margin-top: 1rem;
  }
  .title-wrapper {
    margin-bottom: 2rem;
    margin-top: 1rem;
    .title {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.1rem;
    }
    .sub-info {
      color: #9e9e9e;
      display: flex;
      align-items: center;
    }
  }
  .basic-info-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .runtime {
    margin-left: 1rem;
    /* color: yellow; */
  }
  .desc {
    color: #7e7e7e;
    font-size: 1.1rem;
  }
  .rating {
    margin-left: 1rem;
    /* color: #11f711; */
    display: flex;
    align-items: center;
  }
  .year {
    /* color: #e98f53; */
  }

  @media screen and (max-width: 600px) {
    .title {
      font-size: 1.2rem !important;
    }
    .year,
    .runtime,
    .rating {
      font-size: 1rem !important;
    }
    .desc {
      font-size: 1.1rem !important;
    }
  }

  @media screen and (min-width: 800px) {
    .container {
      max-width: 60vw;
      margin: 0 auto;
      margin-top: 2rem;
    }
  }
`;

export default Details;
