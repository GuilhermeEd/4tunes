import React from 'react'
import { Button, DisabledClass } from './styles/Buttons.style'

const ButtonComponent = props => (
  <Button
    {...props}
    className={props.disabled && DisabledClass}
  >
    {props.children}
  </Button>
)

export default ButtonComponent
