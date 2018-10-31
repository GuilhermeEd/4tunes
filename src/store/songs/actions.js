import {
  CLEAR_ERROR,
  FETCH_SONGS,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAILURE,
  FETCH_SONG,
  FETCH_SONG_SUCCESS,
  FETCH_SONG_FAILURE
} from './types'

export const clearError = () => ({
  type: CLEAR_ERROR
})

export const fetchSongs = search => ({
  type: FETCH_SONGS,
  payload: search
})

export const fetchSongsSuccess = songs => ({
  type: FETCH_SONGS_SUCCESS,
  payload: songs
})

export const fetchSongsFailure = error => ({
  type: FETCH_SONGS_FAILURE,
  payload: error
})

export const fetchSong = id => ({
  type: FETCH_SONG,
  payload: id
})

export const fetchSongSuccess = song => ({
  type: FETCH_SONG_SUCCESS,
  payload: song
})

export const fetchSongFailure = error => ({
  type: FETCH_SONG_FAILURE,
  payload: error
})
