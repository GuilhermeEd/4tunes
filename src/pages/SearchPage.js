import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ songs }) => ({
  songs: songs.items
})

class SearchPage extends Component {
  render () {
    return (
      <p>SearchPage</p>
    )
  }
}

export default connect(mapStateToProps)(SearchPage)
