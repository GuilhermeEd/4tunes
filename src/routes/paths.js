import HomePage from '../pages/HomePage'
import SearchPage from '../pages/SearchPage'
import ResultsPage from '../pages/ResultsPage'
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
    exact: true
  },
  {
    path: '/results',
    component: ResultsPage,
    exact: true
  },
  {
    path: '/artist',
    component: ArtistPage,
    exact: true
  }
]

export default paths
