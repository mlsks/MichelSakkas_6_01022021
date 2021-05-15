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

    gallery(id) {
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
            <div class='card__gallery'>
                    <img src="img/${this.image}"  class="image-gallery" id="image-gallery" alt="image ${tagline}">
                <div class="p_row">
                    <p id="max_text">${tagline}</p>
                    <p class="price">${this.price}€&nbsp;</p>
                    <p class="likes">${this.likes}</p>
                    <img src="img/coeur.png" alt="coeur rouge" class="coeur"  style="width:20px;height:20px;margin-top: 1.4rem;">   
                </div>
            </div>
        </li>
        
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

    gallery(id) {
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
                    <video  class="image-gallery" title="video ${tagline}" autoplay loop>
                    <source src="img/${this.video}"  video" type="video/mp4">
                    </video>
                    <div class="p_row">
                        <p id="max_text">${tagline}</p>
                        <p class="price">${this.price}€&nbsp;</p>
                        <p class="likes ${this.likes}">${this.likes}
                        <p class="coeur" alt="likes" aria-label="likes">❤</p>
                        </p>
                    </div>
                </div>
            </li>        
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
