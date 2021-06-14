"use strict"
/* eslint-disable indent */

//  Définition de la classe "Media"
// eslint-disable-next-line no-unused-vars
class Photo {
    constructor(props) {
        this.id = props.id
        this.photographerId = props.photographerId
        this.image = props.image
        this.tags = props.tags
        this.likes = props.likes
        this.date = props.date
        this.price = props.price
    }

    incrementLike() {
        let p3 = document.getElementById(this.id)
        const firstValue = this.likes
        console.log("first Value :", firstValue)
        if (this.likes === firstValue) {
            let newValue = (this.likes += 1)
            this.likes = newValue
            p3.textContent = newValue
            console.log("New Value :", this.likes)
        } else {
            // p3.textContent = firstValue
            console.log("same value")
        }
    }

    gallery() {
        let regApply1st, regApply2, tagline
        let reg1 = /\b.jpg/g
        let reg2 = /[_$]/g
        if (this.image != null) {
            regApply1st = this.image.replace(reg1, "")
            regApply2 = regApply1st.replace(/([a-z])([A-Z])/g, "$1 $2")
            tagline = regApply2.replace(reg2, " ")
        }

        let li = document.createElement("li")
        li.className = `cards__gallery ${this.tags}`

        let div = document.createElement("div")
        div.className = "card__gallery"
        li.appendChild(div)

        let divX = document.createElement("div")
        divX.setAttribute("id", "Media-Only")
        div.appendChild(divX)

        let img = document.createElement("img")
        img.className = "image-gallery"
        img.src = `img/${this.image}`
        img.id = "image-gallery"
        img.alt = `image ${tagline}`
        divX.appendChild(img)

        let div2 = document.createElement("div")
        div2.className = "p_row"
        div.appendChild(div2)

        let p1 = document.createElement("p")
        p1.id = "max_text"
        p1.textContent = `${tagline}`
        div2.appendChild(p1)

        let p2 = document.createElement("p")
        p2.className = "price"
        p2.textContent = `${this.price}`
        div2.appendChild(p2)

        let space = "€\xa0\xa0"

        let p2b = document.createElement("p")
        p2b.className = "currency"
        p2b.textContent = `${space}`
        div2.appendChild(p2b)

        let p3 = document.createElement("p")
        p3.className = "likes"
        p3.setAttribute("id", this.id)
        p3.textContent = `${this.likes}`
        div2.appendChild(p3)

        let img2 = document.createElement("img")
        img2.class = "coeur"
        img2.setAttribute("id", "coeurId")
        img2.addEventListener("click", () => {
            this.incrementLike()
        })
        img2.src = "img/coeur.png"
        img2.className = "coeur"
        img2.style = "width:20px;height:20px;margin-top: 1.4rem;"
        img2.alt = "coeur rouge"
        div2.appendChild(img2)

        return li
    }
}

class Video {
    constructor(props) {
        this.id = props.id
        this.photographerId = props.photographerId
        this.video = props.video
        this.tags = props.tags
        this.likes = props.likes
        this.date = props.date
        this.price = props.price
    }

    incrementLike() {
        this.likes += 1
        let p3 = document.getElementById(this.id)
        p3.textContent = this.likes
    }

    gallery() {
        let regApply1st, regApply2, tagline
        let reg1 = /\b.mp4/g
        let reg2 = /[_$]/g

        if (this.video != null) {
            regApply1st = this.video.replace(reg1, "")
            regApply2 = regApply1st.replace(/([a-z])([A-Z])/g, "$1 $2")
            tagline = regApply2.replace(reg2, " ")
        }

        let li = document.createElement("li")
        li.className = `cards__gallery ${this.tags}`

        let div = document.createElement("div")
        div.className = "card__gallery"
        li.appendChild(div)

        let divX = document.createElement("div")
        divX.setAttribute("id", "Media-Only")
        div.appendChild(divX)

        let video = document.createElement("video")
        video.className = "image-gallery"
        video.src = `img/${this.video}`
        video.type = "video/mp4"
        video.track = `label="Français" kind="subtitles" srclang="fr" src="${tagline}" default`
        video.setAttribute(
            "aria-label",
            `cliquer image pour jouer la video ${tagline}`
        )
        video.autoplay = true
        video.loop = true
        divX.appendChild(video)

        let div2 = document.createElement("div")
        div2.className = "p_row"
        div.appendChild(div2)

        let p1 = document.createElement("p")
        p1.id = "max_text"
        p1.textContent = `${tagline}`
        div2.appendChild(p1)

        let p2 = document.createElement("p")
        p2.className = "price"
        p2.textContent = `${this.price}`
        div2.appendChild(p2)

        let space = "€\xa0\xa0"

        let p2b = document.createElement("p")
        p2b.className = "currency"
        p2b.textContent = `${space}`
        div2.appendChild(p2b)

        let p3 = document.createElement("p")
        p3.className = "likes"
        p3.setAttribute("id", this.id)
        p3.textContent = `${this.likes}`
        div2.appendChild(p3)

        // let img2 = document.createElement("img")
        // img2.class = "coeur"
        // img2.setAttribute("id", "coeurId")
        // img2.addEventListener("click", () => {
        //     this.incrLike()
        // })
        // img2.src = "img/coeur.png"
        // img2.className = "coeur"
        // img2.style = "width:20px;height:20px;margin-top: 1.4rem;"
        // img2.alt = "coeur rouge"
        // div2.appendChild(img2)

        let img2 = document.createElement("img")
        img2.class = "coeur"
        img2.setAttribute("id", "coeurId")
        img2.addEventListener("click", () => {
            this.incrementLike()
        })
        img2.src = "img/coeur.png"
        img2.className = "coeur"
        img2.style = "width:20px;height:20px;margin-top: 1.4rem;"
        img2.alt = "coeur rouge"
        div2.appendChild(img2)

        return li

        // return `
        //     <li class="cards__gallery ${this.tags}">
        //         <div class='card__gallery'>
        //             <video  class="image-gallery" title="video ${tagline}" controls autoplay >
        //             <source src="img/${this.video}" type="video/mp4">
        //             </video>
        //             <div class="p_row">
        //                 <p id="max_text">${tagline}</p>
        //                 <p class="price">${this.price}€&nbsp;</p>
        //                 <p class="likes ${this.likes}">${this.likes}
        //                 <p class="coeur" alt="likes" aria-label="likes">❤</p>
        //                 </p>
        //             </div>
        //         </div>
        //     </li>
        //     `
    }
}

// eslint-disable-next-line no-unused-vars
class MediaFactory {
    constructor(type, props) {
        if (type === "image") return new Photo(props)
        if (type === "video") return new Video(props)
    }
}
