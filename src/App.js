import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes/Routes'
import history from './routes/history'
import './styles/App.scss'

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
)

export default App
