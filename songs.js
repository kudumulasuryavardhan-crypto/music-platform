import { doc, getDoc }
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const id = new URLSearchParams(location.search).get("id");
const snap = await getDoc(doc(db, "albums", id));

albumTitle.textContent = snap.data().title;

snap.data().songs.forEach(s => {
  songList.innerHTML += `<li onclick="play('${s.url}','${s.name}')">${s.name}</li>`;
});

window.play = (url, name) => {
  localStorage.setItem("song", JSON.stringify({ url, name }));
  location.href = "player.html";
};