import React from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100vw;
  height: 55px;
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

  > h1 {
    flex: 1;
    font-size: 1.5rem;
  }
`

const Logo = styled.h1`
  cursor: pointer;

  transition: 0.2s;

  :hover {
    color: var(--text-color-dark);
  }
`

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Logo>Superjuarri</Logo>
        <Navbar />
      </Content>
    </Wrapper>
  )
}

export default Header
