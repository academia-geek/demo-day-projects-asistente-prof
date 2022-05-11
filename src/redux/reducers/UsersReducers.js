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
    case typesUsers.updateUser:
      return {
        user: state.user.map((user) =>
          user.id === action.payload.id ? (user = action.payload) : user
        ),
      };
    case typesUsers.deleteUser:
      return {
        user: state.user.filter((user) => user.id !== action.payload),
      };

    default:
      return state;
  }
};
