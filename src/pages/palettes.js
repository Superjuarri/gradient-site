import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import 'normalize.css'
import '../styles/style.css'

import Layout from '../components/Layout/Layout'

import CardGrid from '../components/CardGrid/CardGrid'
import PaletteCard from '../components/CardGrid/PaletteCard'
import Modal from '../components/Modal'

const palettes = [
  {
    name: 'Cotton Candy',
    colors: ['#ffadfb', '#bca6ff', '#cfefff', '#fff0db'],
  },
  {
    name: 'North Miracle',
    colors: ['#293462', '#216583', '#f76262', '#fff1c1'],
  },

  {
    name: 'Pinky',
    colors: ['#f38eff', '#ff00c8', '#ffcece', '#fff0f0'],
  },
  {
    name: 'Cyano',
    colors: ['#e42c64', '#614ad3', '#2d248a', '#121b74'],
  },
  {
    name: 'Beach',
    colors: ['#fafdcb', '#aee7e8', '#28c3d4', '#248ea9'],
  },
  {
    name: 'Soft Fruit',
    colors: ['#f1d4d4', '#ddb6c6', '#ac8daf', '#484c7f'],
  },
  {
    name: 'Lollipop',
    colors: ['#a445b2', '#d41872', '#ff0066', '#faf7e6'],
  },
  {
    name: 'Warm Flame',
    colors: ['#6319ff', '#fe4680', '#ff8978', '#fec670'],
  },
  {
    name: 'Dusty Grass',
    colors: ['#454d66', '#009975', '#58b368', '#d9d872'],
  },
  {
    name: 'Bubble Gum',
    colors: ['#2d3999', '#9a1ba0', '#f08181', '#ebbb91'],
  },
  {
    name: 'Near Moon',
    colors: ['#e8e8e8', '#5588a3', '#145374', '#00334e'],
  },
  {
    name: 'Atlas',
    colors: ['#f7f7f7', '#393e46', '#5c636e', '#f8b500'],
  },
  {
    name: 'Shallow Sand',
    colors: ['#302387', '#ffdee9', '#00faac', '#fffdaf'],
  },
  {
    name: 'Salvation',
    colors: ['#ff5d9e', '#8f71ff', '#82acff', '#8bffff'],
  },
  {
    name: 'Kiss',
    colors: ['#35477d', '#6c5b7b', '#c06c84', '#f67280'],
  },
  {
    name: 'Gagarin',
    colors: ['#900c3f', '#c70039', '#ff5733', '#ffc300'],
  },
  {
    name: 'Cotton Candy',
    colors: ['#ffadfb', '#bca6ff', '#cfefff', '#fff0db'],
  },
  {
    name: 'North Miracle',
    colors: ['#293462', '#216583', '#f76262', '#fff1c1'],
  },

  {
    name: 'Pinky',
    colors: ['#f38eff', '#ff00c8', '#ffcece', '#fff0f0'],
  },
  {
    name: 'Cyano',
    colors: ['#e42c64', '#614ad3', '#2d248a', '#121b74'],
  },
  {
    name: 'Beach',
    colors: ['#fafdcb', '#aee7e8', '#28c3d4', '#248ea9'],
  },
  {
    name: 'Soft Fruit',
    colors: ['#f1d4d4', '#ddb6c6', '#ac8daf', '#484c7f'],
  },
  {
    name: 'Lollipop',
    colors: ['#a445b2', '#d41872', '#ff0066', '#faf7e6'],
  },
  {
    name: 'Warm Flame',
    colors: ['#6319ff', '#fe4680', '#ff8978', '#fec670'],
  },
  {
    name: 'Dusty Grass',
    colors: ['#454d66', '#009975', '#58b368', '#d9d872'],
  },
  {
    name: 'Bubble Gum',
    colors: ['#2d3999', '#9a1ba0', '#f08181', '#ebbb91'],
  },
  {
    name: 'Near Moon',
    colors: ['#e8e8e8', '#5588a3', '#145374', '#00334e'],
  },
  {
    name: 'Atlas',
    colors: ['#f7f7f7', '#393e46', '#5c636e', '#f8b500'],
  },
  {
    name: 'Shallow Sand',
    colors: ['#302387', '#ffdee9', '#00faac', '#fffdaf'],
  },
  {
    name: 'Salvation',
    colors: ['#ff5d9e', '#8f71ff', '#82acff', '#8bffff'],
  },
  {
    name: 'Kiss',
    colors: ['#35477d', '#6c5b7b', '#c06c84', '#f67280'],
  },
  {
    name: 'Gagarin',
    colors: ['#900c3f', '#c70039', '#ff5733', '#ffc300'],
  },
]

const PaletteModal = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 11px;

  display: flex;
  flex-direction: column;
  cursor: pointer;
`

const Color = styled.div`
  width: 100%;
  height: 100%;

  background: ${({ color }) => color};
`

const Palettes = () => {
  const [currentPalette, setCurrentPalette] = useState(palettes[0])
  const [modalToggle, setModalToggle] = useState(false)

  const paletteCards = palettes.map((palette, index) => {
    return (
      <PaletteCard
        key={index}
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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Color Site | Palettes</title>
        <html lang="en" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Layout>
        <Modal modalToggle={modalToggle} setModalToggle={setModalToggle}>
          <PaletteModal palleteData={currentPalette}>{colors}</PaletteModal>
        </Modal>
        <CardGrid>{paletteCards}</CardGrid>
      </Layout>
    </>
  )
}

export default Palettes
