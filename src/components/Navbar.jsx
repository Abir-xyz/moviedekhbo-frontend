import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import LoginSys from './LoginSys';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <Wrapper className='section'>
      <div className='navbar-container'>
        <div className='wrapper'>
          <Link to='/' className='brand'>
            {isAuthenticated ? <h1>Hi, {user.name} </h1> : <h1>MovieDekhbo</h1>}
          </Link>
        </div>
        <div className='wrapper'>
          <div className='links'>
            <NavLink to='/' className='link active-link'>
              Home
            </NavLink>
            <NavLink to='/' className='link'>
              Movies
            </NavLink>
            <NavLink to='/' className='link'>
              Series
            </NavLink>
            <NavLink to='/' className='link'>
              WatchList
            </NavLink>
          </div>
        </div>
        <div className='wrapper'>
          <div className='global-btns'>
            <div className='search-wrapper'>
              <div className='search-btn'>
                <CiSearch />
              </div>
            </div>
            <div className='acc-wrapper'>
              <div className='acc-btn'>
                <LoginSys />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .navbar-container {
    max-width: 90vw;
    margin: 0 auto;
  }
  .brand h1 {
    font-size: 1.7rem;
    font-weight: 600;
    color: #fff;
  }

  .brand {
    text-decoration: none;
    color: var(--headings);
  }
  .links {
    padding: 10px 0;
    border-radius: 10rem;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.9px);
    -webkit-backdrop-filter: blur(5.9px);
    border: 1px solid rgba(39, 39, 39, 0.116);
  }
  .link {
    text-decoration: none;
    color: #ffffffce;
    font-size: 1.1rem;
    margin: 0 1rem;
    transition: all 0.1s ease-in-out;
  }

  .link:hover {
    background-color: #222;
    color: #fff;
    padding: 6px 20px;
    border-radius: 10rem;
  }

  .search-wrapper {
    margin-right: 1rem;
  }
  .search-btn {
    background-color: #fff !important;
    color: #000 !important;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
  }
  .search-btn:hover {
    background: #000000 !important;
    color: #fff !important;
  }
  .search-btn svg {
    font-size: 1.8rem;
    position: absolute;
    top: 11%;
    left: 13%;
  }
  .acc-btn button {
    background: #fff !important;
    border: var(--secClr) !important;
    font-size: 1.1rem;
    color: #000 !important ;
    padding: 10px 26px;
    cursor: pointer;
    /* From https://css.glass */
    background: rgba(0, 0, 0, 0);
    border-radius: 10rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.9px);
    -webkit-backdrop-filter: blur(5.9px);
    border: 1px solid rgba(0, 0, 0, 0.21);
    transition: all 0.1s ease-in-out;
  }

  .acc-btn button:hover {
    background: #000000 !important;
    color: #fff !important;
  }

  .global-btns {
    display: flex;
    align-items: center;
  }

  .active-link {
    background-color: #222;
    color: #fff;
    padding: 6px 20px;
    border-radius: 10rem;
  }

  @media screen and (max-width: 800px) {
    .brand h1 {
      font-size: 1.66rem;
    }
    .links {
      position: fixed;
      z-index: 10;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
      max-width: 90vw;
      margin-left: auto;
      margin-right: auto;
      padding: 6px 16px;
      /* From https://css.glass */
      background: rgba(70, 70, 70, 0.2);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5.9px);
      -webkit-backdrop-filter: blur(5.9px);
      border: 1px solid rgba(206, 206, 206, 0.21);
    }
    .link {
      font-size: 1rem;
      margin: 0 !important;
      color: #ffffffce;
    }
    .active-link {
      color: var(--txtClr) !important;
    }

    .search-btn {
      background-color: var(--primaryClr);
      color: var(--secClr);
      height: 30px;
      width: 30px;
      border-radius: 50%;
      position: relative;
    }
    .search-btn svg {
      font-size: 1.3rem;
      position: absolute;
      top: 11%;
      left: 13%;
    }
    .acc-btn button {
      padding: 4px 8px;
    }

    .navbar-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
  }

  @media screen and (min-width: 800px) {
    .navbar-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 40px;
    }
  }
`;

export default Navbar;
