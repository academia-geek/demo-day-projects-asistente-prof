import { typesUniversity } from '../types/types';

const initialState = {
  careeries: [],
};

export const carrerReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesUniversity.paintCareer:
      return {
        careeries: [...action.payload],
      };
    case typesUniversity.addCarrer:
      console.log('agregado');
      return {
        careeries: [action.payload],
      };
    case typesUniversity.deleteCareer:
      console.log('borrado');
      return {
        careeries: state.careeries.filter((p) => p.id !== action.payload),
      };
    case typesUniversity.updateCareer:
      return {
        ...state,
      };
    default:
      return state;
  }
};
