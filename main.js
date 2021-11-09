const jokeEl = document.querySelector('#joke');
const btn = document.querySelector('.btn');
getJoke();

// btn.addEventListener('click', ()=> {
//     getJoke();
// })

btn.addEventListener('click', getJoke);

function getJoke(){
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com', config)
        .then(response=> response.json())
        .then(joke => jokeEl.innerText = joke.joke)
        .catch(err => {
            throw(err)
        })
}


