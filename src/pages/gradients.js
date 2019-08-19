import { graphql } from 'gatsby'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import 'normalize.css'
import '../styles/style.css'

import Layout from '../components/Layout/Layout'

import CardGrid from '../components/CardGrid/CardGrid'
import GradientCard from '../components/CardGrid/GradientCard'
import Modal from '../components/Modal'

const GradientModal = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 11px;
  background: linear-gradient(
    ${({ gradientData }) => gradientData.degree}deg
      ${({ gradientData }) => gradientData.gradient.map(color => `, ${color}`)}
  );
`

const GradientsPage = ({ data }) => {
  const [currentGradient, setCurrentGradient] = useState(
    data.allMongodbMainGradients.nodes[0]
  )
  const [modalToggle, setModalToggle] = useState(false)

  const gradientCards = data.allMongodbMainGradients.nodes.map(gradient => {
    return (
      <GradientCard
        key={gradient.mongodb_id}
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
        <link rel="canonical" href="https://colorsite.netlify.com/" />
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

export const query = graphql`
  query GradientsPageQuery {
    allMongodbMainGradients {
      nodes {
        degree
        gradient
        mongodb_id
        name
      }
    }
  }
`
