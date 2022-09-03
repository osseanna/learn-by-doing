let jokeHTML = document.getElementById('joke');
let nextJokeBtn = document.querySelector('.card button');

showJoke();

nextJokeBtn.addEventListener('click', () => {
    showLoader();
    showJoke();
})

function showLoader() {
    nextJokeBtn.setAttribute('disabled', true);
    jokeHTML.innerHTML = '<i class="fas fa-atom fa-spin"></i>';
}
function showJoke() {

    getJoke().then((joke) => {
        nextJokeBtn.removeAttribute('disabled');
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