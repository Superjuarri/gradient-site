import React from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'
import Footer from './Footer'

const Wrapper = styled.div`
  width: 100vw;

  display: flex;
  position: absolute;
  min-height: 100vh;
  flex-direction: column;
  overflow: hidden;
`

const Content = styled.div`
  flex: 1;
`

const Layout = props => {
  return (
    <Wrapper>
      <Navbar></Navbar>
      <Content>{props.children}</Content>
      <Footer></Footer>
    </Wrapper>
  )
}

export default Layout
