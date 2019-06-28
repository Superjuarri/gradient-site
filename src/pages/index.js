import React from 'react'
import styled from 'styled-components'
import 'normalize.css'
import '../styles/vars.css'

import Layout from '../components/Layout'

import gooch from '../media/images/gooch.jpg'

const ImageGrid = styled.div`
  width: var(--content-width);
  max-width: var(--content-max-width);
  margin: 0 auto;

  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: space-between;
`

const GoochImg = styled.img`
  width: 100%;
`

const a = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10]

const Index = () => {
  return (
    <Layout>
      <ImageGrid>
        {a.map(i => {
          return (
            <GoochImg src={gooch} alt="Vinnie the Gooch" key={i}></GoochImg>
          )
        })}
      </ImageGrid>
    </Layout>
  )
}

export default Index
