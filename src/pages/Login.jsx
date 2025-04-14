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
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    min-height: 100vh;
    width: 100%;
  }
`;

export default Login;
