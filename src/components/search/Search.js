import React, { Fragment } from 'react'
import { Input } from './styles/Search.style'

import ErrorText from '../text/ErrorText'

const SearchComponent = props => {
  const { touched, error } = props.meta
  return (
    <Fragment>
      <Input
        {...props}
        {...props.input}
      />
      {touched && error && <ErrorText>{error}</ErrorText>}
    </Fragment>
  )
}

export default SearchComponent
