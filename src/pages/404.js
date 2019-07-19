import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import 'normalize.css'
import '../styles/style.css'

import Layout from '../components/Layout'

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: var(--content-width);
  max-width: var(--content-max-width);
  height: 82.5vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`

const StyledLink = styled(Link)`
  min-width: 75px;

  color: var(--font-color);
  font-weight: 700;
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
    <Layout documentTitle="Gradient Site - 404 error...">
      <Wrapper>
        <Content>
          <Text404>
            Page Not
            <br /> Found...
          </Text404>
          <StyledLink to="/">Return Home</StyledLink>
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default NotFound
