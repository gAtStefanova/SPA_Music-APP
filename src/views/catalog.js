import { getAllAlbums } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const catalogTemplate = (albums,userData) => html`
<section id="catalogPage">
            <h1>All Albums</h1>
                     
${albums.length==0 ? html`<p>No Albums in Catalog!</p>`:
html`${userData ? albums.map(albumCardLogged):albums.map(albumCardGuest) }`}

            <!--No albums in catalog-->
            

        </section>`;
    


const albumCardLogged= (album)=>html`
<div class="card-box">
                <img src=${album.imgUrl}>
                <div>
                    <div class="text-center">
                        <p class="name">Name: ${album.name}</p>
                        <p class="artist">Artist: ${album.artist}</p>
                        <p class="genre">Genre: ${album.artist}</p>
                        <p class="price">Price: $${album.price}</p>
                        <p class="date">Release Date: ${album.releaseDate}</p>
                    </div>
                    <div class="btn-group">
                        <a href="/details/${album._id}" id="details">Details</a>
                    </div>
                </div>
            </div>`;
const albumCardGuest= (album)=>html`
<div class="card-box">
                <img src=${album.imgUrl}>
                <div>
                    <div class="text-center">
                        <p class="name">Name: ${album.name}</p>
                        <p class="artist">Artist: ${album.artist}</p>
                        <p class="genre">Genre: ${album.artist}</p>
                        <p class="price">Price: $${album.price}</p>
                        <p class="date">Release Date: ${album.releaseDate}</p>
                    </div>
                    
                </div>
            </div>`;

export async function catalogView(ctx){
  const userData = getUserData();

const albums=await getAllAlbums();
    ctx.render(catalogTemplate(albums,userData))
}