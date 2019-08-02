import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import styled from 'styled-components'
import 'normalize.css'
import '../styles/style.css'

import Layout from '../components/Layout'

import Button from '../components/Button'

const Wrapper = styled.div`
  flex-grow: 1;
  width: var(--width-content);
  max-width: var(--max-width-content);
  height: 100%;

  display: grid;
`

const Content = styled.div`
  position: absolute;

  align-self: center;
`
const Title = styled.h1`
  color: var(--font-color-dark);
  font-size: 2.5rem;
  white-space: nowrap;
`
const SubTitle = styled.p`
  max-width: 430px;
  font-size: 1rem;
  white-space: nowrap;
`
const Buttons = styled.div`
  white-space: nowrap;
  a {
    margin-right: 20px;
  }
`

const Background = styled.div`
  position: relative;
  width: var(--width-content);
  height: 100%;
  pointer-events: none;
  user-select: none;
`

const Index = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Color Site | Home</title>
        <html lang="en" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Layout>
        <Wrapper>
          <Background></Background>
          <Content>
            <Title>
              Palettes and Gradients <br />
              Just for You
            </Title>
            <SubTitle>
              Seek out insparation and integrate color palettes & <br />
              gradients into your own projects.
            </SubTitle>
            <Buttons>
              <Link to="/palettes">
                <Button>Palettes</Button>
              </Link>
              <Link to="/gradients">
                <Button>Gradients</Button>
              </Link>
            </Buttons>
          </Content>
        </Wrapper>
      </Layout>
    </>
  )
}

export default Index
