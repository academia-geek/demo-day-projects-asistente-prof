import { typesUsers } from '../types/types';

const initialState = {
  user: {},
};

export const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case typesUsers.addUser:
      return {
        user: [action.payload],
      };
    case typesUsers.paintUser:
      return {
        user: action.payload,
      };

    default:
      return state;
  }
};
