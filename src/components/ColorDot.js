import React, { useState } from 'react'
import styled from 'styled-components'

import { useClipboard } from 'use-clipboard-copy'

const Wrapper = styled.div`
  display: block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #${({ color }) => color};
  box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  cursor: pointer;
`

const Tag = styled.span`
  position: relative;
  padding: 0.25rem 2.75rem;
  right: 175%;
  bottom: 155%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 0.2rem;
  box-shadow: 0px 3px 10px 0px rgba(156, 174, 191, 0.6);
  z-index: 100;

  opacity: ${({ tagOpacity }) => tagOpacity};
  pointer-events: ${({ tagPointerEvent }) => tagPointerEvent};

  transition: 0.2s;
`

const ColorDot = ({ color }) => {
  const [tagOpacity, setTagOpacity] = useState(0)
  const [tagPointerEvent, setTagPointerEvent] = useState('none')

  const clipboard = useClipboard({
    copiedTimeout: 1000, // timeout duration in milliseconds
  })

  return (
    <Wrapper
      onClick={() => clipboard.copy(color)}
      onMouseEnter={() => {
        setTagOpacity(1)
        setTagPointerEvent('auto')
      }}
      onMouseLeave={() => {
        setTagOpacity(0)
        setTagPointerEvent('none')
      }}
      color={color}
    >
      <Tag tagOpacity={tagOpacity} tagPointerEvent={tagPointerEvent}>
        {clipboard.copied ? 'Copied' : `#${color}`.toLowerCase()}
      </Tag>
    </Wrapper>
  )
}

export default ColorDot
