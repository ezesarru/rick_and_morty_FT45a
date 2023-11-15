import './App.css'
import Cards from './components/Cards'
import Nav from './components/Nav'
import React from 'react'
import axios from 'axios'
import { Routes, Route, useLocation } from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'
import Error from './components/Error'

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

  const { pathname } = useLocation()

  return(
    <div>
        {pathname === '/' || pathname === '/about' || pathname.includes('/detail') ? <Nav onSearch={onSearch} /> : null}
      <Routes>
        <Route path='/' element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/detail/:id' element={<Detail />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </div>
  )
}

export default App


