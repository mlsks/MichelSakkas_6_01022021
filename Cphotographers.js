"use strict"
//  Définition de la classe "Photographer"
// eslint-disable-next-line no-unused-vars
class Photographer {
    constructor(name, id, city, country, tags, tagline, price, portrait) {
        this.name = name
        this.id = id
        this.city = city
        this.country = country
        this.tags = tags
        this.portrait = portrait
        this.tagline = tagline
        this.price = price
    }
    display() {
        const tag = this.tags
            .map((tag) => `<li class='photographer-tag'>#${tag}</li>`)
            // remove comma
            .join("")

        return `
        <li class='cards__item'> 
            <div class='card'>
                <a href="photographer.html?id=${this.id}" title="${this.name}" class="card__a"> 
                <div class='card__image'>
                    <img src="photos/${this.portrait}" class="img__card"> 
                </div> 
                <div class='card__content'>
                    <div class='card__title'>
                    ${this.name} 
                    </div></a>
                    <p class='card__text card__place'>
                    ${this.city}, ${this.country}
                    </p>
                    <p class='card__text card__tagline'>
                    ${this.tagline}
                    </p>
                    <p class='card__text card__price'>
                    ${this.price}€/jour
                    </p>
                    <ul class="tag">
                        ${tag}                       
                    </ul>
                </div> 
            </div>
        </li>
        `
    }
    searchTags() {
        let getTags = this.tags.join(" ")

        return `
            ${getTags}
            `
    }
}

// `<li class='main-tag'>#${tag}</li>`

// function objectLength(obj) {
//     let result = ""
//     for (let prop in obj) {
//         if (obj.hasOwnProperty(prop)) {
//             result++
//         }
//     }
//     return result
// }
