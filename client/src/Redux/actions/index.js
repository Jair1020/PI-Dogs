import axios from 'axios';

export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const CREATE_DOG = 'CREATE_HOUSE';
export const GET_DOG = 'GET_DOG';
export const GET_TEMPERAMENTS='GET_TEMPERAMENTS';
export const API_BD = 'http://localhost:3001';


export const getalldogs = ()=>{
  return async function (dispatch){
    try{
      let dogs= await axios.get (`${API_BD}/dogs`)
      dispatch ({
        type: GET_ALL_DOGS,
        payload: dogs.data
      });
    }catch (err){
      console.log (err)
    }
  }
} 

export const getdog= (name)=>{
  return async function (dispatch){
    try{
      let dog= await axios.get (`${API_BD}/dogs?name=${name}`)
      return dispatch ({
        type: GET_DOG,
        payload: dog.data
      })

    }catch (err){
      console.log (err)
    }
  }
}
export const gettemperamets = ()=>{
  return async function (dispatch){
    try{
      let temperaments= await axios.get (`${API_BD}/temperament`)
      return dispatch ({
        type: GET_TEMPERAMENTS,
        payload: temperaments.data
      })
    }catch (err){
      console.log (err)
    }
  }
}


