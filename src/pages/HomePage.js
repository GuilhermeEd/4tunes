import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Page, Row, Col } from './styles/Page.style'

import Logo from '../components/logo/Logo'
import CTAButton from '../components/button/CTAButton'

class HomePage extends Component {
  render () {
    return (
      <Page>
        <Row>
          <Logo />
        </Row>
        <Row>
          <Col>
            <Link to='/search'>
              <CTAButton style={{ margin: '0 auto' }}>
                To Search
              </CTAButton>
            </Link>
          </Col>
        </Row>
      </Page>
    )
  }
}

export default HomePage
