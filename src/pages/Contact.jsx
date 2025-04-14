import styled from 'styled-components';
import { Navbar } from '../components';
import formSvg from '../../public/assets/gallery/login.svg';
import { useEffect, useRef } from 'react';

const Contact = () => {
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, []);

  return (
    <Wrapper className='section'>
      <Navbar />
      <div className='container'>
        <div className='form-wrapper'>
          <form
            action='https://api.web3forms.com/submit'
            method='POST'
            className='form'
            id='form'
            ref={formRef}
          >
            <input
              type='hidden'
              name='access_key'
              value='4d81b4b4-6ffe-4f74-8084-15fc05ae6a0a'
            ></input>
            <input
              type='text'
              placeholder='Name'
              required
              className='form-control'
            />
            <input
              type='email'
              placeholder='Email'
              required
              className='form-control'
            />
            <textarea
              name='Message'
              placeholder='Your Message'
              className='form-control'
              cols='25'
              rows='6'
              required
            ></textarea>

            <button type='submit' className='submit'>
              Submit
            </button>
          </form>
        </div>
        <div className='img-wrapper'>
          <img src={formSvg} alt='image' />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    min-height: 100vh;
    color: #ebebeb;
    max-width: 90vw;
    margin: 0 auto;
    margin-top: 3rem !important;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* width: 400px; */
    padding: 20px;
    border-radius: 5px;
    box-shadow: rgba(161, 161, 161, 0.2) 0px 2px 8px 0px;
    background-color: #1616166d;
  }
  .form-control {
    width: 100%;
    padding: 12px 5px;
    background: none;
    margin: 8px 0;
    border: 1px solid #ebebeb44;
    border-radius: 5px;
    color: #fff;
    font-size: 1rem;
  }
  img {
    width: 100%;
    height: 800px;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .form-wrapper {
    flex: 0 0 40%;
  }
  .img-wrapper {
    flex: 0 0 60%;
  }
  .submit {
    font-size: 1.1rem;
    font-weight: 500;
    background: #fff;
    color: #000;
    border: none;
    padding: 8px 20px;
    border-radius: 10rem;
    margin-top: 2rem;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
  }
  .submit:hover {
    background-color: #a0a0a0;
  }

  @media screen and (max-width: 800px) {
    .container {
      display: block;
    }
  }
`;

export default Contact;
