import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Page, Row } from './styles/Page.style'
import { fetchSongs } from '../store/songs/actions'

import Logo from '../components/logo/Logo'
import SearchForm from '../components/form/SearchForm'
import BackButton from '../components/button/BackButton'

const mapStateToProps = ({ songs }) => ({
  songs: songs.items
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchSongs
  }, dispatch)

class SearchPage extends Component {
  render () {
    return (
      <Page>
        <Row>
          <Logo />
        </Row>
        <Row>
          Type in something to find songs, albums and artists corresponding to your search.
        </Row>
        <Row>
          <SearchForm onSubmit={this.props.fetchSongs} />
        </Row>
        <BackButton />
      </Page>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
