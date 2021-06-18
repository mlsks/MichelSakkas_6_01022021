// Fonctions  du formulaire (modale "contactez-moi")

/* eslint-disable no-unused-vars */
function openModal() {
    const modal = document.querySelector(".contactmodal")

    // add .active class
    modal.classList.add("active")
}

function closeModal() {
    const modal = document.querySelector(".contactmodal")
    modal.classList.remove("active")
}

function closeModalFromContactezMoi() {
    const modal = document.querySelector(".contactmodal")
    modal.classList.remove("active")
}

function dataToConsole() {
    let nom = document.getElementById("nom")
    let prenom = document.getElementById("prenom")
    let email = document.getElementById("email")
    let message = document.getElementById("message")

    document
        .querySelector("form#form")
        .addEventListener("submit", function (e) {
            e.preventDefault()

            console.log(
                `Nom: ${nom.value}, Prénom: ${prenom.value}, email: ${email.value}`
            )
            console.log(`Message: ${message.value}`)

            nom.value = ""
            prenom.value = ""
            email.value = ""
            message.value = ""

            closeModalFromContactezMoi()
        })
}
