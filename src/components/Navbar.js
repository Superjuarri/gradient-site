import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Nav from './Nav'

const Wrapper = styled.div`
  position: sticky;
  z-index: 998;
  top: 0;
  width: 100vw;
  height: 50px;
  overflow: hidden;

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
  background: inherit;
`

const Logo = styled(Link)`
  cursor: pointer;
  flex: 1;
  font-size: 1.5rem;
  line-height: 27.6px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;

  background: linear-gradient(45deg, #00dbde, #fc00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;

  transition: 0.2s;
`

const Navbar = () => {
  return (
    <Wrapper>
      <Content>
        <Logo to="/">Gradient Site</Logo>
        <Nav />
      </Content>
    </Wrapper>
  )
}

export default Navbar
