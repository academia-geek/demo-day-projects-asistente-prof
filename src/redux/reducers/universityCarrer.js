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
      return {
        careeries: [action.payload],
      };
    case typesUniversity.deleteCareer:
      return {
        careeries: state.careeries.filter((p) => p.id !== action.payload),
      };
    case typesUniversity.updateCareer:
      return {
        ...state,
      };
    case typesUniversity.searchCareer:
      return {
        careeries: state.careeries.filter(
          (p) =>
            p.carrera.toLowerCase().includes(action.payload.toLowerCase()) ||
            p.ciudad.toLowerCase().includes(action.payload.toLowerCase()) ||
            p.universidad.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    case typesUniversity.filterCareer:
      return {
        careeries: state.careeries.filter((p) => p.area === action.payload),
      };

    default:
      return state;

  }
};
