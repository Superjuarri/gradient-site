import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  left: 1rem;

  @media (max-width: 900px) {
    display: none;
  }
`

const activeClassName = 'active'
const StyledLink = styled(Link).attrs({
  activeClassName: activeClassName,
})`
  margin-left: 1.5vw;
  padding: 1rem;
  text-decoration: none;
  transition: 0.2s;
  font-size: 1rem;
  font-weight: 700;

  color: var(--font-color-light);

  :hover,
  :focus {
    color: var(--font-color-dark);
  }

  &.${activeClassName} {
    color: var(--bright_pink);
  }
`

const NavbarNav = () => {
  return (
    <Wrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/palettes" partiallyActive={true}>
        Palettes
      </StyledLink>
      <StyledLink to="/gradients" partiallyActive={true}>
        Gradients
      </StyledLink>
      <StyledLink to="/tools" partiallyActive={true}>
        Tools
      </StyledLink>
    </Wrapper>
  )
}

export default NavbarNav
