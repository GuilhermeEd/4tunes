import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Page, Row } from './styles/Page.style'

import Logo from '../components/logo/Logo'
import SearchForm from '../components/search/SearchForm'

const mapStateToProps = ({ songs }) => ({
  songs: songs.items
})

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
          <SearchForm />
        </Row>
      </Page>
    )
  }
}

export default connect(mapStateToProps)(SearchPage)
