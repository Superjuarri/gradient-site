import React from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

const Wrapper = styled(animated.div)`
  margin: 30px 0;
  width: var(--content-width);
  max-width: var(--content-max-width);

  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-auto-rows: 220px;
`

const CardGrid = ({ children }) => {
  const { o, xyz } = useSpring({
    from: { o: 0, xyz: [0, 150, 0] },
    o: 1,
    xyz: [0, 0, 0],
    config: {
      mass: 5,
      tension: 550,
      friction: 100,
    },
  })

  return (
    <Wrapper
      style={{
        transform: xyz.interpolate(
          (x, y, z) => `translate3d(${x}px, ${y}vh, ${z}px)`
        ),
        opacity: o.interpolate([0, 0.8, 1], [0, 0.3, 1]),
      }}
    >
      {children}
    </Wrapper>
  )
}

export default CardGrid
