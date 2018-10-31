import http from '../../utils/http'

const searchEndpoint = '/search'

export const fetchSongs = search => {
  const params = {
    term: search.term,
    entity: 'song'
  }
  return http
    .get(searchEndpoint, { params })
    .then(res => res.data)
    .catch(e => Promise.reject(e))
}

export const fetchSong = id => {
  return http
    .get(`${searchEndpoint}/${id}`)
    .then(res => res.data)
    .catch(e => Promise.reject(e))
}
