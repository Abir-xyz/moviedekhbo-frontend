import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { MdOutlineMovie } from 'react-icons/md';

const rootURL = `https://api.themoviedb.org/3`;
const key = import.meta.env.VITE_API_KEY;

const EpList = ({ id, number, setEpNum }) => {
  const [epData, setEpData] = useState('');
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  const handleOnEpClick = (item) => {
    setEpNum(item);
  };

  // get episodes
  const getEp = async () => {
    try {
      const response = await axios(
        `${rootURL}/tv/${id}/season/${number}?api_key=${key}`
      );
      const data = response.data;
      setEpData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEp();
  }, []);

  return (
    <Wrapper className='section'>
      <div className='ep-wrapper'>
        <div className='heading'>
          <p>Season {number} Episodes</p>
        </div>
        <div className='ep-links-wrapper'>
          {epData && (
            <div className='list-wrapper'>
              {epData.episodes.map((item) => {
                return (
                  <div className='list' key={item.id}>
                    <button
                      className='ep-name'
                      onClick={() => {
                        handleOnEpClick(item.episode_number);
                      }}
                    >
                      <span className='icon'>
                        <MdOutlineMovie />
                      </span>
                      <span>
                        Episode {item.episode_number}.{item.name}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .ep-wrapper {
    color: #ebebeb;
    margin: 0 16px;
    padding-bottom: 6rem !important;
  }

  .heading {
    margin-top: 3rem;
  }

  .heading p {
    font-size: 1.5rem;
    font-weight: 400;
  }

  .list {
    margin: 10px 0;
  }

  .ep-links-wrapper {
    margin-top: 2rem;
  }
  .ep-name {
    background: none;
    border: none;
    color: #b19c70;
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .icon {
    margin-right: 5px;
  }

  @media screen and (min-width: 800px) {
    .ep-wrapper {
      max-width: 60vw;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 800px) {
    .heading p {
      font-size: 1.3rem;
    }
    .ep-name {
      margin: 1rem 0;
    }
  }
`;

export default EpList;
