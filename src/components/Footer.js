import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  width: 100vw;
  height: 75px;

  display: flex;
  align-content: center;
  overflow: hidden;
`

const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  width: var(--content-width);
  max-width: var(--content-max-width);

  color: var(--font-color-light);
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;

  border-top: 1px dashed var(--font-color-light);
`

const Love = styled.p`
  span {
    color: #ff0000;
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
