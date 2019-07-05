import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

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
  font-weight: 500;

  color: var(--font-color);

  :hover {
    color: var(--font-color-dark);
  }
`

const Navbar = () => {
  return (
    <Wrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/palettes">Palettes</StyledLink>
      <StyledLink to="/gradients">Gradients</StyledLink>
      <StyledLink to="/tools">Tools</StyledLink>
    </Wrapper>
  )
}

export default Navbar
