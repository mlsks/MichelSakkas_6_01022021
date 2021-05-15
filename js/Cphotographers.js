"use strict"
/* eslint-disable indent */

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

    // Méthode sur index.html
    display() {
        return `
        <li class="cards__item "> 
            <div class='card'>
            <a href="photographer.html?id=${this.id}" 
                title="${this.name}"  class="card__a"> 
                <div class='card__image'>
                <img src="img/${
                    this.portrait
                }" class="img__card pointeur" id="${this.id}" name="${
            this.name
        }" alt="${this.name}" > 
                </div>
                <div class='card__content'>
                    <div class='card__title'>
                    ${this.name} 
                    </div></a>
                    <p class='card__text card__place'
                    id="test">
                    ${this.city}, ${this.country} 
                    </p>
                    <p class='card__text card__tagline'>
                    ${this.tagline}
                    </p>
                    <p class='card__text card__price'>
                    ${this.price}€/jour
                    </p>
                    <ul class="tag">
                    ${this.tags
                        .map(
                            (tag) => `<li class='photographer-tag'>#${tag}</li>`
                        )
                        .join("")}                                 
                    </ul>
                </div> 
            </div>
        </li>
        `
    }

    // Méthode sur photographer.html
    displayPhotographer() {
        return `
        <li class="cards__item "> 
            <div class='card'>
              
                <div class='card__image'>
                <img src="img/${this.portrait}" alt="${
            this.name
        }" class="img__card pointeur" id="mainpix" > 
                </div>

                <button class="contactMe" onclick="openModal()">Contactez-moi</button>
                    
                <div class='card__content'>
                    <h1 class='card__title'>
                    ${this.name} 
                    </h1>
                    <p class='card__text card__place'
                    id="test">
                    ${this.country}, ${this.city} 
                    </p>
                    <p class='card__text card__tagline'>
                    ${this.tagline}
                    </p>

                    <button id="contactMe" onclick="openModal()">Contactez-Moi</button>

                    <ul class="tag" >
                    ${this.tags
                        .map(
                            (tag) =>
                                `<li class='photographer-tag allTags' id="${tag}" >#${tag}</li>`
                        )
                        .join("")}                                 
                    </ul>
                </div> 
            </div>
               
                        
        </li>
        <!-- MODAL -->
        <div class="contactmodal">
        <div class="backdrop" onclick="closeModal()"></div>
        <div class="content">
                <h2>Contactez-moi</h2>
                <h2>${this.name}</h2>
                <form action="">
                    <label>Nom</label>
                    </br>
                    <input type="text" name="nom" id="nom" required>
                    </br>
                    <label>Prénom</label>
                    </br>
                    <input type="text" name="prenom" id="prenom" required>
                    </br>
                    <label for="email">Email</label>
                    </br>
                    <input type="email" id="email"
                    pattern=".+@globex.com" size="30" required>
                    </br>
                    <label>message</label>
                    </br>
                    <textarea id="message" cols="35" rows="8" required
                    placeholder="votre message"></textarea>
                    </br>
                    <button type="submit" onClick="closeModal()">Envoyer</button>
                </form>
        
            <img src="../close.svg" class="close" onclick="closeModal()" />
        </div>
        </div>
        
        `
    }
    // Méthode sur photographer.html
    displayPrice() {
        return `
        <li class="cards__price "> 
            <div class=''>
            <p class='card__text card__price'>
            ${this.price}€ / jour
            </p>
            </div>
        </li>
        `
    }
}
