import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``

const Text = styled.h3``

const Scale = styled.div`
  display: flex;
  margin-bottom: 50px;
  width: 100%;
  height: 125px;
  border-radius: 10px;
  overflow: hidden;
`

const ScaleSquare = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ color }) => color};
`

const ColorScale = ({ scaleType, scaleName }) => {
  return (
    <Wrapper>
      <Text>{scaleName}</Text>
      <Scale>
        {scaleType.map((color, index) => (
          <ScaleSquare key={index} color={color} />
        ))}
      </Scale>
    </Wrapper>
  )
}

export default ColorScale
