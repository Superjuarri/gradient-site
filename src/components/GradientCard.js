import React, { useState } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

import { useClipboard } from 'use-clipboard-copy'

import ColorDot from './ColorDot'

const Wrapper = styled(animated.div)`
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

const Gradient = styled.div`
  background: linear-gradient(
    ${({ degree }) => degree}deg
      ${({ gradient }) => gradient.map(color => `, #${color}`)}
  );
  cursor: pointer;
`

const Information = styled.div`
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
  color: var(--font-color);
`

const TechnicalInformation = styled.div`
  width: 100%;
  display: flex;
  justify-self: center;
  align-items: center;
`

const Degree = styled.p`
  margin: 0 8px 0 0;
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

const GradientCard = ({ gradientData, setModalToggle, setCurrentGradient }) => {
  const clipboard = useClipboard()
  const [hover, setHover] = useState(false)

  const { hvbso } = useSpring({
    hvbso: hover ? [0, 20, 25, -5, 0.3] : [0, 20, 25, -5, 0.2],
    config: {
      mass: 1,
      tension: 700,
      friction: 50,
    },
  })

  const colorDots = gradientData.gradient.map((color, index) => (
    <ColorDot key={index} color={color} />
  ))

  return (
    <Wrapper
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      style={{
        boxShadow: hvbso.interpolate(
          (h, v, b, s, o) => `${h}px ${v}px ${b}px ${s}px rgba(0, 0, 0, ${o})`
        ),
      }}
    >
      <Content>
        <Gradient
          onMouseDown={() => {
            setCurrentGradient(gradientData)
            setModalToggle(true)
          }}
          degree={gradientData.degree}
          gradient={gradientData.gradient}
        ></Gradient>
        <Information>
          <Name>{gradientData.name}</Name>
          <TechnicalInformation>
            <Degree onClick={() => clipboard.copy(`${gradientData.degree}`)}>
              {gradientData.degree}
              <span>&#176;</span>
            </Degree>
            {colorDots}
          </TechnicalInformation>
        </Information>
      </Content>
    </Wrapper>
  )
}

export default GradientCard
