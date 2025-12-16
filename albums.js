import { collection, getDocs }
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const grid = document.getElementById("albumGrid");
const albums = await getDocs(collection(db, "albums"));

albums.forEach(doc => {
  const a = doc.data();
  grid.innerHTML += `
    <div class="album" onclick="location.href='album.html?id=${doc.id}'">
      <img src="${a.cover}">
      <h3>${a.title}</h3>
    </div>`;
});