// Your code here
document.addEventListener("DOMContentLoaded", () =>{
    const baseURL ="http://localhost:3000/characters";
    const characterBar = document.getElementById("character-bar");
    const detailedInfo = document.getElementById("detailed-info");
    const voteForm = document.getElementById("votes-form")
    const resetbtn = document.getElementById("reset.btn")
    
    fetch(baseURL)
    .then(response => response.json())
    .then(characters => {characters.forEach(character =>)})
})