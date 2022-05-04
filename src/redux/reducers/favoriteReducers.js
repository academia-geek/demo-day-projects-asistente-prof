import { typesFavorite } from "../types/types";


const initialState = {
    favorites:[]
}

export const favoriteReducers = (state = initialState, action)=>{
    switch (action.type) {
        case typesFavorite.paintFavorite:
            return {
                favorites: [...action.payload],
            };
        case typesFavorite.addFavorite:
            return{
                favorites: [action.payload]
            }
            case typesFavorite.deleteFavorite:
                return {
                    favorites: state.favorites.filter(p => p.id !== action.payload)
                }
        default:
            return state
    }
}