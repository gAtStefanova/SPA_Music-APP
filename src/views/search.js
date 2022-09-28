import { searchAlbum } from "../api/data.js";
import { html } from "../lib.js";
import { getUserData } from "../util.js";

const searchTemplate = (albums, onSearch, params = "",userData) => html`<section id="searchPage">
<h1>Search by Name</h1>

<div class="search">
    <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
    <button class="button-list" @click=${onSearch}>Search</button>
</div>

<h2>Results:</h2>

<!--Show after click Search button-->
<div class="search-result">
    <!--If have matches-->
  ${albums.length==0 ? html`<p class="no-result">No result.</p>`:albums.map(a=>albumCard(a,userData))}

    <!--If there are no matches-->
    
</div>
</section>`;

let albumCard = (album,userData) => html`<div class="card-box">
<img src=${album.imgUrl}>
<div>
    <div class="text-center">
        <p class="name">Name: ${album.name}</p>
        <p class="artist">Artist: ${album.artist}</p>
        <p class="genre">Genre: ${album.genre}</p>
        <p class="price">Price: $${album.price}</p>
        <p class="date">Release Date: ${album.releaseDate}</p>
    </div>
    ${userData ?html`<div class="btn-group">
        <a href="/details/${album._id}" id="details">Details</a>
    </div>`:""}
    
</div>
</div>`;
export async function searchView(ctx) {
    const userData= await getUserData()
  const params = ctx.querystring.split("=")[1];
  let albums = [];
  if (params) {
    albums = await searchAlbum(params);
  }
  ctx.render(searchTemplate(albums, onSearch, params,userData));

  function onSearch(event) {
    event.preventDefault();
    const search=document.getElementById("search-input").value;
    //const search = formData.get("search");

    if (search) {
      ctx.page.redirect("/search?query=" + search);
    }
  }
}
