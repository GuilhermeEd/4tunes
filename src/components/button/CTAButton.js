import React from 'react'
import { CTAButton } from './styles/Button.style'

const ButtonComponent = props => <CTAButton {...props}>{props.children}</CTAButton>

export default ButtonComponent
