const axios = require('axios')

const getCharById = (res, id) => {
    axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-ezesarru`)
    .then(({ data }) => data)
    .then(({ id, name, gender, species, origin, image, status }) => {
        const character = {
            id: id,
            name: name,
            gender: gender,
            species: species,
            origin: origin,
            image: image,
            status: status,
        }
        return res
        .writeHead(200, {"Content-Type": "application/json"})
        .end(JSON.stringify(character))
    })
    .catch((error) => {
        return res
        .writeHead(500, {"Content-Type": "text/plain"})
        .end(error.message)
    })
}

module.exports = getCharById