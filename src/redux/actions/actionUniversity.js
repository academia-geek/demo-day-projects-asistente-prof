import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { getMyData } from '../../Firebase/firebaseConfig';
import { typesUniversity } from '../types/types';

//paint carreras
export const paintCareerAsync = ()=>{
  return async (dispatch)=>{
    const getDataCareeries = await getDocs(collection(getMyData, 'universidades'))
    const careeries = []
    getDataCareeries.forEach((carr)=>{
      careeries.push({
        ...carr.data()
      })
    })
    dispatch(paintCareerSync(careeries))
  }
}

export const paintCareerSync = (careeries) => {
  return {
      type: typesUniversity.paintCareer,
      payload: careeries
  }

}

//----------buscador-------------//
export const SearchUniAsync = (carrera) => {
  return async (dispatch) => {
    const universidadRef = collection(getMyData, 'universidades');
    const q = query(universidadRef, where('carrera', '==', carrera));
    const querySnapshop = await getDocs(q)
    querySnapshop.forEach((doc) => {
      const data = doc.data()
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
        uid: DocId        
      }
      dispatch(SearchUniAsync(datosUni))
    })
  }
}
export const SearchUniSync = (datosUni) => {
  return {
    type: typesUniversity.searchCareer,
    payload: datosUni
  }
}

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
      const colleccionTraer = collection(getMyData, "universidades")
      const q = query(colleccionTraer, where("idCarrera", "==", id))
      const traerDatosQ = await getDocs(q)
      traerDatosQ.forEach((collec => {
          deleteDoc(doc(getMyData, "universidades", collec.id))
      }))
      dispatch(deleteCareerSync(id))
  }
}

export const deleteCareerSync = (id) => {
  console.log('eliminar')
  return {
      type: typesUniversity.deleteCareer,
      payload: id
  }
}
