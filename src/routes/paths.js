import HomePage from '../pages/HomePage'
import SearchPage from '../pages/SearchPage'
import ArtistPage from '../pages/ArtistPage'

const paths = [
  {
    path: '/',
    component: HomePage,
    default: true,
    exact: true
  },
  {
    path: '/search',
    component: SearchPage,
    default: true,
    exact: true
  },
  {
    path: '/artist',
    component: ArtistPage,
    default: true,
    exact: true
  }
]

export default paths
