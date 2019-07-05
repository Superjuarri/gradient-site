import React from 'react'
import styled from 'styled-components'

import GradientCard from './GradientCard'

const Wrapper = styled.div`
  width: 100vw;

  margin: 25px 0;

  display: flex;
  align-items: center;
`

const Content = styled.div`
  margin: 0 auto;
  width: var(--content-width);
  max-width: var(--content-max-width);

  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
  justify-content: space-between;
`

const GradientCardGrid = ({ gradients }) => {
  const contentGradients = gradients.map(gradient => {
    return (
      <GradientCard
        key={gradient.key}
        name={gradient.name}
        degree={gradient.degree}
        gradient={gradient.gradient}
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
