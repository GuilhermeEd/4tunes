import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux'
import { Form } from './styles/Form.style'

import Search from './Search'
import GhostButton from '../button/GhostButton'

const validate = values => {
  const errors = {}

  if (!values.search) {
    errors.search = 'Campo requerido!'
  }

  return errors
}

class SearchForm extends Component {
  render () {
    const { handleSubmit } = this.props

    return (
      <Form onSubmit={handleSubmit}>
        <Field
          name='search'
          component={Search}
          placeholder='Type a song, album or artist name'
        />
        <GhostButton style={{ marginTop: '1rem' }}>search</GhostButton>
      </Form>
    )
  }
}

const enhance = compose(
  reduxForm({ form: 'search', validate })
)

export default enhance(SearchForm)
