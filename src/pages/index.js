import React from 'react'
import styled from 'styled-components'
import 'normalize.css'
import '../styles/style.css'

import SEO from '../components/SEO'

import gooch from '../assets/images/goochIcon.png'
import Layout from '../components/Layout/Layout'
import ButtonLink from '../components/Buttons/ButtonLink'

const screenRatio = '210/200'

const Wrapper = styled.div`
  flex: 1 0 auto;

  width: var(--width-content);
  max-width: var(--max-width-content);
  height: 100%;

  display: grid;
  grid-template-columns: 50% 50%;
  grid-auto-rows: 100%;

  @media (max-aspect-ratio: ${screenRatio}) {
    grid-template-rows: 50% 50%;
    grid-template-columns: 100%;
  }
`

const Content = styled.div`
  position: relative;
  align-self: center;
  justify-self: center;

  @media (max-aspect-ratio: ${screenRatio}) {
    margin-bottom: 5vw;
    align-self: end;
    justify-self: center;
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

  img {
    width: 60%;
    min-width: 225px;

    @media (max-aspect-ratio: ${screenRatio}) {
      width: 40%;
    }
  }
`

const Index = () => {
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
            <img src={gooch} alt="Vinnie the Gooch" />
          </Background>
        </Wrapper>
      </Layout>
    </>
  )
}

export default Index
