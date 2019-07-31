import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

const Tools = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Color Site | Tools</title>
        <html lang="en" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Layout>
        <h2>Tools Page</h2>
      </Layout>
    </>
  )
}

export default Tools
