import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const rootURL = `https://api.themoviedb.org/3`;
const key = import.meta.env.VITE_API_KEY;

const CastTv = ({ id }) => {
  const [castData, setCastData] = useState('');

  const getCastData = async () => {
    try {
      const response = await axios(
        `${rootURL}/tv/${id}/credits?api_key=${key}`
      );
      const data = response.data;
      setCastData(data);
    } catch (error) {
      console.log(error);
    }
  };

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

  useState(() => {
    getCastData();
  }, []);

  return (
    <Wrapper className='section'>
      <div className='heading'>
        <h1>Casts</h1>
      </div>
      {castData && (
        <div className='container'>
          <Carousel responsive={responsive} infinite={true}>
            {castData.cast.slice(0, 18).map((item) => {
              return (
                <div className='wrapper' key={item.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                    alt='image'
                    className='img'
                  />
                  <p className='name'>{item.character}</p>
                  <p className='actor'>{item.name}</p>
                </div>
              );
            })}
          </Carousel>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .heading {
    margin: 0 16px;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .container {
    padding-bottom: 10rem;
  }

  .img {
    height: 150px;
    border-radius: 5px;
    margin-bottom: 8px;
  }
  .name {
    color: #757575;
    text-align: center;
  }
  .actor {
    text-align: center;
    color: #dadada;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .heading h1 {
    color: #ebebeb;
    font-size: 1.6rem;
    font-weight: 400;
  }

  @media screen and (min-width: 800px) {
    .container {
      max-width: 60vw;
      margin: 0 auto;
    }
    .heading {
      max-width: 60vw;
      margin-top: 3rem !important;
      margin: 3rem auto;
    }
    .heading h1 {
      margin-left: 16px;
    }
  }
`;

export default CastTv;
