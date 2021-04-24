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

    gallery() {
        let regApply1st, regApply2, tagline
        let reg1 = /\b.jpg/g
        let reg2 = /[_$]/g
        if (this.image != null) {
            regApply1st = this.image.replace(reg1, "")
            regApply2 = regApply1st.replace(/([a-z])([A-Z])/g, "$1 $2")
            tagline = regApply2.replace(reg2, " ")
        }

        return `
        <li class="cards__gallery ${this.tags}"> 
            <div class='card__gallery '>
            <a href="photos/${this.image}" class="" data-lightbox-caption="${tagline}">
                <img src="photos/${this.image}" class="image-gallery" alt="image ${tagline}">
            </a>
                <div class="p_row">
                    <p id="max_text">${tagline}</p>
                    <p class="price">${this.price}€&nbsp;</p>
                    <p class="likes">${this.likes}</p>
                    <p class="coeur" alt="likes" aria-label="likes">❤</p>   
                </div>
            </div>
        </li>
        <!-- Modal -->
        `
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

    gallery() {
        let regApply1st, regApply2, tagline
        let reg1 = /\b.mp4/g
        let reg2 = /[_$]/g

        if (this.video != null) {
            regApply1st = this.video.replace(reg1, "")
            regApply2 = regApply1st.replace(/([a-z])([A-Z])/g, "$1 $2")
            tagline = regApply2.replace(reg2, " ")
        }

        return `
            <li class="cards__gallery ${this.tags}"> 
                <div class='card__gallery'>
                <a href="photos/${this.video}" class="" data-lightbox-caption="${tagline}">
                    <video  class="image-gallery" title="video ${tagline}" autoplay loop
                    onclick="openModal();currentSlide()">
                    <source src="photos/${this.video}" video" type="video/mp4">
                    </video>
                 </a>   
                    <div class="p_row">
                        <p id="max_text">${tagline}</p>
                        <p class="price">${this.price}€&nbsp;</p>
                        <p class="likes ${this.likes}">${this.likes}
                        <p class="coeur" alt="likes" aria-label="likes">❤</p>
                        </p>
                    </div>
                </div>
            </li>
            <!-- Modal -->
        
            `
    }
}

// eslint-disable-next-line no-unused-vars
class MediaFactory {
    constructor(type, props) {
        if (type === "image") return new Photo(props)
        if (type === "video") return new Video(props)
    }
}
