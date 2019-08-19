import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import styled from 'styled-components'
import 'normalize.css'
import '../styles/style.css'

import Layout from '../components/Layout/Layout'
import Button from '../components/Buttons/Button'

const Content = styled.div`
  width: var(--content-width);
  max-width: var(--content-max-width);
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`

const Text404 = styled.h1`
  margin-top: 0;
  white-space: nowrap;
  font-size: 4.5rem;
  background: linear-gradient(45deg, #00dbde, #fc00ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
  text-shadow: 0 3px 3px rgba(255, 255, 255, 0.5);
`

const NotFound = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Color Site | Color</title>
        <html lang="en" />
        <link rel="canonical" href="https://colorsite.netlify.com/" />
      </Helmet>
      <Layout>
        <Content>
          <Text404>
            Page Not
            <br /> Found...
          </Text404>
          <Link to="/">
            <Button>Home</Button>
          </Link>
        </Content>
      </Layout>
    </>
  )
}

export default NotFound
