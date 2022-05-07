import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { loginReducers } from '../reducers/loginReducers';

import { registerReducers } from '../reducers/registerReducers';
import { carrerReducers } from '../reducers/universityCarrer';
import { favoriteReducers } from '../reducers/favoriteReducers';
import { userReducers } from '../reducers/UsersReducers';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducersEnviar = combineReducers({
  login: loginReducers,
  register: registerReducers,
  careeries: carrerReducers,
  favorites: favoriteReducers,
  user: userReducers,
});

export const store = createStore(
  reducersEnviar,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {});
