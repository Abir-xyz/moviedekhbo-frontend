import { Navbar, LoginPageBanner } from '../components';
import styled from 'styled-components';

const Login = () => {
  return (
    <Wrapper className='section'>
      <div className='login-container'>
        <div className='banner-wrapper'>
          <div className='navbar'>
            <Navbar />
          </div>
          <div className='banner'>
            <LoginPageBanner />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .login-container {
    min-height: 100vh;
    position: relative;
  }
  .banner-wrapper {
    background-image: url('/assets/gallery/cool1.svg');
    min-height: 100vh;
    background-size: cover;
    background-position: center;
    height: 100vh;
  }
`;

export default Login;
