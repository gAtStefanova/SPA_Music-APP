import { deleteAlbum, getAlbumById } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (album, isOwner,onDelete) => html`<section id="detailsPage">
<div class="wrapper">
    <div class="albumCover">
        <img src=${album.imgUrl}>
    </div>
    <div class="albumInfo">
        <div class="albumText">

            <h1>Name: ${album.name}</h1>
            <h3>Artist: ${album.artist}</h3>
            <h4>Genre: ${album.genre}</h4>
            <h4>Price: $${album.rpice}</h4>
            <h4>Date: ${album.releaseDate}</h4>
            <p>Description: ${album.description}</p>
        </div>

        <!-- Only for registered user and creator of the album-->
        ${isOwner ? html`<div class="actionBtn">
            <a href="/edit/${album._id}" class="edit">Edit</a>
            <a href="javascript:void(0)" @click=${onDelete} class="remove">Delete</a>
        </div>`:""}
        
    </div>
</div>
</section>`;

export async function detailsView(ctx) {
    const album=await getAlbumById(ctx.params.id)
  const userData = getUserData();
  const isOwner = userData && userData.id == album._ownerId;
  //const isOwner =  userData?.id == meme._ownerId;
  ctx.render(detailsTemplate(album, isOwner,onDelete));

  async function onDelete(){
const choice=confirm('Are you sure yoy want to delete this meme?');

if(choice){
    await deleteAlbum(ctx.params.id)
    ctx.page.redirect('/catalog')
}
  }
}
