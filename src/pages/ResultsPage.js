import React, { Component } from 'react'
import { connect } from 'react-redux'
import SongCardList from '../components/list/SongCardList'
import { Page, Row } from './styles/Page.style'

import Logo from '../components/logo/Logo'

const mapStateToProps = ({ songs }) => ({
  songs: songs.items
})

class ResultsPage extends Component {
  render () {
    return (
      <Page>
        <Row>
          <Logo />
        </Row>
        <Row>
          <SongCardList songs={this.props.songs} />
        </Row>
      </Page>
    )
  }
}

export default connect(mapStateToProps)(ResultsPage)
