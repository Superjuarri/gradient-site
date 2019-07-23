import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  position: absolute;
  bottom: 10px;
  right: 6.7vw;

  height: 32px;
  width: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px;
  border: none;
  background: transparent;
`

const Line = styled.div`
  height: 2px;
  width: 20px;
  background-color: ${({ isToggled }) =>
    isToggled ? 'var(--font-color-dark)' : 'var(--font-color-light)'};
  transition: all 0.2s ease;
`

const LineTop = styled(Line)`
  transform: ${({ isToggled }) => (isToggled ? 'rotate(45deg)' : 'none')};
  transform-origin: top left;
  margin-bottom: 5px;
`

const LineMiddle = styled(Line)`
  opacity: ${({ isToggled }) => (isToggled ? 0 : 1)};
  transform: ${({ isToggled }) => (isToggled ? 'translateX(-16px)' : 'none')};
  transform: ${({ isToggled }) => (isToggled ? 'none' : 'block')};
`

const LineBottom = styled(Line)`
  transform: ${({ isToggled }) =>
    isToggled ? 'translateX(-1px) rotate(-45deg)' : 'none'};
  transform-origin: top left;
  margin-top: 5px;
`

const HamburgerIcon = ({ setToggle, isToggled }) => {
  return (
    <Wrapper onClick={() => setToggle(!isToggled)}>
      <LineTop isToggled={isToggled} />
      <LineMiddle isToggled={isToggled} />
      <LineBottom isToggled={isToggled} />
    </Wrapper>
  )
}

export default HamburgerIcon
