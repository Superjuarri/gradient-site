import React, { useState } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

const Wrapper = styled(animated.button)`
  min-width: 125px;

  padding: 1rem 1.4rem;
  background: var(--bright_pink);

  font-size: 0.7rem;
  font-weight: 700;
  color: var(--off_white);
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  appearance: none;
  border: none;
  border-radius: 0.6rem;
  box-shadow: 0 10px 20px -10px var(--dull_pink);
  outline: none;
  position: relative;
  z-index: 2;
  cursor: pointer;

  &:hover {
    background: lighten($bright_pink, 2%);
    box-shadow: 0 8px 65px -5px $dull_pink;
  }

  &:active {
    background: $dull_pink;
    box-shadow: 0 10px 60px -10px $dull_pink;
    transform: perspective(250px) scale3d(1, 1, 1) translateY(5%);
  }
`

const Button = ({ children, handleChange }) => {
  const [hover, setHover] = useState(false)

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
      onClick={() => handleChange}
      onFocus={() => setHover(!hover)}
      onBlur={() => setHover(!hover)}
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      style={{ transform: s.interpolate(s => `scale(${s})`) }}
    >
      {children}
    </Wrapper>
  )
}

export default Button
