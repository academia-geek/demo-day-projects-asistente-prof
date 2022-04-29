import { typesUniversity } from '../types/types';

const initialState = {
  careeries: [],
};

export const carrerReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesUniversity.paintCareer:
            return {
              careeries: [...action.payload]
            }
    case typesUniversity.addCarrer:
      return {
        careeries: [action.payload],
      };
    case typesUniversity.deleteCarrer:
      return {
        careeries: state.careeries.filter((p) => p.id !== action.payload),
      };
    case typesUniversity.updateCarrer:
      return {
        ...state,
      };
    default:
      return state;
  }
};
