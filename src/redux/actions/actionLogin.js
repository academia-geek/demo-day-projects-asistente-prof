import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import { facebook, google } from '../../Firebase/firebaseConfig';
import { typesLogin } from '../types/types';

//--------------------Logout----------------------

export const logoutAsync = () => {
  return (dispatch) => {
    const auth = getAuth();
    signOut(auth)
      .then(({ user }) => {
        dispatch(logoutSync());
      })
      .catch((error) => {
        console.warn(error);
      });
  };
};

export const logoutSync = () => {
  return {
    type: typesLogin.logout,
  };
};

//---------------------------//
export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        dispatch(loginSincronico(user.email, user.password));

      })
      .catch((error) => {
        console.warn(error, 'No autorizado');
      });
  };
};
//---------------------------//
export const loginFacebook = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebook)
      .then(({ user }) => {
        dispatch(loginSincronico(user.email, user.password));

      })
      .catch((error) => {
        console.warn(error, 'No autorizado');
      });
  };
};

//validar usuario y Contrase;a
export const loginEmailPassAsync = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSincronico(user.email, user.password));

      })

      .catch((error) => {
        console.warn(error, 'No autorizado');
      });
  };
};

export const loginSincronico = (email, password) => {
  return {
    type: typesLogin.login,
    payload: {
      email,
      password,
    },
  };
};

//* delete user
export const deleteUserLogAsync = () => {
  return (dispatch) => {
    const auth = getAuth();
    auth.currentUser
      .delete()
      .then(() => {
        dispatch(deleteUserLogSync());
      })
      .catch((error) => {
        console.warn(error);
      });
  };
};
export const deleteUserLogSync = () => {
  return {
    type: typesLogin.delete,
  };
};
