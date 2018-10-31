export const errorToMessage = (error, genericMessage) => {
  const messages = error.response
    ? error.response.data.errors.map(err => err.description)
    : [error.message]

  const status = error.response
    ? error.response.status
    : error.status

  const messageErrors = {
    'Custom server message': 'Custom client message'
  }

  const statusErrors = {
    400: 'Invalid request',
    401: 'Invalid credentials',
    403: 'Invalid access rights',
    404: 'Nothing was found',
    500: 'Server error'
  }

  // always using first error. This way the user can handle one error message at a time
  const currentMessageError = messageErrors[messages[0]]

  return currentMessageError || statusErrors[status] || genericMessage || 'Oops! Something went wrong'
}
