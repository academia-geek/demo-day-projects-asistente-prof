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
import { getMyData } from '../../Firebase/firebaseConfig';
import { typesUniversity } from '../types/types';

//paint carreras
export const paintCareerAsync = () => {
  return async (dispatch) => {
    const getDataCareeries = await getDocs(
      collection(getMyData, 'universidades')
    );
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
    type: typesUniversity.paintCareer,
    payload: careeries,
  };
};

// add carreras
export const addCareerSync = (carrer) => {
  return {
    type: typesUniversity.addCarrer,
    payload: carrer,
  };
};

export const addCareerAsync = (carrer) => {
  return (dispatch) => {
    addDoc(collection(getMyData, 'universidades'), carrer)
      .then((resp) => {
        console.log(resp);
        dispatch(addCareerSync(carrer));
      })
      .catch((err) => {
        console.warn(err);
      });
  };
};

//delete carreras
export const deleteCareerAsync = (id) => {
  return async (dispatch) => {
    const colleccionTraer = collection(getMyData, 'universidades');
    const q = query(colleccionTraer, where('idCarrera', '==', id));
    const traerDatosQ = await getDocs(q);
    traerDatosQ.forEach((collec) => {
      deleteDoc(doc(getMyData, 'universidades', collec.id));
    });
    dispatch(deleteCareerSync(id));
    dispatch(paintCareerAsync());
  };
};

export const deleteCareerSync = (id) => {
  console.log('eliminar');
  return {
    type: typesUniversity.deleteCareer,
    payload: id,
  };
};

//update
export const updateCareerAsync = (index, carrer) => {
  console.log(index, carrer);
  return async (dispatch) => {
    const colleccionTraer = collection(getMyData, 'universidades');
    const q = query(colleccionTraer, where('idCarrera', '==', index));
    const traerDatosQ = await getDocs(q);
    let id;
    traerDatosQ.forEach(async (docu) => {
      id = docu.id;
    });
    const documenRef = doc(getMyData, 'universidades', id);
    await updateDoc(documenRef, carrer)
      .then((resp) => {
        dispatch(UpdateCareerSync(carrer));
        dispatch(paintCareerAsync());
      })
      .catch((err) => console.log(err));
  };
};

export const UpdateCareerSync = (carrer) => {
  return {
    type: typesUniversity.updateCareer,
    payload: carrer,
  };
};

//* filter

export const filterCareersync = (area) => {
  return {
    type: typesUniversity.filterCareer,
    payload: area,
  };
};

//* search

export const searchCareersync = (carrer) => {
  return {
    type: typesUniversity.searchCareer,
    payload: carrer,
  };
};
