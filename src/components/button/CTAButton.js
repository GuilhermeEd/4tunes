import React from 'react'
import { CTAButton, DisabledClass } from './styles/Buttons.style'

const CTAButtonComponent = props => (
  <CTAButton
    {...props}
    className={props.disabled && DisabledClass}
  >
    {props.children}
  </CTAButton>
)

export default CTAButtonComponent
