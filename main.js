document.addEventListener("scroll", function () {
    var navbar = document.querySelector("nav");

    if (window.scrollY > 0) {
        navbar.style.backgroundColor = "rgba(10, 10, 10, 0.2)";
    } else {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.2)"; 
    }
})

var container = document.querySelector("#container")
var topPost = document.querySelector("#top-post")
var header = document.querySelector("header")
var rating = document.querySelector("#rating")
var title = document.querySelector("#title")
var cardContainer = document.querySelector("#card-container")

fetch("https://api.npoint.io/ef37623e0d4c658666ef").then(function (value) {
    return value.json()
}).then(function (response) {

    var randomPost = response[Math.floor(Math.random() * response.length)]

    topPost.innerHTML = randomPost.description
    rating.innerHTML = "rating: " +randomPost.rating
    title.innerHTML = randomPost.title
    header.style.backgroundImage = "url(" + randomPost.big_image  + ")";

    response.forEach(function (item) {
        var image = document.createElement("img")
        image.src = item.image
        var card = document.createElement("div")
        card.classList.add("card")
        var title = document.createElement("h3")
        title.textContent = item.title
        var year = document.createElement("span")
        year.textContent = "Year: " + item.year
        var imdbAndRaiting = document.createElement("div")
        imdbAndRaiting.classList.add("imdb-and-raiting")
        var imdb = document.createElement("img")
        imdb.classList.add("imdb")
        imdb.src = "Images/imdb.svg"
        var raitingMovie = document.createElement("span")
        raitingMovie.textContent = item.rating + "/10"
        var genre = document.createElement("p")
        genre.classList.add("genre")
        genre.textContent = item.genre

       
        imdbAndRaiting.appendChild(imdb)
        imdbAndRaiting.appendChild(raitingMovie)


        card.appendChild(image)
        card.appendChild(year)
        card.appendChild(title)
        card.appendChild(imdbAndRaiting)
        card.appendChild(genre)
        
        cardContainer.appendChild(card)
    })

}).catch(function (error) {
    console.log(error)
})