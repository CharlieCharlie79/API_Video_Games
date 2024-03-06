const API_KEY = 'd1d436f671144fe58cd8bad3d2d6e457';

fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));