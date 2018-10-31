import {
  CLEAR_ERROR,
  FETCH_SONGS,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAILURE,
  FETCH_SONG,
  FETCH_SONG_SUCCESS,
  FETCH_SONG_FAILURE
} from './types'

const initialState = {
  item: null,
  items: [],
  loading: false,
  error: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ERROR:
      return { ...state, error: initialState.error }
    case FETCH_SONG:
      return { ...state, loading: true, item: initialState.item }
    case FETCH_SONG_SUCCESS:
      return { ...state, loading: false, item: action.payload }
    case FETCH_SONG_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case FETCH_SONGS:
      return { ...state, loading: true, items: initialState.item }
    case FETCH_SONGS_SUCCESS:
      return { ...state, loading: false, items: action.payload }
    case FETCH_SONGS_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
