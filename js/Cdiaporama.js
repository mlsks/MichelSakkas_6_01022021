/* eslint-disable indent */
// eslint-disable-next-line no-unused-vars
class Diaporama {
    constructor(medias) {
        this.medias = medias
        this.position = 0
        this.element = null
    }

    createElement() {
        // eslint-disable-next-line no-undef
        if (this.medias[this.position] instanceof Photo) {
            this.element = `<img src='img/${
                this.medias[this.position].image
            }' />`
        } else {
            this.element = `<video controls> 
                <source src='img/${
                    this.medias[this.position].video
                }' type="video/mp4">
                </video>`
        }
    }

    next() {
        if (this.position + 1 < this.medias.length) {
            this.position = this.position + 1
        } else {
            this.position = 0
        }

        this.createElement()
    }

    previous() {
        if (this.position - 1 >= 0) {
            this.position = this.position - 1
        } else {
            this.position = this.medias.length - 1
        }
        this.createElement()
    }

    start(index = 0) {
        this.position = index
        this.createElement()
        this.display()
        console.log(this.medias)
    }

    display() {
        let lightbox = document.getElementById("diaporama")
        lightbox.innerHTML = this.element
        lightbox.classList.add("open")
    }
}
