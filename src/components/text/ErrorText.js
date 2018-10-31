import React from 'react'
import { Error } from './styles/Texts.style'

const ErrorText = ({ children }) => children && <Error>* {children}</Error>

export default ErrorText
