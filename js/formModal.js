/* eslint-disable no-unused-vars */
function openModal() {
    const modal = document.querySelector(".contactmodal")

    // add .active class
    modal.classList.add("active")
}

function closeModal() {
    const modal = document.querySelector(".contactmodal")

    // remove .active class
    modal.classList.remove("active")
}

// function sConsole() {
//     var nom = document.getElementById("nom")
//     var prenom = document.getElementById("prenom")
//     console.log("1er champ: " + nom.value)
//     console.log("2eme champ: " + prenom.value)
// }
