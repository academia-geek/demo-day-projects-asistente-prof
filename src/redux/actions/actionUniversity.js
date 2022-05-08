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

//----------buscador-------------//
export const SearchUniAsync = (carrera) => {
  return async (dispatch) => {
    const universidadRef = collection(getMyData, 'universidades');
    const q = query(universidadRef, where('carrera', '==', carrera));
    const querySnapshop = await getDocs(q);
    querySnapshop.forEach((doc) => {
      const data = doc.data();
      const DocId = doc.id;
      const datosUni = {
        area: data.area,
        carrera: data.carrera,
        cuidad: data.cuidad,
        descripcion: data.descripcion,
        duracion: data.duracion,
        id: data.id,
        idCarrera: data.idCarrera,
        sigla: data.sigla,
        titulo: data.titulo,
        universidades: data.universidades,
        uid: DocId,
      };
      dispatch(SearchUniAsync(datosUni));
    });
  };
};
export const SearchUniSync = (datosUni) => {
  return {
    type: typesUniversity.searchCareer,
    payload: datosUni,
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
  return {
    type: typesUniversity.deleteCareer,
    payload: id,
  };
};

//update
export const updateCareerAsync = (index, carrer) => {
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
      .catch((err) => console.warn(err));
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
