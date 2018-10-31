import React from 'react'
import { Button } from './styles/Buttons.style'

const ButtonComponent = props => <Button {...props}>{props.children}</Button>

export default ButtonComponent
