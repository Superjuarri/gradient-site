import React from 'react'
import styled from 'styled-components'
import chroma from 'chroma-js'

const Wrapper = styled.div``

const ColorInformation = ({ color }) => {
  return (
    <Wrapper>
      <p>Name: {color.name()[0] === '#' ? 'N/A' : chroma(color).name()}</p>
      <p>Hex: {color.hex()} </p>
      <p>Rgb: {color.css('rgb')}</p>
      <p>Rgba: {color.css('rgba')}</p>
      <p>Hsl: {color.css('hsl')}</p>
    </Wrapper>
  )
}

export default ColorInformation
