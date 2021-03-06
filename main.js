/* eslint-disable indent */
"use strict"

let photographers = []
let tags = []
let output = ""
let allTags = ""

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
        // console.log(photographers)

        photographers.forEach((photographer) => {
            output += photographer.display()
            tags.push(...photographer.tags)
        })

        document.getElementById("output").innerHTML = output

        tags = new Set(tags)

        allTags = [...tags]
            .map(
                (tag) => `<li class='photographer-tag' id="${tag}">#${tag}</li>`
            )
            .join("")

        console.log(allTags)

        document.getElementById("allTags").innerHTML = allTags
        document.getElementById("art").addEventListener("click", function () {
            alert("Portrait")
        })
    })
