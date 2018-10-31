import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { compose } from 'redux'

import Search from './Search'

const validate = values => {
  const errors = {}

  if (!values.search) {
    errors.search = 'Campo requerido!'
  }

  return errors
}

class SearchComponent extends Component {
  render () {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <Field
          name='search'
          component={Search}
        />
      </form>
    )
  }
}

const enhance = compose(
  reduxForm({ form: 'search', validate })
)

export default enhance(SearchComponent)
