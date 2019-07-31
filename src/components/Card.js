import React, { useState } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

const Wrapper = styled(animated.div)`
  width: 100%;
  height: 100%;

  border-radius: 0.4rem;
`

const Card = ({ children }) => {
  const [hover, setHover] = useState(false)

  const { hvbsoHVBSO } = useSpring({
    hvbsoHVBSO: hover
      ? [0, 20, 25, -5, 0.25, 0, 10, 10, -5, 0.25]
      : [0, 10, 15, -3, 0.35, 0, 4, 15, -2, 0.35],
    config: {
      mass: 1,
      tension: 700,
      friction: 50,
    },
  })

  const { s } = useSpring({
    s: hover ? 1.06 : 1,
    config: {
      mass: 1,
      tension: 1000,
      friction: 50,
    },
  })

  return (
    <Wrapper
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      style={{
        boxShadow: hvbsoHVBSO.interpolate(
          (h, v, b, s, o, H, V, B, S, O) =>
            `${h}px ${v}px ${b}px ${s}px rgba(0, 0, 0, ${o}),
             ${H}px ${V}px ${B}px ${S}px rgba(0, 0, 0, ${O})`
        ),
        transform: s.interpolate(s => `scale(${s})`),
      }}
    >
      {children}
    </Wrapper>
  )
}

export default Card
