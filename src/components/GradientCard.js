import React from 'react'
import styled from 'styled-components'

import Card from './Card'

const Gradient = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 7fr 3fr;

  border-radius: inherit;
  overflow: hidden;

  background: linear-gradient(
    ${({ degree }) => degree}deg
      ${({ gradient }) => gradient.map(color => `, #${color}`)}
  );
  cursor: pointer;
`

const GradientCard = ({ gradientData, setModalToggle, setCurrentGradient }) => {
  return (
    <Card>
      <Gradient
        onMouseDown={() => {
          setCurrentGradient(gradientData)
          setModalToggle(true)
        }}
        degree={gradientData.degree}
        gradient={gradientData.gradient}
      ></Gradient>
    </Card>
  )
}

export default GradientCard
