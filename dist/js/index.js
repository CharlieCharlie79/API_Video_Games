const API_Key = 'd1d436f671144fe58cd8bad3d2d6e457';

/*
fetch(`https://api.rawg.io/api/platforms?key=${API_Key}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        return response.json();
    })
    .then(data => {
        console.log("Video Games Data: ", data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
*/

getListOfGames();

async function getListOfGames() {
    const response = await fetch(`https://api.rawg.io/api/platforms?key=${API_Key}`)
    console.log(response);
    const data = await response.json();
    console.log(data);
    length = data.results.length;

    // gamesList = data.results.games.name;

    console.log(data);
    var temp = '';
    for (i = 0; i < length; i++) {
        temp += "<tr>";
        temp += "<td>" + data.results[i].games[0].name + "</td>";
    }
    document.getElementById("container").innerHTML = temp;
}