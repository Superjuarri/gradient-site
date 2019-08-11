import React, { useState } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

const Wrapper = styled(animated.button)`
  min-width: 125px;

  padding: 1rem 1.4rem;
  background: var(--color-main);

  font-size: 0.8em;
  font-weight: 700;
  color: var(--color-off-white);
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  appearance: none;
  border: none;
  border-radius: 0.6rem;
  box-shadow: 0 10px 20px -10px var(--color-main);
  outline: none;
  position: relative;
  z-index: 2;
  cursor: pointer;

  &:hover {
    box-shadow: 0 10px 23px -10px var(--color-main);
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
