import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-type"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload
            }

 
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload
            }


        case FILTER:
            if(payload === 'All'){
                return {
                    ...state,
                    myFavorites: [...state.allCharacters]
                }
            } else {
                return {
                    ...state,
                    myFavorites: state.allCharacters.filter(
                        ({ gender }) => gender === payload
                    )
                }
            }
            

        case ORDER:
            return {
                ...state,
                myFavorites: [...state.myFavorites].sort(
                    (a, b) => {
                    if (payload === 'A') {
                        return a.id - b.id
                    }
                    if (payload === 'D') {
                        return b.id - a.id
                    }
                })
            }
        

        default:
        return { ...state }
    }
}

export default reducer