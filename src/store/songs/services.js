import http from '../../utils/http'

const searchEndpoint = '/search'

export const fetchSongs = pagination => {
  return http
    .get(searchEndpoint)
    .then(res => res.data)
    .catch(e => Promise.reject(e))
}

export const fetchSong = id => {
  return http
    .get(`${searchEndpoint}/${id}`)
    .then(res => res.data)
    .catch(e => Promise.reject(e))
}
