import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { IoMdMusicalNote } from 'react-icons/io'
import { Page, Row, Col, Text } from './styles/Page.style'

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
          <Text>Welcome to 4tunes!</Text>
        </Row>
        <Row>
          <Text>This project was made as a challenge to demonstrate and exercise Front-End development skills.</Text>
        </Row>
        <Row>
          <Text>It is integrated with iTunes API and fully functional. Feel free to stay and explore for how long you want.</Text>
        </Row>
        <Row>
          <Text>Enjoy!</Text>
        </Row>
        <Row>
          <Col>
            <Link to='/search'>
              <CTAButton>
                <IoMdMusicalNote style={{ verticalAlign: 'middle' }} /> find a song
              </CTAButton>
            </Link>
          </Col>
        </Row>
      </Page>
    )
  }
}

export default HomePage
