let list = ['playlists', 'artists', 'albums']
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const filter = document.querySelector('.filter-playlist')
const playlist = document.querySelector('#allplaylist')
list.forEach((item) => filter.innerHTML += `
<li class='fil-item'>${item}</li>
`)

num.forEach((num) => playlist.innerHTML += `
<li class="playlist">
    <div class="img"></div>
    <div class="describe">Playlist ${num}</div>
</li>
`)


