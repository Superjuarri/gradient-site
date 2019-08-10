import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import 'normalize.css'
import '../styles/style.css'

import Layout from '../components/Layout'

import CardGrid from '../components/CardGrid'
import GradientCard from '../components/GradientCard'
import Modal from '../components/Modal'

const gradients = [
  {
    name: 'Cotton Candy',
    degree: 45,
    gradient: ['#ffadfb', '#bca6ff', '#cfefff'],
  },
  {
    name: 'North Miracle',
    degree: 135,
    gradient: ['#00dbde', '#fc00ff'],
  },

  {
    name: 'Hashtag',
    degree: 135,
    gradient: ['#ff45e6', '#ff7445'],
  },
  {
    name: 'Cyano',
    degree: 45,
    gradient: ['#69ffe9', '#85ffa8'],
  },
  {
    name: 'Indigo',
    degree: 45,
    gradient: ['#4264fb', '#5a77fa'],
  },
  {
    name: 'Soft Fruit',
    degree: 45,
    gradient: ['#ff75e3', '#8aa9ff'],
  },
  {
    name: 'Lollipop',
    degree: 135,
    gradient: ['#a445b2', '#d41872', '#ff0066'],
  },
  {
    name: 'Warm Flame',
    degree: 45,
    gradient: ['#ff9a9e', '#fad0c4'],
  },
  {
    name: 'Dusty Grass',
    degree: 45,
    gradient: ['#d4fc79', '#96e6a1'],
  },
  {
    name: 'Bubble Gum',
    degree: 45,
    gradient: ['#ff758c', '#ff7eb3'],
  },
  {
    name: 'Near Moon',
    degree: 45,
    gradient: ['#5ee7df', '#b490ca'],
  },
  {
    name: 'Atlas',
    degree: 135,
    gradient: ['#FEAC5E', '#C779D0', '#4BC0C8'],
  },
  {
    name: 'Shallow Sand',
    degree: 135,
    gradient: ['#b5fffc', '#ffdee9'],
  },
  {
    name: 'Salvation',
    degree: 45,
    gradient: ['#f43b47', '#453a94'],
  },
  {
    name: 'Kiss',
    degree: 125,
    gradient: ['#ff0844', '#ffb199'],
  },
  {
    name: 'Gagarin',
    degree: 135,
    gradient: ['#69EACB', '#6654F1'],
  },
  {
    name: 'Cotton Candy',
    degree: 45,
    gradient: ['#ffadfb', '#bca6ff', '#cfefff'],
  },
  {
    name: 'North Miracle',
    degree: 135,
    gradient: ['#00dbde', '#fc00ff'],
  },

  {
    name: 'Hashtag',
    degree: 135,
    gradient: ['#ff45e6', '#ff7445'],
  },
  {
    name: 'Cyano',
    degree: 45,
    gradient: ['#69ffe9', '#85ffa8'],
  },
  {
    name: 'Indigo',
    degree: 45,
    gradient: ['#4264fb', '#5a77fa'],
  },
  {
    name: 'Soft Fruit',
    degree: 45,
    gradient: ['#ff75e3', '#8aa9ff'],
  },
  {
    name: 'Lollipop',
    degree: 135,
    gradient: ['#a445b2', '#d41872', '#ff0066'],
  },
  {
    name: 'Warm Flame',
    degree: 45,
    gradient: ['#ff9a9e', '#fad0c4'],
  },
  {
    name: 'Dusty Grass',
    degree: 45,
    gradient: ['#d4fc79', '#96e6a1'],
  },
  {
    name: 'Bubble Gum',
    degree: 45,
    gradient: ['#ff758c', '#ff7eb3'],
  },
  {
    name: 'Near Moon',
    degree: 45,
    gradient: ['#5ee7df', '#b490ca'],
  },
  {
    name: 'Atlas',
    degree: 135,
    gradient: ['#FEAC5E', '#C779D0', '#4BC0C8'],
  },
  {
    name: 'Shallow Sand',
    degree: 135,
    gradient: ['#b5fffc', '#ffdee9'],
  },
  {
    name: 'Salvation',
    degree: 45,
    gradient: ['#f43b47', '#453a94'],
  },
  {
    name: 'Kiss',
    degree: 125,
    gradient: ['#ff0844', '#ffb199'],
  },
  {
    name: 'Gagarin',
    degree: 135,
    gradient: ['#69EACB', '#6654F1'],
  },
]

const GradientModal = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 11px;
  background: linear-gradient(
    ${({ gradientData }) => gradientData.degree}deg
      ${({ gradientData }) => gradientData.gradient.map(color => `, ${color}`)}
  );
`

const GradientsPage = () => {
  const [currentGradient, setCurrentGradient] = useState(gradients[0])
  const [modalToggle, setModalToggle] = useState(false)

  const gradientCards = gradients.map((gradient, index) => {
    return (
      <GradientCard
        key={index}
        gradientData={gradient}
        setModalToggle={setModalToggle}
        setCurrentGradient={setCurrentGradient}
      ></GradientCard>
    )
  })

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Color Site | Gradients</title>
        <html lang="en" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Layout documentTitle="Gradient Site - Gradients">
        <Modal modalToggle={modalToggle} setModalToggle={setModalToggle}>
          <GradientModal gradientData={currentGradient} />
        </Modal>
        <CardGrid>{gradientCards}</CardGrid>
      </Layout>
    </>
  )
}

export default GradientsPage
