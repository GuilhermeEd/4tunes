import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/logo/Logo'
import { Page } from './styles/Page.style'

class HomePage extends Component {
  render () {
    return (
      <Page>
        <Logo />
        <Link to='/search' >To Search</Link>
      </Page>
    )
  }
}

export default HomePage
