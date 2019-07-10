import React from 'react'
import styled from 'styled-components'
import { useClipboard } from 'use-clipboard-copy'

import ColorDot from './ColorDot'

const Wrapper = styled.div`
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

const GradientColor = styled.div`
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
  gap: 8px;
  justify-self: center;
  align-items: center;
`

const Degree = styled.p`
  margin: 0;
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

const GradientCard = ({ gradientData, setModalStyles }) => {
  const clipboard = useClipboard()

  const colorDots = gradientData.gradient.map((color, index) => (
    <ColorDot key={index} color={color} />
  ))

  return (
    <Wrapper>
      <Content>
        <GradientColor
          onMouseDown={() => {
            setModalStyles({
              gradient: gradientData,
              opacity: 1,
              pointerEvent: 'auto',
            })
          }}
          degree={gradientData.degree}
          gradient={gradientData.gradient}
        ></GradientColor>
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
