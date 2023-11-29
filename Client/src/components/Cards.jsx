import Card from './Card'

const Cards = ({ characters, onClose }) => {
    return(
        <div>
         {
            characters.map(
               ({ id, name, image, gender }) =>
                <Card
                  key={id}
                  id={id}
                  name={name}
                  image={image}
                  gender={gender}
                  onClose={onClose}
               />
            )
         }
        </div>
    )
}

export default Cards