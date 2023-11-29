import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { addFav, removeFav } from '../redux/actions'
import { useLocation } from 'react-router-dom'

const Card = ({ id, name, image, onClose, gender }) => {

   const { pathname } = useLocation()

   const dispatch = useDispatch()

   const myFavorites = useSelector(state => state.myFavorites)

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         dispatch(removeFav(id))
      } else {
         setIsFav(true)
         dispatch(addFav({ id, name, image, gender }))
      }
   }

   useEffect(() => {
      myFavorites.forEach((favCharacter) => {
        if(favCharacter.id === Number(id)) {
            setIsFav(true)
        }})
    }, [myFavorites])

   return (
      <div>
      {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
      }
      {
         pathname === '/home' && <button onClick={() => onClose(id)}>Close Card</button>
      }
         <Link to={`/detail/${id}`} >
            <h2>{name}</h2>
         </Link>
         <img src={image} alt={name} />
         <hr/>
      </div>
   );
}

export default Card