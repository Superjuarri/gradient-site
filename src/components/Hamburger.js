import React, { useState } from 'react'
import styled from 'styled-components'

import HamburgerIcon from './HamburgerIcon'
import HamburgerNav from './HamburgerNav'

const Wrapper = styled.div``

const Content = styled.div``

const Hamburger = () => {
  const [isToggled, setToggle] = useState(false)

  return (
    <Wrapper>
      <Content>
        <HamburgerIcon setToggle={setToggle} isToggled={isToggled}>
          {isToggled ? 'Toggled' : 'Not Toggled'}
        </HamburgerIcon>
        {isToggled && <HamburgerNav />}
      </Content>
    </Wrapper>
  )
}

export default Hamburger
