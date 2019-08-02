import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  z-index: 900;
  flex-shrink: 0;

  width: 100vw;
  height: 75px;
  background: #ffffff;

  display: flex;
  align-content: center;
  overflow: hidden;
`

const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  width: var(--width-content);
  max-width: var(--max-width-content);

  color: var(--color-font-light);
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;

  border-top: 1px dashed var(--color-font-light);
`

const Love = styled.p`
  span {
    color: #e31c3d;
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <Love>
          Made with <span>&#9829;</span> in Southern California
        </Love>
      </Content>
    </Wrapper>
  )
}

export default Footer
