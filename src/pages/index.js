import React from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'
import 'normalize.css'
import '../styles/style.css'

import { useGradientData } from '../hooks/useGradientData'
import { usePaletteData } from '../hooks/usePaletteData'

import SEO from '../components/SEO'

import Layout from '../components/Layout/Layout'
import ButtonLink from '../components/Buttons/ButtonLink'

import GradientCard from '../components/CardGrid/GradientCard'
import PaletteCard from '../components/CardGrid/PaletteCard'

const screenRatio = '210/200'

const Wrapper = styled.div`
  flex: 1 0 auto;

  width: var(--width-content);
  max-width: var(--max-width-content);
  height: 100%;

  display: grid;
  grid-template-columns: 45% 55%;
  grid-auto-rows: 100%;

  margin-bottom: 50px;

  @media (max-aspect-ratio: ${screenRatio}) {
    grid-template-rows: 50% 45%;
    grid-template-columns: 100%;
  }
`

const Content = styled.div`
  position: relative;
  align-self: center;
  justify-self: center;

  @media (max-aspect-ratio: ${screenRatio}) {
    text-align: center;
  }
`
const Title = styled.h1`
  color: var(--color-font-dark);
  font-size: 2.5em;
  white-space: nowrap;
`
const SubTitle = styled.p`
  margin-bottom: 2.5vh;
  max-width: 430px;
  font-size: 1.2em;
  white-space: nowrap;
`
const Buttons = styled.div`
  display: flex;
  flex-direction: row;

  a:first-child {
    margin-right: 20px;
  }
`

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Grid = styled(animated.div)`
  z-index: -100;
  width: 40%;
  min-width: 250px;
  max-width: 700px;

  position: absolute;
  display: grid;
  gap: 10%;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));

  @media (max-aspect-ratio: ${screenRatio}) {
    transform: rotate(90deg);
  }
`

const CardStrip = styled(animated.div)`
  display: grid;
  gap: 1%;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(200px, 1fr);
`

const Index = () => {
  const { o } = useSpring({
    from: { o: 0 },
    o: 1,
    config: {
      mass: 5,
      tension: 550,
      friction: 100,
    },
  })

  const { xyz } = useSpring({
    from: { xyz: [0, -150, 0] },
    xyz: [0, 0, 0],
    config: {
      mass: 1500,
      tension: 150,
      friction: 350,
    },
    reset: true,
  })

  const { abc } = useSpring({
    from: { abc: [0, 0, 0] },
    abc: [0, -100, 0],
    config: {
      mass: 1500,
      tension: 150,
      friction: 350,
    },
    reset: true,
  })

  const { allMongodbMainGradients } = useGradientData()
  const gradients = allMongodbMainGradients.nodes
  const gradientCards = gradients.map(gradient => {
    return (
      <GradientCard
        key={gradient.mongodb_id}
        gradientData={gradient}
      ></GradientCard>
    )
  })

  const { allMongodbMainPalettes } = usePaletteData()
  const palettes = allMongodbMainPalettes.nodes
  const paletteCards = palettes.map(palette => {
    return (
      <PaletteCard key={palette.mongodb_id} paletteData={palette}></PaletteCard>
    )
  })

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Wrapper>
          <Content>
            <Title>
              Palettes and Gradients <br />
              Just for You
            </Title>
            <SubTitle>
              Seek out inspiration and integrate color palettes & <br />
              gradients into your own projects.
            </SubTitle>
            <Buttons>
              <ButtonLink to="/palettes">Palettes</ButtonLink>
              <ButtonLink to="/gradients">Gradients</ButtonLink>
            </Buttons>
          </Content>
          <Background>
            <Grid
              style={{
                opacity: o.interpolate([0, 0.8, 1], [0, 0.3, 1]),
              }}
            >
              <CardStrip
                style={{
                  transform: xyz.interpolate(
                    (x, y, z) => `translate3d(${x}px, ${y}vh, ${z}px)`
                  ),
                }}
              >
                {gradientCards}
              </CardStrip>
              <CardStrip
                style={{
                  transform: abc.interpolate(
                    (a, b, c) => `translate3d(${a}px, ${b}vh, ${c}px)`
                  ),
                }}
              >
                {paletteCards}
              </CardStrip>
            </Grid>
          </Background>
        </Wrapper>
      </Layout>
    </>
  )
}

export default Index
