import React from 'react'
import styled from 'styled-components'
import { useClipboard } from 'use-clipboard-copy'

import ColorDot from './ColorDot'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  border-radius: 3px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.125),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`
const Content = styled.div`
  width: 100%;
  height: 100%;

  display: grid;

  grid-template-rows: 7fr 3fr;
`

const GradientColor = styled.div`
  background: linear-gradient(
    ${({ degree }) => degree}deg
      ${({ gradient }) => gradient.map(color => `, #${color}`)}
  );
`

const GradientInformation = styled.div`
  padding: 10px;
  width: 85%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-self: center;
`

const Name = styled.h4`
  display: block;
  margin: 0 0 5px 0;
  align-self: center;
  color: var(--font-color-dark);
`

const GradientTechnicalInformation = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  justify-self: center;
  align-items: center;
`

const Degree = styled.p`
  margin: 0;
  align-self: center;
  white-space: nowrap;
  span {
    display: inline-block;
  }

  :hover {
    cursor: pointer;
    color: var(--font-color-dark);
  }
`

const GradientCard = ({ name, degree, gradient }) => {
  const clipboard = useClipboard()

  const colorDots = gradient.map(gradient => (
    <ColorDot color={gradient}></ColorDot>
  ))

  return (
    <Wrapper>
      <Content>
        <GradientColor degree={degree} gradient={gradient}></GradientColor>
        <GradientInformation>
          <Name>{name}</Name>
          <GradientTechnicalInformation>
            <Degree onClick={() => clipboard.copy(`${degree}`)}>
              {degree}
              <span>&#176;</span>
            </Degree>
            {colorDots}
          </GradientTechnicalInformation>
        </GradientInformation>
      </Content>
    </Wrapper>
  )
}

export default GradientCard
