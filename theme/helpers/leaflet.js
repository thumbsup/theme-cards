
module.exports = function (album) {
  const entries = transform(album)
  return JSON.stringify(entries)
}

function transform (album) {
  return album.files.map(f => {
    return {
      id: f.id,
      lat: f.meta.lat,
      lng: f.meta.long,
      url: f.urls.download,
      caption: f.meta.caption || f.name,
      thumbnail: f.urls.thumbnail,
      video: null
    }
  })
}
