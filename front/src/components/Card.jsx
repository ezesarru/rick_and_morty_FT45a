import { Link } from 'react-router-dom'

const Card = ({ id, name, status, species, gender, origin, image, onClose }) => {
   return(
      <div>
         <button onClick={() => onClose(id)}>Close Card</button>
         <Link to={`/detail/${id}`} >
            <h2>{name}</h2>
         </Link>
         <h2>status: {status}</h2>
         <h2>species: {species}</h2>
         <h2>gender: {gender}</h2>
         <h2>origin: {origin.name}</h2>
         <img src={image} alt={name}/>
      </div>
   );
}

export default Card