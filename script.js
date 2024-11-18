const lyrics = [
    { title: "Song One", lyrics: "Lyrics of song one..." },
    { title: "Song Two", lyrics: "Lyrics of song two..." },
    { title: "Song Three", lyrics: "Lyrics of song three..." },
];

function displayLyrics() {
    const container = document.getElementById('lyricsContainer');
    container.innerHTML = ''; // Clear previous content

    lyrics.forEach((song, index) => {
        const card = document.createElement('div');
        card.classList.add('lyrics-card');
        card.innerHTML = `
            <h3>${song.title}</h3>
            <p>${song.lyrics}</p>
        `;
        container.appendChild(card);
    });
}

function filterLyrics() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const filteredLyrics = lyrics.filter(song =>
        song.title.toLowerCase().includes(query) ||
        song.lyrics.toLowerCase().includes(query)
    );

    const container = document.getElementById('lyricsContainer');
    container.innerHTML = ''; // Clear previous content

    filteredLyrics.forEach((song, index) => {
        const card = document.createElement('div');
        card.classList.add('lyrics-card');
        card.innerHTML = `
            <h3>${song.title}</h3>
            <p>${song.lyrics}</p>
        `;
        container.appendChild(card);
    });
}

// Initial display
document.addEventListener('DOMContentLoaded', displayLyrics);
