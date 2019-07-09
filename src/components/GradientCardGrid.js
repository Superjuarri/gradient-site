import React from 'react'
import styled from 'styled-components'

import GradientCard from './GradientCard'

const Wrapper = styled.div`
  width: 100vw;
  margin: 30px 0;

  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: var(--content-width);
  max-width: var(--content-max-width);

  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-auto-rows: 175px;

  align-content: space-between;
`

const GradientCardGrid = ({ gradients, setModalStyles }) => {
  const contentGradients = gradients.map(gradient => {
    return (
      <GradientCard
        key={gradient.key}
        gradientData={gradient}
        setModalStyles={setModalStyles}
      ></GradientCard>
    )
  })

  return (
    <Wrapper>
      <Content>{contentGradients}</Content>
    </Wrapper>
  )
}

export default GradientCardGrid
