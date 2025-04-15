import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { RiAccountCircleLine } from 'react-icons/ri';
import styled from 'styled-components';

const LoginSys = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Wrapper className='section'>
      <div>
        {!isAuthenticated ? (
          <button onClick={() => loginWithRedirect()}>
            <span className='icon'>
              <RiAccountCircleLine />
            </span>{' '}
            Log In
          </button>
        ) : (
          <>
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              <span className='icon'>
                <RiAccountCircleLine />
              </span>
              Log Out
            </button>
          </>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  button {
    display: flex;
    align-items: center;
  }

  .icon {
    font-size: 1.4rem;
    margin-right: 3px;
    margin-top: 3px;
  }
`;

export default LoginSys;
