import { addDoc, collection } from 'firebase/firestore';
import { getMyData } from '../../Firebase/firebaseConfig';
import { typesUniversity } from '../types/types';

//paint carreras
export const paintCareer = (career)=>{
  
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
