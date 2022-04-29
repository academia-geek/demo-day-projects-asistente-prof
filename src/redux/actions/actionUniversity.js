import { addDoc, collection, getDocs } from 'firebase/firestore';
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
export const addSync = (carrer) => {
  return {
    type: typesUniversity.addCarrer,
    payload: carrer,
  };
};

export const addProductAsync = (carrer) => {
  return (dispatch) => {
    addDoc(collection(getMyData, 'universidades'), carrer)
      .then((resp) => {
        console.log(resp);
        dispatch(addSync(carrer));
      })
      .catch((err) => {
        console.warn(err);
      });
  };
};
