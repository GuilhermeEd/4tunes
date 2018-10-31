import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux'
import { Form } from './styles/Form.style'

import Search from '../search/Search'
import GhostButton from '../button/GhostButton'

const mapStateToProps = ({ songs }) => ({
  loading: songs.loading
})

const validate = values => {
  const errors = {}

  if (!values.term) {
    errors.term = 'Campo requerido!'
  }

  return errors
}

class SearchForm extends Component {
  render () {
    const { loading, handleSubmit, onSubmit } = this.props

    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name='term'
          component={Search}
          placeholder='Type a song, album or artist name'
        />
        <GhostButton
          disabled={loading}
        >
          search
        </GhostButton>
      </Form>
    )
  }
}

const enhance = compose(
  connect(mapStateToProps),
  reduxForm({ form: 'search', validate })
)

export default enhance(SearchForm)
