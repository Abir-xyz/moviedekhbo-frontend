import styled from 'styled-components';
import { Link } from 'react-router';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper className='section'>
      <div className='main'>
        <div className='wrapper'>
          <p>
            This website is intended for educational and informational purposes
            only!
          </p>
          <p>All contents are provided by non-affiliated third parties.</p>
          <p>
            If you want to say something then <Link to='/contact'>Contact</Link>
          </p>
          <p>Copyright © {currentYear} Moviedekhbo</p>
          <p className='quote'>
            "We die a little every day and call it living"
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    min-height: 20vh;
    margin-top: 4rem;
    background-color: #1111113e;
    color: #7a7a7a;
    position: relative;
    padding: 12px 0;
  }
  .quote {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #5a5a5a;
    font-style: italic;
    padding-top: 5px;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    min-height: 20vh;
    text-align: center;
    p {
      padding-bottom: 4px;
    }
  }

  @media screen and (max-width: 800px) {
    .wrapper {
      margin-bottom: 65px;
      font-size: 0.9rem;
      .quote {
        top: 0;
      }
    }
  }
`;

export default Footer;
