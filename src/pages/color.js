import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import 'normalize.css'
import '../styles/style.css'

import chroma from 'chroma-js'

import Layout from '../components/Layout/Layout'

import {
  InputText,
  InputRange,
  InputOption,
  InputCheckbox,
} from '../components/Input'

import ColorInformation from '../components/Color/ColorInformation'
import ColorScale from '../components/Color/ColorScale'

const screenRatio = '210/200'

const ColorWrapper = styled.div`
  margin: 5vh 0;
  width: var(--width-content);
  max-width: var(--max-width-content);

  display: grid;
  gap: 50px;
  grid-template-columns: 1fr 1fr;

  @media (max-aspect-ratio: ${screenRatio}) {
    gap: 50px;
    grid-template-rows: 0.75fr 1fr;
    grid-template-columns: 1fr;
  }
`

const ColorPanel = styled.div``

const ColorInputWrapper = styled.div`
  display: flex;
`

const ColorSquare = styled.div`
  width: 100%;
  height: 250px;

  align-self: start;
  justify-self: center;

  background-color: ${({ color }) => color};
  border-radius: 1rem;
`

const Settings = styled.div`
  margin-bottom: 25px;

  display: flex;
  justify-content: space-between;

  @media (max-aspect-ratio: ${screenRatio}) {
    flex-direction: column;
    height: 100px;
  }

  :nth-child(n + 1) {
    flex-shrink: 2;
  }
`

const ScaleWrapper = styled.div`
  width: var(--width-content);
  max-width: var(--max-width-content);
`

const RefreshButton = styled.button`
  padding: 0.25em 1em;
  border: 1px solid #cdc7c2;
  border-radius: 5px;
  background: inherit;
  white-space: nowrap;
  cursor: pointer;
`

const Color = () => {
  const [color, setColor] = useState(chroma.random())
  const [amountColors, setAmountColors] = useState(6)
  const [scaleMode, setScaleMode] = useState('rgb')
  const [useCorrectLightness, setCorrectLightness] = useState(false)

  const refreshColor = e => {
    e.preventDefault()
    setColor(chroma.random())
  }

  const scaleLightness = chroma
    .scale([
      color.set('hsl.l', 1),
      color.set('hsl.l', 0.5),
      color.set('hsl.l', 0),
    ])
    .mode(scaleMode)
    .correctLightness(useCorrectLightness)
    .colors(amountColors)

  const scaleSaturation = chroma
    .scale([
      color.set('hsl.s', 1),
      color.set('hsl.s', 0.5),
      color.set('hsl.s', 0),
    ])
    .mode(scaleMode)
    .colors(amountColors)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Color Site | Color</title>
        <html lang="en" />
        <link rel="canonical" href="https://colorsite.netlify.com/" />
      </Helmet>
      <Layout>
        <ColorWrapper>
          <ColorPanel>
            <ColorInputWrapper>
              <InputText
                labelText="Color"
                placeholder={color}
                onChange={e =>
                  chroma.valid(e.target.value) &&
                  setColor(chroma(e.target.value))
                }
              />
              <RefreshButton
                children="&#8635; Refresh"
                onClick={refreshColor}
              />
            </ColorInputWrapper>

            <ColorInformation color={color} />
          </ColorPanel>

          <ColorSquare color={color} />
        </ColorWrapper>

        <ScaleWrapper>
          <Settings>
            <InputRange
              labelText="Amount"
              value={amountColors}
              min={6}
              max={25}
              onChange={e => setAmountColors(e.target.value)}
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
