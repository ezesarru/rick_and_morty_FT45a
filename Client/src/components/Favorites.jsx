//? Hooks
import { useSelector, useDispatch } from "react-redux"

//? Imports
import { filterCards, orderCards } from "../redux/actions"
import Card from "./Card"

const Favorites = () => {

    const dispatch = useDispatch()

    const myFavorites = useSelector((state) => state.myFavorites)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return(
        <div>
            
            <select onChange={handleOrder}>
                <option>Order</option>
                <option value="A">Ascendent</option>
                <option value="D">Descendent</option>
            </select>

            <select onChange={handleFilter}>
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>

        {
            myFavorites.map(
                ({ id, name, image, gender }) => 
                <Card 
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    gender={gender}
                />
            )
        }
        </div>
    )
}

export default Favorites