import React from 'react'
import styled from 'styled-components'

import Navbar from './Nav'

const Wrapper = styled.div`
  position: sticky;
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

const Logo = styled.h1`
  cursor: pointer;
  flex: 1;
  font-size: 1.5rem;
  white-space: nowrap;

  background: linear-gradient(
    -45deg ${({ gradient }) => gradient.map(color => `, #${color}`)}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;

  transition: 0.2s;

  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Logo
          gradient={['0000ff', 'E73C7E', '23A6D5', '23D5AB']}
          hoverGradient={['ffa6db', 'ffa8a8', 'fffcd1']}
        >
          Gradient Site
        </Logo>
        <Navbar />
      </Content>
    </Wrapper>
  )
}

export default Header
