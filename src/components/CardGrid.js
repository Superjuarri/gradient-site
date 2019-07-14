import React from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  justify-content: center;
`

const Content = styled(animated.div)`
  width: var(--content-width);
  max-width: var(--content-max-width);

  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-auto-rows: 200px;
  margin: 30px 0;
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
    <Wrapper>
      <Content
        style={{
          transform: xyz.interpolate(
            (x, y, z) => `translate3d(${x}px, ${y}vh, ${z}px)`
          ),
          opacity: o.interpolate([0, 0.8, 1], [0, 0.3, 1]),
        }}
      >
        {children}
      </Content>
    </Wrapper>
  )
}

export default CardGrid
