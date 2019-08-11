import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import chroma from 'chroma-js'
import Layout from '../components/Layout/Layout'

const screenRatio = '210/200'

const ColorWrapper = styled.div`
  width: var(--width-content);
  max-width: var(--max-width-content);
  height: 50vh;

  display: grid;
  grid-template-columns: 50% 50%;
  grid-auto-rows: 100%;

  @media (max-aspect-ratio: ${screenRatio}) {
    grid-template-rows: 57.5% 30%;
    grid-template-columns: 100%;
  }
`

const ColorInfo = styled.div`
  width: 75%;
  height: 75%;

  align-self: center;
  justify-self: center;
`
const StyledForm = styled.form`
  border-bottom: 2px solid ${({ color }) => color};
  font-size: 2rem;
`

const StyledLabel = styled.label``

const InputColor = styled.input`
  border: none;
  outline: none;
  padding: 0;
`

const ColorSquare = styled.div`
  display: grid;
`
const Square = styled.div`
  width: 75%;
  height: 75%;

  align-self: center;
  justify-self: center;

  background-color: ${({ color }) => color};
  border-radius: 1rem;
`

const ScaleWrapper = styled.div`
  width: var(--width-content);
  max-width: var(--max-width-content);
`

const Scale = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  height: 125px;
`

const ScaleSquare = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ color }) => color};
`
const Color = () => {
  const [color, setColor] = useState(chroma.random())

  const colorLightnessScale = chroma
    .bezier([color.darken(2).hex(), color.hex(), color.brighten(2).hex()])
    .scale()
    .correctLightness()
    .colors(6)

  const colorSaturationScale = chroma
    .bezier([color.saturate(2).hex(), color.hex(), color.desaturate(2).hex()])
    .scale()
    .correctLightness()
    .colors(6)

  console.log(colorLightnessScale)
  console.log(colorSaturationScale)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Color Site | Color</title>
        <html lang="en" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Layout>
        <ColorWrapper>
          <ColorInfo>
            <StyledForm color={chroma(color).hex()}>
              <StyledLabel>Color: </StyledLabel>
              <InputColor
                type="text"
                placeholder={color}
                onChange={e =>
                  chroma.valid(e.target.value) && setColor(e.target.value)
                }
              />
            </StyledForm>

            <p>Name: {chroma(color).name()}</p>
            <p>Hex: {chroma(color).hex()} </p>
            <p>Rgb: {chroma(color).css('rgb')}</p>
            <p>Rgba: {chroma(color).css('rgba')}</p>
            <p>Hsl: {chroma(color).css('hsl')}</p>
          </ColorInfo>
          <ColorSquare>
            <Square color={color} />
          </ColorSquare>
        </ColorWrapper>

        <ScaleWrapper>
          <Scale>
            {colorLightnessScale.map((color, index) => (
              <ScaleSquare key={index} color={color} />
            ))}
          </Scale>
          <Scale>
            {colorSaturationScale.map((color, index) => (
              <ScaleSquare key={index} color={color} />
            ))}
          </Scale>
        </ScaleWrapper>
      </Layout>
    </>
  )
}

export default Color
