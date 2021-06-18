/* eslint-disable indent */

//  Définition de la classe Diaporama

// eslint-disable-next-line no-unused-vars
class Diaporama {
    constructor(medias) {
        this.medias = medias
        this.position = 0
        this.element = null
    }

    createElement() {
        let regApply1st, regApply2, tagline
        let elementImage = this.medias[this.position].image
        let elementVideo = this.medias[this.position].video
        let reg1 = /\b.jpg/g
        let reg1b = /\b.mp4/g
        let reg2 = /[_$]/g

        // eslint-disable-next-line no-undef
        if (this.medias[this.position] instanceof Photo) {
            this.element = document.createElement("div")
            let img = document.createElement("img")
            img.src = `img/${elementImage}`
            img.alt = tagline
            this.element.appendChild(img)

            regApply1st = elementImage.replace(reg1, "")
            regApply2 = regApply1st.replace(/([a-z])([A-Z])/g, "$1 $2")
            tagline = regApply2.replace(reg2, " ")

            let p = document.createElement("p")
            p.textContent = tagline
            this.element.appendChild(p)
        }

        // eslint-disable-next-line no-undef
        if (this.medias[this.position] instanceof Video) {
            this.element = document.createElement("div")
            let video = document.createElement("video")
            this.element.appendChild(video)
            video.src = `img/${elementVideo}`
            video.autoplay = true
            video.loop = true

            regApply1st = elementVideo.replace(reg1b, "")
            regApply2 = regApply1st.replace(/([a-z])([A-Z])/g, "$1 $2")
            tagline = regApply2.replace(reg2, " ")

            let p = document.createElement("p")
            p.textContent = tagline
            this.element.appendChild(p)
        }
    }

    next() {
        if (Number.parseInt(this.position, 10) + 1 < this.medias.length) {
            this.position = Number.parseInt(this.position, 10) + 1
        } else {
            this.position = 0
        }

        this.createElement()
        this.showContent()
    }

    previous() {
        if (Number.parseInt(this.position, 10) - 1 >= 0) {
            this.position = Number.parseInt(this.position, 10) - 1
        } else {
            this.position = this.medias.length - 1
        }
        this.createElement()
        this.showContent()
    }

    start(index = 0) {
        this.position = index
        this.createElement()
        this.display()
    }

    display() {
        let lightbox = document.getElementById("modal")
        lightbox.classList.add("show")
        document.body.style.overflow = "hidden"

        this.showContent()
    }

    showContent() {
        let lightboxContent = document.getElementById("lightbox")
        while (lightboxContent.firstChild) {
            lightboxContent.removeChild(lightboxContent.firstChild)
        }
        lightboxContent.appendChild(this.element)
    }
}
