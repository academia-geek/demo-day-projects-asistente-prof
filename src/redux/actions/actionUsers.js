import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { typesUsers } from '../types/types';
import { getMyData } from '../../Firebase/firebaseConfig';
import Swal from 'sweetalert2';

//* User Add
export const addUserSync = (user) => {
  return {
    type: typesUsers.addUser,
    payload: user,
  };
};

export const addUserAsync = (user) => {
  console.log(user);
  return async (dispatch) => {
    const collectionTraer = await getDocs(collection(getMyData, 'users'));
    const userlist = collectionTraer.docs.map((doc) => {
      return { ...doc.data() };
    });
    const userSelected = userlist.find((use) => {
      return use.id === user.id;
    });
    if (!userSelected) {
      addDoc(collection(getMyData, 'users'), user)
        .then((resp) => {
          dispatch(addUserSync(user));
          if(resp){Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Guardada con Exito',
            showConfirmButton: false,
            timer: 1500
          })}
          
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  };
};

//* paint user
export const paintUserSync = (user) => {
  return {
    type: typesUsers.paintUser,
    payload: user,
  };
};

export const paintUserAsync = (uid) => {
  return async (dispatch) => {
    const collectionTraer = await getDocs(collection(getMyData, 'users'));
    const users = [];
    collectionTraer.forEach((doc) => {
      users.push({
        ...doc.data(),
      });
    });
    const user = users?.find((use) => {
      return use.id === uid;
    });
    dispatch(paintUserSync(user));
  };
};

//* update user
export const updateUserSync = (user) => {
  return {
    type: typesUsers.updateUser,
    payload: user,
  };
};

export const updateUserAsync = (user) => {
  return async (dispatch) => {
    const collectionTraer = collection(getMyData, 'users');
    const q = query(collectionTraer, where('id', '==', user.id));
    const traerDatosQ = await getDocs(q);
    let idquery;
    traerDatosQ.forEach((doc) => {
      idquery = doc.id;
    });
    const documenRef = doc(getMyData, 'users', idquery);
    await updateDoc(documenRef, user)
      .then((resp) => {
        dispatch(updateUserSync(user));
      })
      .catch((error) => {
        console.warn(error);
      });
  };
};

//* delete user
export const deleteUserSync = (user) => {
  return {
    type: typesUsers.deleteUser,
    payload: user,
  };
};
export const deleteUserAsync = (uid) => {
  return async (dispatch) => {
    const collectionTraer = collection(getMyData, 'users');
    const q = query(collectionTraer, where('id', '==', uid));
    const traerDatosQ = await getDocs(q);
    traerDatosQ.forEach((docum) => {
      deleteDoc(doc(getMyData, 'users', docum.id));
    });
    dispatch(deleteUserSync(uid));
  };
};
