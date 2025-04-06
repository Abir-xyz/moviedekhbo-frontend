import styled from 'styled-components';

const LoginPageBanner = () => {
  return (
    <Wrapper className='section'>
      <div className='banner-container'>
        <h1>Escape into Stories</h1>
        <p>Premium entertainment with a price tag of zero</p>
        <div>
          <button className='started-btn'>Get Started</button>
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

  .started-btn {
    font-size: 1rem;
    background: none;
    border: none;
    border: 1px solid var(--primaryClr);
    padding: 10px 20px;
    border-radius: 10rem;
    cursor: pointer;
  }

  h1 {
    font-size: 3rem;
    font-weight: 600;
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
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
