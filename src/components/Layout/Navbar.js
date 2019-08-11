import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import useWindowDimensions from '../../hooks/useWindowDimensions'

import NavbarNav from './NavbarNav'
import Hamburger from './Hamburger'

const borderHeight = '5px'
const borderColors = ['#fa5457', '#f6d51f', '#10e0db', '#a020f0']

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

  ::before {
    content: '';
    position: absolute;
    width: 100vw;
    height: ${borderHeight};
    border: 0;
    background-color: var(--color-main);
    background-image: linear-gradient(
      90deg,
      ${borderColors[0]},
      ${borderColors[0]} 25%,
      ${borderColors[1]} 25%,
      ${borderColors[1]} 50%,
      ${borderColors[2]} 50%,
      ${borderColors[2]} 75%,
      ${borderColors[3]} 75%,
      ${borderColors[3]} 100%,
      ${borderColors[3]} 100%
    );
    background-size: 50% 100%;
  }
`

const Content = styled.div`
  position: relative;
  top: calc(${borderHeight} - 3px);

  display: flex;

  width: var(--width-content);
  max-width: var(--max-width-content);

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

  color: var(--color-main);
`

const Navbar = () => {
  const { width } = useWindowDimensions()

  return (
    <Wrapper>
      <Content>
        <LogoWrapper>
          <Logo to="/">Color Site</Logo>
        </LogoWrapper>
        {width >= 750 ? <NavbarNav /> : <Hamburger />}
      </Content>
    </Wrapper>
  )
}

export default Navbar
