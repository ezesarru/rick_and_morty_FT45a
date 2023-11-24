import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Detail = () => {

  const [character, setCharacter] = useState({})

  const { id } = useParams()

  useEffect(() => {
      axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-ezesarru`)
      .then(({ data }) => {
            if (data.name) {
              setCharacter(data)
            } else {
              alert('No hay personajes con ese ID')
            }
          }
      )
      return setCharacter({})
    }, [id])

  return(
    <div>
      <h1>{character?.name}</h1>
      <h3>Status: {character?.status}</h3>
      <h3>Specie: {character?.species}</h3>
      <h3>Gender: {character?.gender}</h3>
      <h3>Origin: {character?.origin?.name}</h3>
      <img src={character?.image} alt={character?.name}></img>
    </div>
  )
}

export default Detail