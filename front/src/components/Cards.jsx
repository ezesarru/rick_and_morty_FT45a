import Card from './Card'

const Cards = ({ characters }) => {
   return(
      <div>
      {
         characters.map(
            (character) => <Card {...character} key={character.id} onClose={() => alert('Emulating the closing of a card')} />
         )
      }
      </div>
   )
}

export default Cards