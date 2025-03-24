// Your code here

let baseURL = "http://localhost:3000/characters"
fetch(baseURL)
.then (response => response.json())
.then(data => displayName(data))

function showMe (){
    let show = document.querySelector("#name")
    show.innerHTML = `<p id="name">Character's Name</p>`
}

function displayName() {
    let top = document.querySelector("#text1")
    top.addEventListener("click", showName)
}

function displayImage (){
    let img = document.querySelector("img")
    img.scr = 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHRsb215MTZlNjhkaG1odXh4cDJjaWx2dW5peG1lZzg4eTc4a2ttciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o8doVAxrMjXbIHaU0/giphy.gif'
}

