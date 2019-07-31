import React from 'react'
import styled from 'styled-components'

import Card from './Card'

const Palette = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  border-radius: inherit;
  overflow: hidden;

  cursor: pointer;
`

const Color = styled.div`
  width: 100%;
  height: 100%;

  background: #${({ color }) => color};
`

const PaletteCard = ({ paletteData, setModalToggle, setCurrentPalette }) => {
  const colors = paletteData.colors.map((color, index) => (
    <Color key={index} color={color}></Color>
  ))

  return (
    <Card>
      <Palette
        onMouseDown={() => {
          setCurrentPalette(paletteData)
          setModalToggle(true)
        }}
        palette={paletteData.colors}
      >
        {colors}
      </Palette>
    </Card>
  )
}

export default PaletteCard
