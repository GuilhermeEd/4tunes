import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import history from '../../routes/history'
import { BackButton, DisabledClass } from './styles/Buttons.style'

const BackButtonComponent = props => (
  <BackButton
    {...props}
    className={history.length <= 1 && DisabledClass}
    onClick={history.goBack}
    didabled={history.length <= 1}
  >
    <span className='text'><FaChevronLeft style={{ verticalAlign: 'middle' }} /> Voltar</span>
  </BackButton>
)

export default BackButtonComponent
