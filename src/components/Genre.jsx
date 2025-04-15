import styled from 'styled-components';
import { CiHeart } from 'react-icons/ci';

const Genre = ({ data }) => {
  const { genres } = data;

  return (
    <Wrapper className='section'>
      <main>
        <div className='container'>
          {genres ? (
            genres.slice(0, 4).map((item) => {
              return (
                <div className='item-wrapper' key={item.id}>
                  <p>{item.name}</p>
                </div>
              );
            })
          ) : (
            <p>No category to show:(</p>
          )}
        </div>
        <div className='watchList-wrapper'>
          <button>
            <CiHeart />
          </button>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    /* color: #ebebeb; */
    color: #ffd68f;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: rgba(39, 39, 39, 0.171);
    backdrop-filter: blur(9.1px);
    -webkit-backdrop-filter: blur(9.1px);
    border: 1px solid rgba(105, 105, 105, 0.25);
    box-shadow: rgba(17, 17, 17, 0.2) 0px 2px 8px 0px;
    padding: 10px;
    border-radius: 1rem;
    margin: 0 10px;
    margin-top: 1rem;
    flex: 0 0 80%;
  }

  main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    background: #ebebeb;
    color: #000;
    border: 1px solid #ebebeb;
    font-size: 1.1rem;
    padding: 10px 14px;
    border-radius: 10rem;
    flex: 0 0 10%;
    margin: 0 10px;
    margin-top: 1rem;
    cursor: pointer;
  }

  @media screen and (min-width: 800px) {
    main {
      max-width: 60vw;
      margin: 0 auto;
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: flex-start;
      gap: 7px;
    }
  }
`;

export default Genre;
