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

const albums = [
  {
    id: "album1",
    title: "Dude",
    cover: "assets/icons/dude.jpg"
  },
  {
    id: "album2",
    title: "The Raja Saab",
    cover: "assets/icons/the raja saab.jpg"
  },
  {
    id: "album3",
    title: "They Call Him OG",
    cover: "assets/icons/og.jpg"
  }
];

const grid = document.getElementById("albumGrid");

albums.forEach(album => {
  const card = document.createElement("div");
  card.className = "album-card";
  card.innerHTML = `
    <img src="${album.cover}">
    <h3>${album.title}</h3>
  `;
  card.onclick = () => {
    location.href = `album.html?id=${album.id}`;
  };
  grid.appendChild(card);
});
