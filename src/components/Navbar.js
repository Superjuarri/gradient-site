import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Button from './Button'

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 2.5vw;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  transition: 0.2s;
  font-size: 1rem;
  font-weight: 300;

  color: var(--font-color);

  :hover {
    color: var(--font-color-dark);
  }
`

const Navbar = () => {
  return (
    <Wrapper>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/programs">Programs</StyledLink>
      <StyledLink to="/parents">Parents</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
      <StyledLink to="/">
        <Button>Try Now</Button>
      </StyledLink>
    </Wrapper>
  )
}

export default Navbar
