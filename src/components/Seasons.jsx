import styled from 'styled-components';
import { Link } from 'react-router';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Seasons = ({ id, details }) => {
  const { seasons } = details;

  const posterURL = `https://image.tmdb.org/t/p/w500`;

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
      items: 4,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 3,
    },
  };

  return (
    <Wrapper className='section'>
      <div className='container'>
        <div className='heading'>
          <p>All Seasons</p>
        </div>
        {seasons && (
          <div className='main-wrapper'>
            <Carousel responsive={responsive} infinite={true}>
              {seasons.map((item) => {
                const { poster_path, season_number } = item;
                return (
                  <div className='wrapper'>
                    <Link
                      to={`/tv/${id}/season/${season_number}`}
                      className='link'
                      key={item.id}
                    >
                      <img
                        src={`${posterURL}/${poster_path}`}
                        alt='poster'
                        className='poster'
                      />
                      <p className='season-count'>Season{season_number}</p>
                    </Link>
                  </div>
                );
              })}
            </Carousel>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    color: #ebebeb;
    margin: 0 16px;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .heading {
    margin-bottom: 2rem;
  }
  .heading p {
    font-size: 1.5rem;
    font-weight: 400;
  }

  .poster {
    height: 200px;
    border-radius: 5px;
  }

  .link .season-count {
    color: #ebebeb;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .main-wrapper div ul li {
    padding: 0 12px !important;
  }

  @media screen and (min-width: 800px) {
    .container {
      max-width: 60vw;
      margin: 0 auto;
    }
    .heading {
      margin-top: 2rem;
    }
  }
  @media screen and (max-width: 600px) {
    .heading p {
      font-size: 1.2rem;
    }
  }
`;

export default Seasons;
