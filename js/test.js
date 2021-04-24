<li class="cards__gallery ${this.tags}"> 
            <div class='card__gallery '>
                <img src="photos/${this.image}" class="image-gallery" alt="image ${tagline}"
                onclick="openLightbox();toSlide(${this.id})">
                <div class="p_row">
                    <p id="max_text">${tagline}</p>
                    <p class="price">${this.price}€&nbsp;</p>
                    <p class="likes">${this.likes}</p>
                    <img src="photos/coeur.png" alt="coeur rouge" class="coeur"  style="width:20px;height:20px;margin-top: 1.4rem;">   
                </div>
            </div>
        </li>