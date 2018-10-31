import React from 'react'
import { GhostButton, DisabledClass } from './styles/Buttons.style'

const GhostButtonComponent = props => (
  <GhostButton
    {...props}
    className={props.disabled && DisabledClass}
  >
    {props.children}
  </GhostButton>
)

export default GhostButtonComponent
