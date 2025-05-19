const express = require('express')
const playlistsController = require('./controllers/playlistsController')

const router = express.Router()

router.get('/', playlistsController.index)
router.get('/playlists', playlistsController.showPlaylists)
router.post('/playlists', playlistsController.createPlaylist)
router.get('/playlists/:id', playlistsController.showPlaylist)
router.put('/playlists/:id', playlistsController.updatePlaylist)
router.delete('/playlists/:id', playlistsController.deletePlaylist)
router.post('/playlists/:id/musics', playlistsController.addMusics)
router.delete('/playlists/:id/musics', playlistsController.deleteMusics)

module.exports = router