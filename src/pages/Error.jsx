import styled from 'styled-components';
import { Navbar } from '../components/index';
import errorImg from '../../public/assets/gallery/404.svg';

const Error = () => {
  return (
    <Wrapper className='section'>
      <div className='container'>
        <Navbar />
        <div className='img-wrapper'>
          <img src={errorImg} alt='error-image' />
        </div>
        <p>Opps 404! No page found.</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    color: #fff;
    min-height: 100vh;
  }
  .img-wrapper {
    padding-top: 3rem;
  }
  img {
    width: 100%;
    height: 600px;
  }
  p {
    text-align: center;
    padding-top: 3rem;
    font-size: 1.1rem;
  }
`;

export default Error;
