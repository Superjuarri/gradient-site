import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import useWindowDimensions from '../hooks/useWindowDimensions'

import NavbarNav from './NavbarNav'
import Hamburger from './Hamburger'

const Wrapper = styled.div`
  position: sticky;
  z-index: 998;
  top: 0;
  width: 100vw;
  height: 55px;

  display: flex;
  align-items: center;

  background-color: #ffffff;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`

const Content = styled.div`
  margin: 0 auto;
  display: flex;

  width: var(--content-width);
  max-width: var(--content-max-width);

  justify-items: right;
  align-items: center;
  background: transparent;
`

const LogoWrapper = styled.div`
  flex: 1;
`

const Logo = styled(Link)`
  cursor: pointer;
  padding: 1rem;

  font-size: 1.5rem;
  line-height: 27.6px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;

  background: linear-gradient(45deg, #00dbde, #fc00ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;

  transition: 0.2s;
`

const Navbar = () => {
  const { width } = useWindowDimensions()

  return (
    <Wrapper>
      <Content>
        <LogoWrapper>
          <Logo to="/">Color Site</Logo>
        </LogoWrapper>

        {width <= 900 ? <Hamburger /> : <NavbarNav />}
      </Content>
    </Wrapper>
  )
}

export default Navbar
