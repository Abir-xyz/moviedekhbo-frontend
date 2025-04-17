import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDataContext } from '../context api/DataContext';

const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { getSearchedValue } = useDataContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue);
  };

  useEffect(() => {
    if (searchQuery !== '') {
      getSearchedValue(searchQuery);
    }
  }, [searchQuery]);

  return (
    <Wrapper className='section'>
      <div className='container'>
        <form className='form' onClick={handleSubmit}>
          <input
            type='text'
            className='user-input'
            name='title'
            required
            placeholder='Enter Movie Or Series Name'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            Search
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20000;
  }
  .form {
    border-radius: 10rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(72, 72, 72, 0.44);
    padding: 1rem 0.66rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .user-input {
    padding: 10px 12px;
    color: #fff;
    font-size: 1rem;
    width: 100%;
    background: rgba(72, 72, 72, 0.35);
    border-radius: 666px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.4px);
    -webkit-backdrop-filter: blur(10.4px);
    border: 1px solid rgba(72, 72, 72, 0.44);
  }
  .submit-btn {
    margin-left: 1rem;
    font-size: 1rem;
    padding: 8px 20px;
    cursor: pointer;
    color: #fff;
    background: rgba(72, 72, 72, 0.35);
    border-radius: 10rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.4px);
    -webkit-backdrop-filter: blur(10.4px);
    border: 1px solid rgba(72, 72, 72, 0.44);
  }
`;

export default SearchForm;
