import { Navbar } from '../components';
import styled from 'styled-components';

const Login = () => {
  return (
    <Wrapper className='section'>
      <div className='login-container'>
        <div className='navbar'>
          <Navbar />
        </div>
        <p>login page</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .login-container {
    min-height: 100vh;
    position: relative;
  }
`;

export default Login;
