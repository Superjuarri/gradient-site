import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  left: 0.5rem;
`

const activeClassName = 'active'
const StyledLink = styled(Link).attrs({
  activeClassName: activeClassName,
})`
  margin-left: 1.5vw;
  padding: 1rem;
  text-decoration: none;
  transition: 0.2s;
  font-size: 1.05rem;
  font-weight: 700;

  color: var(--color-font-light);

  :hover,
  :focus {
    color: var(--color-font-dark);
  }

  &.${activeClassName} {
    color: var(--color-main);
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
      <StyledLink to="/color" partiallyActive={true}>
        Color
      </StyledLink>
    </Wrapper>
  )
}

export default NavbarNav
