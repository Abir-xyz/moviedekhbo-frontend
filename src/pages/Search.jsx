import styled from 'styled-components';
import { Navbar, SearchForm, SearchedResults } from '../components';

const Search = () => {
  return (
    <Wrapper className='section'>
      <div className='main'>
        <div className='container'>
          <Navbar />
          <div className='content'>
            <SearchForm />
          </div>
          <div className='results'>
            <SearchedResults />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    min-height: 100vh;
  }
  .content {
    max-width: 80vw;
    margin: 0 auto;
    margin-bottom: 2rem !important;
  }
  .container {
    max-width: 90vw;
    margin: 0 auto;
    .links .link {
      color: #ebebeb;
      padding: 6px 0px;
    }
    .links .link:hover {
      padding: 6px 12px;
    }
  }
  .content {
    margin-top: 4rem;
  }
  @media screen and (max-width: 800px) {
    .content {
      max-width: 90vw !important;
      margin: 0 auto;
    }
  }
`;

export default Search;
