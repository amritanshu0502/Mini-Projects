const jokeconatiner=document.getElementById("joke");
const btn=document.getElementById("btn");
const url="https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=nsfw,religious,political,racist,explicit";


let getJoke  = () => {
    jokeconatiner.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeconatiner.textContent=`${item.joke}`;
        jokeconatiner.classList.add("fade");
    })
}
btn.addEventListener("click",getJoke);
getJoke();