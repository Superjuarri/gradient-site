import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;

  top: 147px;
  right: 100%;
`

const Content = styled.div`
  width: 200%;
  background: #f4f4f4;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
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
  font-weight: 500;

  color: var(--font-color-light);

  :hover {
    color: var(--font-color-dark);
  }

  &.${activeClassName} {
    background: linear-gradient(45deg, #00dbde, #fc00ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400% 400%;
    animation: Gradient 15s ease infinite;

    transition: 0.2s;
  }
`

const HamburgerNav = () => {
  return (
    <Wrapper>
      <Content>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/palettes">Palettes</StyledLink>
          <StyledLink to="/gradients">Gradients</StyledLink>
          <StyledLink to="/tools">Tools</StyledLink>
        </Nav>
      </Content>
    </Wrapper>
  )
}

export default HamburgerNav
