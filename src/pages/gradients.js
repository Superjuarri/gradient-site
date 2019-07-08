import React from 'react'
import 'normalize.css'
import '../styles/style.css'

import Layout from '../components/Layout'
import GradientCardGrid from '../components/GradientCardGrid'

const gradients = [
  {
    key: 1,
    name: 'Cotton Candy',
    degree: 45,
    gradient: ['ffadfb', 'bca6ff', 'cfefff'],
  },
  {
    key: 2,
    name: 'North Miracle',
    degree: 90,
    gradient: ['00dbde', 'fc00ff'],
  },

  {
    key: 3,
    name: 'Hashtag',
    degree: 135,
    gradient: ['ff45e6', 'ff7445'],
  },
  {
    key: 4,
    name: 'Cyano',
    degree: 45,
    gradient: ['69ffe9', '85ffa8'],
  },
  {
    key: 5,
    name: 'Indigo',
    degree: 45,
    gradient: ['4264fb', '5a77fa'],
  },
  {
    key: 6,
    name: 'Soft Fruit',
    degree: 45,
    gradient: ['ff75e3', '8aa9ff'],
  },
  {
    key: 7,
    name: 'Lollipop',
    degree: 135,
    gradient: ['a445b2', 'd41872', 'ff0066'],
  },
  {
    key: 8,
    name: 'Warm Flame',
    degree: 45,
    gradient: ['ff9a9e', 'fad0c4'],
  },
  {
    key: 9,
    name: 'Dusty Grass',
    degree: 45,
    gradient: ['d4fc79', '96e6a1'],
  },
  {
    key: 10,
    name: 'Bubble Gum',
    degree: 45,
    gradient: ['ff758c', 'ff7eb3'],
  },
  {
    key: 11,
    name: 'Near Moon',
    degree: 45,
    gradient: ['5ee7df', 'b490ca'],
  },
  {
    key: 12,
    name: 'Sunset',
    degree: 135,
    gradient: [
      '3f51b1',
      '5a55ae',
      '7b5fac',
      '8f6aae',
      'a86aa4',
      'cc6b8e',
      'f18271',
      'f3a469',
      'f7c978',
    ],
  },
  {
    key: 13,
    name: 'Shallow Sand',
    degree: -45,
    gradient: ['ffdee9', 'b5fffc'],
  },
  {
    key: 14,
    name: 'Salvation',
    degree: 45,
    gradient: ['f43b47', '453a94'],
  },
  {
    key: 15,
    name: 'Kiss',
    degree: 125,
    gradient: ['ff0844', 'ffb199'],
  },
  {
    key: 16,
    name: 'Gagarin',
    degree: -225,
    gradient: ['69EACB', 'EACCF8', '6654F1'],
  },
]

const Gradients = () => {
  return (
    <Layout>
      <GradientCardGrid gradients={gradients}></GradientCardGrid>
    </Layout>
  )
}

export default Gradients
