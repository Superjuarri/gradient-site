import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  min-height: 100vh;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1;
`

const Layout = props => {
  return (
    <Wrapper>
      <Header></Header>
      <Content>{props.children}</Content>
      <Footer></Footer>
    </Wrapper>
  )
}

export default Layout
