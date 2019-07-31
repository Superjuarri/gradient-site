import React from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

const Wrapper = styled(animated.div)`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.2);
  opacity: ${({ modalOpacity }) => modalOpacity};
  pointer-events: ${({ modalPointerEvent }) => modalPointerEvent};

  cursor: pointer;
`

const Content = styled.div`
  width: 70vw;
  max-width: var(--content-max-width);
  height: 70vh;

  border-radius: 25px;

  background: #fff;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`

const Modal = ({ children, modalToggle, setModalToggle }) => {
  const { o } = useSpring({
    o: modalToggle ? 1 : 0,
    config: {
      mass: 1,
      tension: 1000,
      friction: 70,
    },
  })

  return (
    <Wrapper
      onMouseDown={() => setModalToggle(false)}
      style={{
        opacity: o.interpolate([0, 1], [0, 1]),
        visibility: o.interpolate(o => (o === 0 ? 'hidden' : 'visible')),
      }}
    >
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default Modal
