import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  max-width: 350px;
  height: 200px;
  overflow: hidden;

  border-radius: 3px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`
const Content = styled.div`
  width: 100%;
  height: 100%;

  display: grid;

  grid-template-rows: 5fr 5fr;
`

const GradientColor = styled.div`
  background: linear-gradient(
    ${({ degree }) => degree}deg
      ${({ gradient }) => gradient.map(color => `, #${color}`)}
  );
`

const GradientInformation = styled.div`
  width: 85%;
  display: grid;
  justify-self: center;
`

const Name = styled.h4``

const GradientCard = ({ name, degree, gradient }) => {
  return (
    <Wrapper>
      <Content>
        <GradientColor degree={degree} gradient={gradient}></GradientColor>
        <GradientInformation>
          <Name>{name}</Name>
        </GradientInformation>
      </Content>
    </Wrapper>
  )
}

export default GradientCard
