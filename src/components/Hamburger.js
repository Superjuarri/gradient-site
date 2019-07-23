import React, { useState } from 'react'

import HamburgerIcon from './HamburgerIcon'
import HamburgerNav from './HamburgerNav'

const Hamburger = () => {
  const [isToggled, setToggle] = useState(false)

  return (
    <>
      <HamburgerIcon setToggle={setToggle} isToggled={isToggled}>
        {isToggled ? 'Toggled' : 'Not Toggled'}
      </HamburgerIcon>
      {isToggled && <HamburgerNav />}
    </>
  )
}

export default Hamburger
