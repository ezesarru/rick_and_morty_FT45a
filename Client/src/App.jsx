//? Styles
import './App.css'

//? Libraries
import axios from 'axios'

//? Hooks
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

//? Components
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

  const login = (userData) => {
    const { email, password } = userData
    const URL = 'http://localhost:3001/rickandmorty/login/'
    axios(URL + `?email=${email}&password=${password}`)
    .then(({ data }) => {
       const { access } = data
       if(access){
         setAccess(data)
         access && navigate('/home')
        } else {
          alert('Credenciales incorrectas')
        }
    })
 }
  
  useEffect(() => {
    !access && navigate('/home') //! no te olvides de sacar el home y poner solo '/' 
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


