import { Navbar } from '../components/index';
import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper className='section'>
      <div className='banner-wrapper'>
        <Navbar />
        <h3>home page</h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .banner-wrapper {
    background-image: url('/assets/gallery/cool2.svg');
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    height: 100vh;
  }
`;

export default Home;
