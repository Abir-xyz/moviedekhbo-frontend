import {
  Navbar,
  TrendingMovies,
  TrendingSeries,
  TopMovies,
  TopSeries,
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

const Wrapper = styled.section``;

export default Home;
