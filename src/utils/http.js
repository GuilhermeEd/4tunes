import axios from 'axios'

const baseURL = 'https://itunes.apple.com'

const instance = axios.create({ baseURL })

export default instance
