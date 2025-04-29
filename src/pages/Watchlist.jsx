import styled from 'styled-components';
import { Navbar } from '../components/index';

const Watchlist = () => {
  return (
    <Wrapper className='section'>
      <main className='main'>
        <div className='navbar'>
          <Navbar />
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    min-height: 100vh;
  }
`;

export default Watchlist;
