import styled from 'styled-components';
import { Navbar } from '../components/index';
import { useDataContext } from '../context api/DataContext';

const Watchlist = () => {
  const { wListItems } = useDataContext();

  console.log(wListItems);

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
