import React, { useState } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

import ColorDot from './ColorDot'

const Wrapper = styled(animated.div)`
  width: 100%;
  height: 100%;

  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.125),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`
const Content = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 7fr 3fr;
`

const Palette = styled.div`
  display: flex;
  cursor: pointer;
`

const Color = styled.div`
  width: 100%;
  height: 100%;

  background: #${({ color }) => color};
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

const PaletteCard = ({ paletteData, setModalToggle, setCurrentPalette }) => {
  const [hover, setHover] = useState(false)

  const { hvbso } = useSpring({
    hvbso: hover ? [0, 20, 25, -5, 0.3] : [0, 20, 25, -5, 0.2],
    config: {
      mass: 1,
      tension: 700,
      friction: 50,
    },
  })

  const colors = paletteData.colors.map((color, index) => (
    <Color key={index} color={color}></Color>
  ))

  const colorDots = paletteData.colors.map((color, index) => (
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
        <Palette
          onMouseDown={() => {
            setCurrentPalette(paletteData)
            setModalToggle(true)
          }}
          palette={paletteData.colors}
        >
          {colors}
        </Palette>
        <Information>
          <Name>{paletteData.name}</Name>
          <TechnicalInformation>{colorDots}</TechnicalInformation>
        </Information>
      </Content>
    </Wrapper>
  )
}

export default PaletteCard
