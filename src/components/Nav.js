import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 2.5vw;
`

const activeClassName = 'active'
const StyledLink = styled(Link).attrs({
  activeClassName: activeClassName,
})`
  text-decoration: none;
  transition: 0.2s;
  font-size: 1rem;
  font-weight: 500;

  color: var(--font-color-light);

  :hover {
    color: var(--font-color-dark);
  }

  &.${activeClassName} {
    background: linear-gradient(45deg, #00dbde, #fc00ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400% 400%;
    animation: Gradient 15s ease infinite;

    transition: 0.2s;
  }
`

const Nav = () => {
  return (
    <Wrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/palettes">Palettes</StyledLink>
      <StyledLink to="/gradients">Gradients</StyledLink>
      <StyledLink to="/tools">Tools</StyledLink>
    </Wrapper>
  )
}

export default Nav
