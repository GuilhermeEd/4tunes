import React from 'react'
import { Button } from './styles/Button.style'

const ButtonComponent = props => <Button {...props}>{props.children}</Button>

export default ButtonComponent
