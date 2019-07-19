import React, { useState } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

import { useClipboard } from 'use-clipboard-copy'

const Wrapper = styled.div`
  margin-right: 8px;
  display: block;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  background-color: #${({ color }) => color};
  box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  cursor: pointer;
`

const Tag = styled(animated.span)`
  position: relative;
  right: calc(2.75rem / 1.28);
  bottom: 2.25rem;
  padding: 0.25rem 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 0.2rem;
  box-shadow: 0px 3px 10px 0px rgba(156, 174, 191, 0.6);
  z-index: 100;
  pointer-events: none;
`

const ColorDot = ({ color }) => {
  const clipboard = useClipboard({ copiedTimeout: 1000 })

  const [hover, setHover] = useState(false)
  const tagHover = useSpring({
    opacity: hover ? 1 : 0,
    visibility: hover ? 'visible' : 'hidden',
    transform: hover ? 'translate3d(0, 0, 0)' : 'translate3d(0, 50%, 0)',
  })

  return (
    <Wrapper
      onClick={() => clipboard.copy(color)}
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      color={color}
    >
      <Tag style={tagHover}>
        {clipboard.copied ? 'Copied' : `#${color}`.toLowerCase()}
      </Tag>
    </Wrapper>
  )
}

export default ColorDot
