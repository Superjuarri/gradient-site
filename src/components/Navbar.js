import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import NavbarNav from './NavbarNav'
import Hamburger from './Hamburger'

const Wrapper = styled.div`
  z-index: 900;
  flex-shrink: 0;

  position: sticky;
  top: 0;

  width: 100vw;
  height: 55px;

  display: flex;
  justify-content: center;

  background-color: #ffffff;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`

const Content = styled.div`
  display: flex;

  width: var(--content-width);
  max-width: var(--content-max-width);

  align-items: center;
`

const LogoWrapper = styled.div`
  flex: 1;
`

const Logo = styled(Link)`
  position: relative;
  right: 1rem;

  cursor: pointer;
  padding: 0.8rem;

  font-size: 1.5rem;
  line-height: 27.6px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;

  color: var(--bright_pink);
`

const Navbar = () => {
  return (
    <Wrapper>
      <Content>
        <LogoWrapper>
          <Logo to="/">Color Site</Logo>
        </LogoWrapper>
        <Hamburger />
        <NavbarNav />
      </Content>
    </Wrapper>
  )
}

export default Navbar
