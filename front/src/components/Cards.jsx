import Card from './Card'

const Cards = ({ characters, onClose }) => {
   return(
      <div>
      {
         characters.map(
            (character) => 
            <Card 
               {...character}
               onClose={onClose}
               key={character.id}
             />
         )
      }
      </div>
   )
}

export default Cards