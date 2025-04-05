import { Navbar } from '../components/index';
import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper className='section'>
      <Navbar />
      <h3>home page</h3>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Home;
