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
        }

        if (this.medias[this.position] instanceof Video) {
            this.element = `<video controls> <source  src='${
                this.medias[this.position].video
            }' type="video/mp4"></video>`
        }

        // else {
        //     this.element = `<video controls>
        //         <source src='img/${
        //             this.medias[this.position].video
        //         }' type="video/mp4">
        //         </video>`
        // }
    }

    next() {
        console.log(this.position)
        console.log(this.medias.length)
        if (Number.parseInt(this.position, 10) + 1 < this.medias.length) {
            this.position = Number.parseInt(this.position, 10) + 1
        } else {
            this.position = 0
        }
        console.log(this.position)
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
        console.log(this.medias)
    }

    display() {
        let lightbox = document.getElementById("diaporama")
        lightbox.innerHTML = this.element
        lightbox.classList.add("open")
        this.showContent()
    }

    showContent() {
        let lightboxContent = document.getElementById("lightbox")
        lightboxContent.innerHTML = `<div class="modal-content">${this.element}</div>`
    }
}
// let d = new Diaporama(medias)

// let gallery = document.getElementById("gallery")

// for (let i = 0; i < medias.length; i++) {
//     let element
//     if (medias[i] instanceof Image) {
//         element = `<img onclick="startModal('${i}')" src='${medias[i].image}' />`
//     } else if (medias[i] instanceof Video) {
//         element = `<video controls onclick="startModal('${i}')">
//                         <source  src='${medias[i].video}' type="video/mp4">
//                      </video>`
//     }
//     gallery.innerHTML += element
// }

// eslint-disable-next-line no-unused-vars
// function startModal(index) {
//     d.start(index)
// }

// const nextBtn = document.querySelector(".next")
// nextBtn.onclick = () => {
//     d.next()
//     // console.log(d)
// }

// const prevBtn = document.querySelector(".prev")
// prevBtn.onclick = () => {
//     d.previous()
// }
