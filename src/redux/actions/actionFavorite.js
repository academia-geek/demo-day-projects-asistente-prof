import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { getMyData } from '../../Firebase/firebaseConfig';
import { typesFavorite } from '../types/types';

//addFavorite
export const addFavoriteAsync = (career) => {
  return (dispatch) => {
    addDoc(collection(getMyData, 'favorite'), career)
      .then((resp) => {
        dispatch(addFavoriteSync(career));
      })
      .catch((err) => {
        console.warn(err);
      });
  };
};

export const addFavoriteSync = (career) => {
  return {
    type: typesFavorite.addFavorite,
    payload: career,
  };
};

//delete carreras
export const deleteFavoriteAsync = (id) => {
  return async (dispatch) => {
    const colleccionTraer = collection(getMyData, 'favorite');
    const q = query(colleccionTraer, where('idCarrera', '==', id));
    const traerDatosQ = await getDocs(q);
    traerDatosQ.forEach((collec) => {
      deleteDoc(doc(getMyData, 'favorite', collec.id));
    });
    dispatch(deleteFavoriteSync(id));
    
    dispatch(paintFavoriteAsync());
  };
};
export const deleteFavoriteSync = (id) => {
  return {
    type: typesFavorite.deleteFavorite,
    payload: id,
  };
};

//paint carreras
export const paintFavoriteAsync = () => {
  return async (dispatch) => {
    const getDataCareeries = await getDocs(collection(getMyData, 'favorite'));
    const careeries = [];
    getDataCareeries.forEach((carr) => {
      careeries.push({
        ...carr.data(),
      });
    });
    dispatch(paintCareerSync(careeries));
  };
};

export const paintCareerSync = (careeries) => {
  return {
    type: typesFavorite.paintFavorite,
    payload: careeries,
  };
};
