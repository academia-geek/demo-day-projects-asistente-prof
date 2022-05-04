import { addDoc, collection, getDocs } from 'firebase/firestore';
import { typesUsers } from '../types/types';
import { getMyData } from '../../Firebase/firebaseConfig';

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
    console.log(userSelected);
    if (!userSelected) {
      console.log('no existe');
      addDoc(collection(getMyData, 'users'), user)
        .then((resp) => {
          dispatch(addUserSync(user));
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  };
};
