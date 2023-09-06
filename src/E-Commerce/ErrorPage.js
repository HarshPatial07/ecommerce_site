import { Button } from '../Style/Button';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

function ErrorPage() {
  return (
    <Wrapper>
      <div className='container'>
        <div>
          <h2>404</h2>
          <h3>OH! You're lost.</h3>
          <NavLink to="/">
          <Button>Go Back To Home Page</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem;
    }
    h3 {
      font-size: 4.2rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;
export default ErrorPage