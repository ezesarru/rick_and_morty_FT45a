import './App.css'
import Cards from './components/Cards'
import Nav from './components/Nav'
import React from 'react'
import axios from 'axios'

const App = () => {

  const [characters, setCharacters] = React.useState([])

  const onSearch = (id) => {
    axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-ezesarru`)
      .then(({ data }) => {
        if(characters.some(
          (character) => character.id === data.id)){
            alert('¡Ya añadiste este personaje!'
          )
        }
        else if(data.id){
          setCharacters(
            (oldCharacters) => [...oldCharacters, data]
          )
        } else {
          alert('¡No hay personajes con este ID!')
        }
      }
    )
  }

 const onClose = (id) => {
  setCharacters(
    characters.filter(
      (character) => character.id != id)
    )
  }

  return(
    <div>
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  )
}

// uwu

export default App


