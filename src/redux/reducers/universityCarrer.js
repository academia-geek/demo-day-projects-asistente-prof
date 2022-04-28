import { typesUniversity } from '../types/types';

const initialState = {
  carrer: [],
};

export const carrerReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesUniversity.addCarrer:
      return {
        carrer: [action.payload],
      };
    case typesUniversity.deleteCarrer:
      return {
        carrer: state.carrer.filter((p) => p.id !== action.payload),
      };
    case typesUniversity.updateCarrer:
      return {
        ...state,
      };
    default:
      return state;
  }
};
