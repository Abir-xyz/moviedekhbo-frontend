import {
  Navbar,
  TrendingMovies,
  TrendingSeries,
  TopMovies,
  TopSeries,
  Footer,
} from '../components/index';
import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper className='section'>
      <div className='home'>
        <Navbar />
        <TrendingMovies />
        <TrendingSeries />
        <TopMovies />
        <TopSeries />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .home {
    background-image: url('/assets/gallery/cool2.svg');
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export default Home;
