import styled from 'styled-components';
import { LiaStarSolid } from 'react-icons/lia';

function convertRuntime(runtimeInMinutes) {
  const hours = Math.floor(runtimeInMinutes / 60);
  const minutes = runtimeInMinutes % 60;
  return `${hours}h ${minutes}m`;
}

const Details = ({ details }) => {
  const { release_date, runtime, overview, vote_average } = details;

  return (
    <Wrapper className='section'>
      <div className='container'>
        <div className='title-wrapper'>
          {details && (
            <div className='basic-info-wrapper'>
              <p className='title'>{details.title}</p>
              <p className='sub-info'>
                <span className='year'>
                  {release_date
                    ? new Date(release_date).getFullYear().toString()
                    : 'N/A'}
                </span>
                <span className='runtime'> {convertRuntime(runtime)}</span>
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
    max-width: 90vw;
    margin: 0 auto;
  }
  .title-wrapper {
    margin-bottom: 3rem;
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
    color: yellow;
  }
  .desc {
    color: #6e6e6e;
    font-size: 1.1rem;
  }
  .rating {
    margin-left: 1rem;
    color: #11f711;
    display: flex;
    align-items: center;
  }
  .year {
    color: #e98f53;
  }
`;

export default Details;
