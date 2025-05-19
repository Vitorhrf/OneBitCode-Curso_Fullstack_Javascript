let playlists = [
    {
        id: Math.floor(Math.random() * 1_000_000_000),
        name: 'Rock Classics',
        tagList: ['rock', 'classic'],
        musicList: [
            {
                id: Math.floor(Math.random() * 1_000_000_000),
                title: 'Bohemian Rhapsody',
                artist: 'Queen',
                album: 'A Night at the Opera',
                year: 1975
            }
        ]
    },
    {
        id: Math.floor(Math.random() * 1_000_000_000),
        name: 'Chill Vibes',
        tagList: ['chill', 'lofi'],
        musicList: []
    }
]


const playlistModel = {
    newPlaylist(name, tagList, musicList = []) {
        const newPlaylist = {
        id: Math.floor(Math.random() * 1_000_000_000),
        name,
        tagList,
        musicList
    }
        playlists.push(newPlaylist)
        return newPlaylist
    },

    addMusics(id, musics) {
        const playlist = this.getPlaylistByID(id)
        if(!playlist){
            return { message: 'Playlist not found!', status: 404}
        }
        musics.forEach(music => {
            const exists = playlist.musicList.some(m => 
                m.title === music.title &&
                m.artist === music.artist &&
                m.album === music.album &&
                m.year === music.year
            )
        if(!exists){
            playlist.musicList.push({id: Math.floor(Math.random() * 1_000_000_000), title: music.title, year: music.year, artist: music.artist, album: music.album})
        }
        })
        return playlist
    },

    deleteMusics(id, musicsID){
        const playlist = this.getPlaylistByID(id)
        if(!playlist){
            return { message: 'Playlist not found!', status: 404}
        }
        musicsID.forEach(musicID => {
            if(playlist.musicList.some(music => music.id === +musicID)){
                playlist.musicList = playlist.musicList.filter(music => music.id !== +musicID)
            }
        })
        return playlist
    },

    showPlaylists(){
        return playlists
    },

    getPlaylistByID(id){
        return playlists.find(playlist => playlist.id === +id)
    },

    deletePlaylist(id){
        const playlist = this.getPlaylistByID(id)

        if(!playlist){
            return { message: 'Playlist not found!', status: 404}
        }

        playlists = playlists.filter(playlist => playlist.id !== +id)
    },

    updatePlaylist(id, name, tagList) {
        const playlist = this.getPlaylistByID(id)

        if(!playlist){
            return { message: 'Playlist not found!', status: 404}
        }

        if(typeof name === "string"){
            playlist.name = name
        }

        if(Array.isArray(tagList)){
            playlist.tagList = tagList
        }

        return playlist
    }
}

module.exports = playlistModel