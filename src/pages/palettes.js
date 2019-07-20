import React, { useState } from 'react'
import styled from 'styled-components'
import 'normalize.css'
import '../styles/style.css'

import useWindowDimensions from '../hooks/useWindowDimensions'

import Layout from '../components/Layout'

import CardGrid from '../components/CardGrid'
import PaletteCard from '../components/PaletteCard'
import Modal from '../components/Modal'

const palettes = [
  {
    key: 1,
    name: 'Cotton Candy',
    colors: ['ffadfb', 'bca6ff', 'cfefff', 'fff0db'],
  },
  {
    key: 2,
    name: 'North Miracle',
    colors: ['293462', '216583', 'f76262', 'fff1c1'],
  },

  {
    key: 3,
    name: 'Pinky',
    colors: ['f38eff', 'ff00c8', 'ffcece', 'fff0f0'],
  },
  {
    key: 4,
    name: 'Cyano',
    colors: ['e42c64', '614ad3', '2d248a', '121b74'],
  },
  {
    key: 5,
    name: 'Beach',
    colors: ['fafdcb', 'aee7e8', '28c3d4', '248ea9'],
  },
  {
    key: 6,
    name: 'Soft Fruit',
    colors: ['f1d4d4', 'ddb6c6', 'ac8daf', '484c7f'],
  },
  {
    key: 7,
    name: 'Lollipop',
    colors: ['a445b2', 'd41872', 'ff0066', 'faf7e6'],
  },
  {
    key: 8,
    name: 'Warm Flame',
    colors: ['6319ff', 'fe4680', 'ff8978', 'fec670'],
  },
  {
    key: 9,
    name: 'Dusty Grass',
    colors: ['454d66', '009975', '58b368', 'd9d872'],
  },
  {
    key: 10,
    name: 'Bubble Gum',
    colors: ['2d3999', '9a1ba0', 'f08181', 'ebbb91'],
  },
  {
    key: 11,
    name: 'Near Moon',
    colors: ['e8e8e8', '5588a3', '145374', '00334e'],
  },
  {
    key: 12,
    name: 'Atlas',
    colors: ['f7f7f7', '393e46', '5c636e', 'f8b500'],
  },
  {
    key: 13,
    name: 'Shallow Sand',
    colors: ['302387', 'ffdee9', '00faac', 'fffdaf'],
  },
  {
    key: 14,
    name: 'Salvation',
    colors: ['ff5d9e', '8f71ff', '82acff', '8bffff'],
  },
  {
    key: 15,
    name: 'Kiss',
    colors: ['35477d', '6c5b7b', 'c06c84', 'f67280'],
  },
  {
    key: 16,
    name: 'Gagarin',
    colors: ['900c3f', 'c70039', 'ff5733', 'ffc300'],
  },
]

const PaletteModal = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 11px;

  display: flex;
  flex-direction: ${({ viewportWidth }) =>
    viewportWidth <= 900 ? 'column' : 'row'};
  cursor: pointer;
`

const Color = styled.div`
  width: 100%;
  height: 100%;

  background: #${({ color }) => color};
`

const Palettes = () => {
  const { width } = useWindowDimensions()

  const [currentPalette, setCurrentPalette] = useState(palettes[0])
  const [modalToggle, setModalToggle] = useState(false)

  const paletteCards = palettes.map(palette => {
    return (
      <PaletteCard
        key={palette.key}
        paletteData={palette}
        setModalToggle={setModalToggle}
        setCurrentPalette={setCurrentPalette}
      ></PaletteCard>
    )
  })

  const colors = currentPalette.colors.map((color, index) => (
    <Color key={index} color={color}></Color>
  ))

  return (
    <Layout documentTitle="Gradient Site - Palettes">
      <CardGrid>{paletteCards}</CardGrid>
      <Modal modalToggle={modalToggle} setModalToggle={setModalToggle}>
        <PaletteModal palleteData={currentPalette} viewportWidth={width}>
          {colors}
        </PaletteModal>
      </Modal>
    </Layout>
  )
}

export default Palettes
