import React from 'react'
import styled from 'styled-components'
import chroma from 'chroma-js'

const Wrapper = styled.div`
  height: 90%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`

const GroupWrapper = styled.div``

const Format = styled.strong``

const Value = styled.span``

const Group = ({ format, value }) => {
  return (
    <GroupWrapper>
      <Format>{format}</Format>
      <Value>{value}</Value>
    </GroupWrapper>
  )
}

const ColorInformation = ({ color }) => {
  return (
    <Wrapper>
      <Group
        format="Name: "
        value={color.name()[0] === '#' ? 'N/A' : chroma(color).name()}
      />
      <Group format="Hex: " value={color.hex()} />
      <Group format="Rgb: " value={color.css('rgb')} />
      <Group format="Rgba: " value={color.css('rgba')} />
      <Group format="Hsl: " value={color.css('hsl')} />
      <Group format="Name: " value={color.css('hsl')} />
    </Wrapper>
  )
}

export default ColorInformation
