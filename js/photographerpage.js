//Page Photographer

/* eslint-disable no-undef */
window.onload = function () {
    let searchParams = new URLSearchParams(window.location.search)
    let photographerId = searchParams.get("id")

    //Instanciation from class PhotographerPage
    let photographerPage = new PhotographerPage()
    photographerPage.display(photographerId)
    // photographerPage.lunch()

    // Modal Diaporama
    const modalBox = document.getElementById("modal")

    const closeModalDiaporama = document.querySelector(".closeModal")

    // Close button
    closeModalDiaporama.addEventListener("click", function () {
        modalBox.classList.remove("show")
        document.body.style.overflow = "visible"
    })

    document.addEventListener("keydown", (event) => {
        if (event.key == "Escape") {
            modalBox.classList.remove("show")
            document.body.style.overflow = "visible"
        }
    })

    const nextBtn = document.querySelector(".next")
    nextBtn.onclick = () => {
        photographerPage.diaporama.next()
    }

    document.addEventListener("keydown", (event) => {
        if (event.key == "ArrowRight") {
            photographerPage.diaporama.next()
        }
    })

    const prevBtn = document.querySelector(".prev")
    prevBtn.onclick = () => {
        photographerPage.diaporama.previous()
    }

    document.addEventListener("keydown", (event) => {
        if (event.key == "ArrowLeft") {
            photographerPage.diaporama.previous()
        }
    })
}

class PhotographerPage {
    constructor() {
        this.photographer = null
        this.medias = []
    }

    startModal(index) {
        this.diaporama.start(index)
    }

    // GETPHOTOGRAPHER METHOD
    getPhotographer(id) {
        let resdata = data.photographers
        let resdataFiltered = resdata.filter((data) => data.id == id)
        let resmedia = data.media
        let resmediaFiltered = resmedia.filter(
            (data) => data.photographerId == id
        )

        // eslint-disable-next-line no-undef
        this.photographer = new Photographer(
            resdataFiltered[0].name,
            resdataFiltered[0].id,
            resdataFiltered[0].country,
            resdataFiltered[0].city,
            resdataFiltered[0].tags,
            resdataFiltered[0].tagline,
            resdataFiltered[0].price,
            resdataFiltered[0].portrait
        )

        for (let i = 0; i < resmediaFiltered.length; i++) {
            let type = "image"
            if (resmediaFiltered[i].image == null) {
                type = "video"
            }
            this.medias.push(new MediaFactory(type, resmediaFiltered[i]))
        }
        this.diaporama = new Diaporama(this.medias)
    }

    // DISPLAY Photographer, Likes and Price, and Gallery
    display(id) {
        this.getPhotographer(id)
        document.getElementById("photographer").innerHTML =
            this.photographer.displayPhotographer()

        document.getElementById("price").innerHTML =
            this.photographer.displayPrice()

        // Total likes and price for one photographer
        let photographerLikesArray = Array.from(
            this.medias,
            ({ likes }) => likes
        )

        //  Count total likes
        let totalLikes = photographerLikesArray.reduce((a, b) => a + b)

        document.getElementById("likes").innerHTML = `
            <li class="cards__likes ">
                <div class=''>
                <p class='card__text card__price' id='newLikesCount'>
                ${totalLikes} &#10084;
                </p>
                </div>
            </li>
            `

        function clickCoeur() {
            let coeur = document.getElementsByClassName("coeur")
            for (var i = 0; i < coeur.length; i++) {
                coeur[i].addEventListener("click", function () {
                    totalLikes += 1
                    document.getElementById("newLikesCount").innerHTML = `
                    ${totalLikes} &#10084;
                `
                })
            }
        }

        // ***

        // DISPLAY Photographer Gallery

        let thisMedias = this.medias
        let that = this

        // By popularity Method
        function byPopularity() {
            let displayByPopularity = ""
            for (let i = 0; i < that.medias.length; i++) {
                that.medias.sort(function (a, b) {
                    // Sort by likes
                    return b.likes - a.likes
                })
                displayByPopularity = that.medias[i].gallery()

                let mediaOnly = displayByPopularity.querySelector("#Media-Only")
                mediaOnly.addEventListener("click", () => {
                    that.startModal(i)
                })

                document
                    .getElementById("gallery")
                    .appendChild(displayByPopularity)
            }
        }

        // Trigger function [First DOM Paint]
        byPopularity()
        clickCoeur()

        // Trigger Sorting Elements Tags
        let sortPopularity = document.getElementById("popularité")
        let sortTitre = document.getElementById("titre")
        let sortDate = document.getElementById("date")

        let newElementGallerySorted = document.querySelector("#gallery")

        // Clear Gallery Fragment
        function clearFragment() {
            var list = document.getElementById("gallery")
            while (list.hasChildNodes()) {
                list.removeChild(list.lastChild)
            }
        }

        // Sort by Popularité
        sortPopularity.addEventListener("click", function () {
            clearFragment()
            let newFragment = new DocumentFragment()
            byPopularity()
            newElementGallerySorted.appendChild(newFragment)
        })

        // By Title Method
        function byTitle() {
            let displayByTitle = ""
            for (let i = 0; i < thisMedias.length; i++) {
                thisMedias.sort(function (a, b) {
                    //Sort Before
                    if ((a.image || a.video) < (b.image || b.video)) {
                        return -1
                    }
                    //Sort after
                    if ((a.image || a.video) > (b.image || b.video)) {
                        return 1
                    }
                    return 0
                })

                displayByTitle = that.medias[i].gallery()

                let mediaOnly = displayByTitle.querySelector("#Media-Only")

                mediaOnly.addEventListener("click", () => {
                    that.startModal(i)
                })
                document.getElementById("gallery").appendChild(displayByTitle)
            }
        }
        // Sort by Titre
        sortTitre.addEventListener("click", function () {
            clearFragment()
            let newFragment = new DocumentFragment()
            byTitle()
            newElementGallerySorted.appendChild(newFragment)
        })

        //  By Date Method
        function byDate() {
            let displayByDate = ""
            for (let i = 0; i < thisMedias.length; i++) {
                thisMedias.sort(function (a, b) {
                    return new Date(b.date) - new Date(a.date)
                })
                // displayByDate += thisMedias[i].gallery()
                displayByDate = that.medias[i].gallery()

                let mediaOnly = displayByDate.querySelector("#Media-Only")

                mediaOnly.addEventListener("click", () => {
                    that.startModal(i)
                })
                document.getElementById("gallery").appendChild(displayByDate)
            }
        }
        // Sort by Date
        sortDate.addEventListener("click", function () {
            clearFragment()
            let newFragment = new DocumentFragment()
            byDate()
            newElementGallerySorted.appendChild(newFragment)
        })
    }
}
