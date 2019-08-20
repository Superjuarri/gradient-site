import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

const Wrapper = styled(animated(Link))`
  display: inline-block;
  width: 100%;
  min-width: 125px;

  padding: 1rem 1.4rem;
  background: var(--color-main);

  font-size: 0.8em;
  font-weight: 700;
  color: var(--color-off-white);
  letter-spacing: 0.125rem;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  appearance: none;
  border: none;
  border-radius: 0.6rem;
  box-shadow: 0 10px 20px -10px var(--color-main);
  outline: none;
  position: relative;
  z-index: 2;
  cursor: pointer;

  :hover,
  :focus {
    box-shadow: 0 10px 23px -10px var(--color-main);
  }

  :focus {
    outline: 1px dotted var(--color-main);
  }
`

const ButtonLink = ({ children, to }) => {
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
      to={to}
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

export default ButtonLink
