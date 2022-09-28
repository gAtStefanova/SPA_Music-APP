import { del, get, post, put } from "./api.js";



export async function getAllAlbums() {
    return get("/data/albums?sortBy=_createdOn%20desc&distinct=name");
  }
  export async function createAlbum(album) {
    return post("/data/albums", album);
  }
  export async function getAlbumById(id) {
    return get("/data/albums/" + id);
  }
  export async function updateAlbum(id,album){
    return put('/data/albums/'+id,album)
}
export async function deleteAlbum(id){
    return del('/data/albums/'+id)
}
export async function searchAlbum(query){
    return get(`/data/albums?where=name%20LIKE%20%22${query}%22`)
    }
/*

  
 

export async function getShowByUser(userId){
    return get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}


export async function likeShow(theaterId){
    return post('/data/likes',{
        theaterId
    })
}
export async function getLikesByShowId(theaterId){
    return get(`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`)
}

export async function getMyLikeByShowId(theaterId,userId){
    return get(`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}

export async function searchBooks(query){
return get('/data/books?where='+ encodeURIComponent(`title LIKE "${query}"`))
}
window.getMyLikeByBookId=getMyLikeByBookId
*/