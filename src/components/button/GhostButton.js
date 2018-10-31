import React from 'react'
import { GhostButton } from './styles/Buttons.style'

const ButtonComponent = props => <GhostButton {...props}>{props.children}</GhostButton>

export default ButtonComponent
