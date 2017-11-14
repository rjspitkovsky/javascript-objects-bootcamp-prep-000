var playlist = {
  arcticMonkeys: 'arabella',
  linkinPark: 'numb',
  disclosure: 'nocturnal'
}

function updatePlaylist(playlist, artistName, songTitle) {
Object.assign({}, playlist, {artistName: songTitle})
}
