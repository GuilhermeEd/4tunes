import React from 'react'
import SongCard from '../card/SongCard'
import { List, Text } from './styles/List.style'

const renderSongCards = songs => songs.map(song => <SongCard key={song.trackId} song={song} />)

const SongCardList = ({ songs }) => {
  return songs.length === 0
    ? <Text>Sem resultados</Text>
    : (
      <List>
        {renderSongCards(songs)}
      </List>
    )
}

export default SongCardList
