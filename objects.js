var playlist = {
  arcticMonkeys: 'arabella'
  linkinPark: 'numb'
  disclosure: 'nocturnal'
}

function updatePlaylist(object,string,title) {
Object.assign({}, object, {string: title})
}
