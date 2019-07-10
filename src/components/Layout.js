import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Navbar from './Navbar'
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

const Layout = ({ children, documentTitle }) => {
  return (
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{documentTitle}</title>
        <html lang="en" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  )
}

export default Layout
