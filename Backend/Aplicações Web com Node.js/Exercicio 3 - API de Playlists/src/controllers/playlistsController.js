const playlistModel = require('../models/playlistsModel')

const playlistsController = {
    
    // GET /
    index: (req, res) => {
        res.json({message: 'Home'})
    },

    // GET /playlists
    showPlaylists: (req, res) =>{
        res.json(playlistModel.showPlaylists())
    },

    // POST /playlists
    createPlaylist: (req, res) => {
        const { name, tagList, musicList } = req.body
        if(!name || !tagList){
            return res.status(400).json({message: 'Campos obrigatórios "name" e "tagList" não foram fornecidos.'})
        }

        if(!Array.isArray(tagList)){
            return res.status(400).json({ message: '"tagList" deve ser um array.'})
        }

        const playlist = playlistModel.newPlaylist(name, tagList, musicList)
        
        res.status(201).json({ message: 'Playlist criada com sucesso!', playlist: playlist})
    },

    // GET /playlists/:id
    showPlaylist: (req, res) => {
        const { id } = req.params

        if(!id){
            return res.status(400).json({ message: '"id" não informado.'})
        }
        const playlist = playlistModel.getPlaylistByID(id)
        if(!playlist){
            return res.status(404).json({ message: 'Playlist not found!'})
        }
        res.status(200).json(playlist)
    },

    // PUT /playlists/:id
    updatePlaylist: (req, res) => {
        const { id } = req.params
        const { name, tagList } = req.body
        if(!id){
            return res.status(400).json({ message: '"id" não informado.'})
        }
        if(!name && !tagList){
            return res.status(400).json({ message: 'Nenhum parametro enviado para realizar alterações.'})
        }

        const playlist = playlistModel.updatePlaylist(id, name, tagList)
        res.status(200).json(playlist)
    },

    // DELETE /playlists/:id
    deletePlaylist: (req, res) => {
        const { id } = req.params
        if(!id){
            return res.status(400).json({ message: '"id" não informado.'})
        }
        const result = playlistModel.deletePlaylist(id)
        if(result?.status === 404){
            return res.status(404).json({ message: result.message})
        }

        res.status(200).json({message: 'Playlist deletada com sucesso!'})
    },

    // POST /playlists/:id/musics
    addMusics: (req, res) => {
        const { id } = req.params
        const { musics } = req.body
        if(!id){
            return res.status(400).json({ message: '"id" não informado.'})
        }
        if(!Array.isArray(musics)){
            return res.status(400).json({ message: '"musics" deve ser um Array!'})
        }
        const playlist = playlistModel.addMusics(id, musics)
        if(playlist?.status === 404){
            return res.status(404).json({ message: playlist.message})
        }
        res.status(200).json({ message: 'Musicas adicionadas com sucesso!', playlist: playlist})
    },

    // DELETE /playlists/:id/musics
    deleteMusics: (req, res) => {
        const { id } = req.params
        const { musicsID } = req.body
        if(!id){
            return res.status(400).json({ message: '"id" não informado.'})
        }
        if(!Array.isArray(musicsID)){
            return res.status(400).json({ message: '"musicsID" deve ser um Array!'})
        }
        const playlist = playlistModel.deleteMusics(id, musicsID)
        if(playlist?.status === 404){
            return res.status(404).json({ message: playlist.message})
        }
        res.status(200).json({ message: 'Musicas excluidas com sucesso!', playlist: playlist})
    }
}

module.exports = playlistsController