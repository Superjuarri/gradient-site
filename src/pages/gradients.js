import React, { useState } from 'react'
import 'normalize.css'
import '../styles/style.css'

import Layout from '../components/Layout'
import GradientCardGrid from '../components/GradientCardGrid'
import GradientModal from '../components/GradientModal'

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
    name: 'Atlas',
    degree: 90,
    gradient: ['FEAC5E', 'C779D0', '4BC0C8'],
  },
  {
    key: 13,
    name: 'Shallow Sand',
    degree: 135,
    gradient: ['b5fffc', 'ffdee9'],
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
    degree: 135,
    gradient: ['69EACB', 'EACCF8', '6654F1'],
  },
]

const Gradients = () => {
  const [modalGradient, setModalGradient] = useState(gradients[0])
  const [modalOpacity, setModalOpacity] = useState(0)
  const [modalPointerEvent, setModalPointerEvent] = useState('none')

  return (
    <Layout>
      <GradientCardGrid
        gradients={gradients}
        setModalGradient={setModalGradient}
        setModalOpacity={setModalOpacity}
        setModalPointerEvent={setModalPointerEvent}
      />
      <GradientModal
        gradient={modalGradient}
        modalOpacity={modalOpacity}
        modalPointerEvent={modalPointerEvent}
        setModalOpacity={setModalOpacity}
        setModalPointerEvent={setModalPointerEvent}
      />
    </Layout>
  )
}

export default Gradients
