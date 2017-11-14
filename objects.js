var playlist = {
  arcticMonkeys: 'arabella',
  linkinPark: 'numb',
  disclosure: 'nocturnal'
}

function updatePlaylist(playlist, artistName, songTitle) {
playlist[artistName] = songTitle
return playlist
}
