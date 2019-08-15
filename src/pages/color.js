import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import 'normalize.css'
import '../styles/style.css'

import chroma from 'chroma-js'

import Layout from '../components/Layout/Layout'

import {
  InputText,
  InputNumber,
  InputOption,
  InputCheckbox,
} from '../components/Input'
import ColorInformation from '../components/Color/ColorInformation'
import ColorScale from '../components/Color/ColorScale'

const screenRatio = '210/200'

const ColorWrapper = styled.div`
  margin: 50px 0;
  width: var(--width-content);
  max-width: var(--max-width-content);

  display: grid;
  gap: 50px;
  grid-template-columns: 1fr 1fr;

  @media (max-aspect-ratio: ${screenRatio}) {
    gap: 0px;
    grid-template-rows: 0.75fr 1fr;
    grid-template-columns: 1fr;
  }
`

const ColorPanel = styled.div``

const ColorSquare = styled.div`
  width: 100%;
  height: 250px;

  align-self: start;
  justify-self: center;

  background-color: ${({ color }) => color};
  border-radius: 1rem;
`

const Settings = styled.div`
  display: flex;
  justify-content: space-between;
`

const ScaleWrapper = styled.div`
  width: var(--width-content);
  max-width: var(--max-width-content);
`

const Color = () => {
  const [color, setColor] = useState(chroma.random())
  const [ammountOfColors, setAmmountOfColors] = useState(6)
  const [scaleMode, setScaleMode] = useState('rgb')
  const [useCorrectLightness, setCorrectLightness] = useState(false)

  const scaleLightness = chroma
    .scale([
      color.set('hsl.l', 1),
      color.set('hsl.l', 0.5),
      color.set('hsl.l', 0),
    ])
    .mode(scaleMode)
    .correctLightness(useCorrectLightness)
    .colors(ammountOfColors)

  const scaleSaturation = chroma
    .scale([
      color.set('hsl.s', 1),
      color.set('hsl.s', 0.5),
      color.set('hsl.s', 0),
    ])
    .mode(scaleMode)
    .colors(ammountOfColors)

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
          <ColorPanel>
            <InputText
              labelText="Color"
              placeholder={color}
              onChange={e =>
                chroma.valid(e.target.value) && setColor(chroma(e.target.value))
              }
            >
              <button
                onClick={e => {
                  e.preventDefault()
                  setColor(chroma.random())
                }}
              >
                Refresh
              </button>
            </InputText>
            <ColorInformation color={color} />
          </ColorPanel>

          <ColorSquare color={color} />
        </ColorWrapper>

        <ScaleWrapper>
          <Settings>
            <InputNumber
              labelText="Ammount"
              value={ammountOfColors}
              min={6}
              max={360}
              onChange={e =>
                e.target.value <= 360 && setAmmountOfColors(e.target.value)
              }
            />
            <InputCheckbox
              labelText="Correct Lightness"
              onChange={() => setCorrectLightness(!useCorrectLightness)}
            />
            <InputOption
              labelText="Scale Mode"
              options={['rgb', 'lrgb', 'hsl', 'lab', 'lch']}
              onChange={e => e.target.value && setScaleMode(e.target.value)}
            />
          </Settings>

          <ColorScale scaleType={scaleLightness} scaleName="Lightness" />
          <ColorScale scaleType={scaleSaturation} scaleName="Saturation" />
        </ScaleWrapper>
      </Layout>
    </>
  )
}

export default Color
