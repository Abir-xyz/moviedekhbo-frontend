import styled from 'styled-components';
import { Link } from 'react-router';
import { Navbar } from '../components';

const Warning = () => {
  return (
    <Wrapper className='section'>
      <main className='main'>
        <Navbar />
        <div className='container'>
          <h1>You need to be logged in to use this feature!</h1>
          <Link to='/login'>Click here to login</Link>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    min-height: 100vh;
  }
  .container {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
  }
  h1 {
    font-weight: 400;
    font-size: 1.2rem;
  }
  a {
    margin-top: 1rem;
    color: grey;
  }
  .link:hover {
    padding: 0px 5px !important;
  }
`;

export default Warning;
