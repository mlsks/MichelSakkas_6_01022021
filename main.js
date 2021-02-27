/* eslint-disable indent */
"use strict"

let photographers = []
// eslint-disable-next-line no-unused-vars
let tags = []
const url = "./data.json"
//  Appel à la fonction pour retourner des données asynchrones (api /json / DB)
fetch(url)
    .then(function (response) {
        return response.json()
    })
    //  On retourne le tableau des photographes
    .then(function (data) {
        let resdata = data.photographers
        resdata.forEach((photographer) => {
            photographers.push(
                // eslint-disable-next-line no-undef
                new Photographer(
                    photographer.name,
                    photographer.id,
                    photographer.city,
                    photographer.country,
                    photographer.tags,
                    photographer.tagline,
                    photographer.price,
                    photographer.portrait
                )
            )
        })
        console.log(photographers)

        // console.log(resdata)
        // console.log(photographers[3].tags)
        let output = ""
        let allTags = ""
        photographers.forEach((photographer) => {
            output += photographer.display()
            allTags += photographer.searchTags()
            console.log(allTags)
        })

        document.getElementById("allTags").innerHTML = allTags
        document.getElementById("output").innerHTML = output
    })
