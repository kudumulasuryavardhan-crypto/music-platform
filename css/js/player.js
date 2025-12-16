const song = JSON.parse(localStorage.getItem("song"));
songName.textContent = song.name;
audio.src = song.url;
