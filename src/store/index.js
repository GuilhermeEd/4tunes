import { combineReducers, applyMiddleware, createStore, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

// Reducers
import songsReducers from './songs/reducers'

// Sagas
import songsSagas from './songs/sagas'

// Combined Reducers
const reducers = combineReducers({
  songs: songsReducers,
  form: formReducer
})

// Root Satga
function * rootSaga () {
  yield all([
    songsSagas()
  ])
}

// Store Configuration
const initialState = {}
const sagaMiddleware = createSagaMiddleware()
const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(reducers, initialState, enhancers)
sagaMiddleware.run(rootSaga)

export default store
