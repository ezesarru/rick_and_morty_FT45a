import './App.css'

import axios from 'axios'

import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

import Cards from './components/Cards'
import Nav from './components/Nav'
import About from './components/About'
import Detail from './components/Detail'
import Form from './components/Form'
import Favorites from './components/Favorites'

const App = () => {

  const { pathname } = useLocation()

  const navigate = useNavigate()

  const [characters, setCharacters] = useState([])
    
  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`) //! pi-ezesarru
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
      (character) => character.id !== Number(id))
    )
  }

  const [access, setAccess] = useState(false)
  const EMAIL = 'hola@gmail.com'
  const PASSWORD = '123456'

  const login = ({ email, password }) => {
    if(email === EMAIL && password === PASSWORD){
      setAccess(true)
      navigate('/home')
    }
  }
  
  useEffect(() => {
    !access && navigate('/')
  }, [access]);

  const logOut = () => {
    setAccess(false)
  }

  return(
    <div>
      { 
        pathname === '/favorites' ||
        pathname === '/home' ||
        pathname === '/about' ||
        pathname.includes('/detail') ? <Nav onSearch={onSearch} logOut={logOut} /> : null
      }

      <Routes>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/' element={<Form login={login} />}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/detail/:id' element={<Detail />}/>
      </Routes>

    </div>
  )
}

export default App


