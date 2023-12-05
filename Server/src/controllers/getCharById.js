const axios = require('axios')

const getCharById = async (req, res) => {
    try {    
        const characterId = req.params.id
        const { data } = await axios(`https://rickandmortyapi.com/api/character/${characterId}?key=pi-ezesarru`)

        const { id, name, gender, species, origin, image, status, location } = data
        const character = { id, name, gender, species, origin, image, status, location }

        if(character.id){
            return res.status(200).json(character)

        } else {
            return res.status(404).send("Personaje no encontrado")
        }
    
    } catch(error){
        return res.status(500).send(error.message)
    }
}

module.exports = getCharById