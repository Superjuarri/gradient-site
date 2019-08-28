import React from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'
import Footer from './Footer'

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`

const Content = styled.div`
  flex: 1 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  )
}

export default Layout
