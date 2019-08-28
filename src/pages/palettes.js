import { graphql } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'
import 'normalize.css'
import '../styles/style.css'

import { usePaletteData } from '../hooks/usePaletteData'

import SEO from '../components/SEO'

import Layout from '../components/Layout/Layout'

import CardGrid from '../components/CardGrid/CardGrid'
import PaletteCard from '../components/CardGrid/PaletteCard'
import Modal from '../components/Modal'

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
  const { allMongodbMainPalettes } = usePaletteData()
  const palettes = allMongodbMainPalettes.nodes

  const [currentPalette, setCurrentPalette] = useState(palettes[0])
  const [modalToggle, setModalToggle] = useState(false)

  const paletteCards = palettes.map(palette => {
    return (
      <PaletteCard
        key={palette.mongodb_id}
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
      <SEO title="Palettes" />
      <Layout>
        <Modal modalToggle={modalToggle} setModalToggle={setModalToggle}>
          <PaletteModal palette={currentPalette}>{colors}</PaletteModal>
        </Modal>
        <CardGrid>{paletteCards}</CardGrid>
      </Layout>
    </>
  )
}

export default Palettes

export const query = graphql`
  query PalettesPageQuery {
    allMongodbMainPalettes {
      nodes {
        name
        mongodb_id
        colors
      }
    }
  }
`
