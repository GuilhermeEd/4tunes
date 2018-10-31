import { all, call, takeLatest, put } from 'redux-saga/effects'
import { errorToMessage } from '../../helpers/errorHelper'

import * as actions from './actions'
import * as types from './types'
import * as services from './services'

export function * fetchSongs ({ payload }) {
  try {
    const songs = yield call(services.fetchSongs, payload)
    yield put(actions.fetchSongsSuccess(songs))
  } catch (error) {
    const message = errorToMessage(error)
    yield put(actions.fetchSongsFailure(message))
  }
}

export function * fetchSong ({ payload }) {
  try {
    const song = yield call(services.fetchSong, payload)
    yield put(actions.fetchSongSuccess(song))
  } catch (error) {
    const message = errorToMessage(error)
    yield put(actions.fetchSongFailure(message))
  }
}

// Watchers
export function * watchFetchSongs () {
  yield takeLatest(types.FETCH_SONGS, fetchSongs)
}

export function * watchFetchSong () {
  yield takeLatest(types.FETCH_SONG, fetchSong)
}

export default function * () {
  yield all([
    watchFetchSongs(),
    watchFetchSong()
  ])
}
