import React from 'react'
import { Card, Thumbnail, Info, Artist, Track } from './styles/Card.style'

const SongCard = ({ song }) => {
  const {
    artworkUrl100: thumbnail,
    artistName: artist,
    trackName: track
  } = song
  return (
    <Card>
      <Thumbnail src={thumbnail} alt='Thumbnail' />
      <Info>
        <Artist>Artist: {artist}</Artist>
        <Track>Track: {track}</Track>
      </Info>
    </Card>
  )
}

export default SongCard
