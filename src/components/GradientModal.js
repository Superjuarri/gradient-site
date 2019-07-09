import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.6);
  opacity: ${({ modalOpacity }) => modalOpacity};
  pointer-events: ${({ modalPointerEvent }) => modalPointerEvent};

  cursor: pointer;
  transition: 0.2s;
`

const Content = styled.div`
  width: 70vw;
  max-width: var(--content-max-width);
  height: 70vh;

  border-radius: 25px;

  background: linear-gradient(
    ${({ degree }) => degree}deg
      ${({ gradient }) => gradient.map(color => `, #${color}`)}
  );

  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`

const GradientModal = ({
  gradient,
  modalOpacity,
  modalPointerEvent,
  setModalOpacity,
  setModalPointerEvent,
}) => {
  return (
    <Wrapper
      onMouseDown={() => {
        setModalOpacity(0)
        setModalPointerEvent('none')
      }}
      modalOpacity={modalOpacity}
      modalPointerEvent={modalPointerEvent}
    >
      <Content
        name={gradient.name}
        degree={gradient.degree}
        gradient={gradient.gradient}
      ></Content>
    </Wrapper>
  )
}

export default GradientModal
