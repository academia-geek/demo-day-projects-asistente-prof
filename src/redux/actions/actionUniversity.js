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
