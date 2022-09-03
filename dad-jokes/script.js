let jokeHTML = document.getElementById('joke');
let nextJokeBtn = document.querySelector('.card button');

showJoke();

nextJokeBtn.addEventListener('click', () => {
    showJoke();
})

function showJoke() {

    getJoke().then((joke) => {
        jokeHTML.innerText = joke;
    });

    async function getJoke() {
        const url = "https://icanhazdadjoke.com/";
        const options = {
            headers: {
                "Accept": "application/json"
            }
        }
        return await fetch(url, options)
            .then((response) => response.json())
            .then((data) => data.joke);
    }
}
