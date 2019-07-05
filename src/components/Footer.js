import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  width: 100vw;
  height: 100px;

  display: flex;
  align-content: center;

  background: #404040;
  overflow: hidden;
`

const Content = styled.div`
  margin: 0 auto;
  display: flex;

  width: var(--content-width);
  max-width: var(--content-max-width);

  justify-content: center;
  align-items: center;

  color: #ffffff;
`

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <h3>Footer</h3>
      </Content>
    </Wrapper>
  )
}

export default Footer
