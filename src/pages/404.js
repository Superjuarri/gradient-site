import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`

const Text404 = styled.h1`
  font-size: 5rem;
  background: linear-gradient(45deg, #00dbde, #fc00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
`

const ReturnHome = styled.p``

const StyledLink = styled(Link)`
  text-decoration: none;
`

const NotFound = () => {
  return (
    <Layout>
      <Wrapper>
        <Content>
          <Text404>404 o:</Text404>
          <ReturnHome>
            Page not found... <br />
            Return <StyledLink to="/">home</StyledLink>.
          </ReturnHome>
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default NotFound
