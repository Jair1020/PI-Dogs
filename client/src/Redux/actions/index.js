import axios from 'axios';

export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const CREATE_DOG = 'CREATE_HOUSE';
export const GET_DOG = 'GET_DOG';
export const GET_TEMPERAMENTS='GET_TEMPERAMENTS';
export const GET_DOG_ID= 'GET_DOG_ID';
export const API_BD = 'http://localhost:3001';
export const CLEAN_DOG= 'CLEAN_DOG'


/* export const getalldogs = ()=>{
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
}  */

export const getalldogs = ()=>{
  return function (dispatch){
    try{
      axios.get (`${API_BD}/dogs`)
      .then ((res)=>{ 
        dispatch ({
          type: GET_ALL_DOGS,
          payload: res.data
        });
      })
      
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

export const createdog = (body)=>{
  return async function (dispatch){
    try{
      let postcreate= await axios.post (`${API_BD}/dog`, body)
      console.log ('creado')
      return postcreate;
    }catch (err){
      console.log (err)
    }
  }
}

export const getdogid = (id)=>{
  return async function (dispatch){
    try{
      let dog= await axios.get (`${API_BD}/dogs/${id}`) 
      return dispatch ({
        type: GET_DOG_ID,
        payload: dog.data
      })

    }catch (err){
      console.log (err)
    }
  }
}
export const cleandog = ()=>{
  return {
    type: CLEAN_DOG,
  }
}

