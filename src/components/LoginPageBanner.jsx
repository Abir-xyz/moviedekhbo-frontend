import styled from 'styled-components';
import LoginSys from './LoginSys';
import { Link } from 'react-router';

const LoginPageBanner = () => {
  return (
    <Wrapper className='section'>
      <div className='banner-container'>
        <h1>Escape into Stories</h1>
        <p>Premium entertainment with a price tag of zero</p>
        <div className='started-btn'>
          <LoginSys />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .banner-container {
    min-height: 80vh;
    max-width: 90vw;
    margin: 0 auto;
  }

  .started-btn button {
    background-color: #fff;
    border: #fff !important;
    font-size: 1.1rem;
    color: #000;
    padding: 10px 26px;
    cursor: pointer;
    border-radius: 10rem;
    transition: all 0.1s ease-in-out;
  }

  .started-btn button:hover {
    background-color: #c0c0c0;
    color: #fff;
  }

  h1 {
    font-size: 3rem;
    font-weight: 600;
    color: var(--secClr);
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--altWhite);
  }

  @media screen and (max-width: 800px) {
    .banner-container {
      display: flex !important;
      flex-direction: column !important;
      align-items: left !important;
      justify-content: center !important;
    }
    h1 {
      font-size: 2rem !important;
    }
    p {
      font-size: 1.2rem !important;
      margin: 0.6rem 0 !important;
    }
  }

  @media screen and (min-width: 800px) {
    .banner-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (min-width: 1400px) {
    h1 {
      font-size: 4rem;
      font-weight: 600;
    }
  }
`;

export default LoginPageBanner;
