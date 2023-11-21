import { useSelector } from "react-redux"
import Card from "./Card"

const Favorites = () => {

    const myFavorites = useSelector((state) => state.myFavorites)

    return(
        <div>
        {
            myFavorites.map(
                ({ id, name, image }) => 
                <Card 
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                />
            )
        }
        </div>
    )
}

export default Favorites