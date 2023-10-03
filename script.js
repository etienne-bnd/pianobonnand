document.addEventListener('DOMContentLoaded', function() {
    fetchPianoData();
});

function fetchPianoData() {
    fetch('https://spreadsheets.google.com/feeds/list/1urRoHKR75u1kbWdPuAb4RlI7DLJQr8T5zNw8LB9OY10/od6/public/values?alt=json') 
        .then(response => response.json())
        .then(data => {
            const pianos = data.feed.entry;
            renderPianoList(pianos);
        });
}

function renderPianoList(pianos) {
    const pianoListElement = document.getElementById('piano-list');

    pianos.forEach(piano => {
        const name = piano.gsx$name.$t;
        const type = piano.gsx$type.$t;
        const price = piano.gsx$price.$t;

        const pianoCard = document.createElement('div');
        pianoCard.classList.add('piano-card');
        pianoCard.innerHTML = `
            <h2>${name}</h2>
            <p>Type: ${type}</p>
            <p>Price: $${price}</p>
        `;
        pianoListElement.appendChild(pianoCard);
    });
}
