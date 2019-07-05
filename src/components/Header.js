import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 45vh;

  display: flex;
  align-content: center;

  background: linear-gradient(
    -45deg ${({ gradient }) => gradient.map(color => `, #${color}`)}
  );
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;

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

const Content = styled.header`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  width: var(--content-width);
  max-width: var(--content-max-width);

  justify-content: center;
  align-items: center;

  color: #ffffff;
`

const Title = styled.h1`
  font-size: 2rem;
`

const SubTitle = styled.h3`
  font-size: 1rem;
`

const gradients = [
  ['0000ff', 'E73C7E', '23A6D5', '23D5AB'],
  ['ffa6db', 'ffa8a8', 'fffcd1'],
  ['ff6666', 'ff219b', 'ff91ed'],
  ['ff5252', 'e028a3'],
]

const Header = () => {
  return (
    <Wrapper gradient={gradients[0]}>
      <Content>
        <Title>Gradient Site</Title>
        <SubTitle>A place to seek out gradients for your own site.</SubTitle>
      </Content>
    </Wrapper>
  )
}

export default Header
