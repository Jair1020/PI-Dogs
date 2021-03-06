import { CLEAN_DOG, GET_ALL_DOGS, GET_DOG, GET_DOG_ID, GET_TEMPERAMENTS } from '../actions';


const initialState={
  dogs: [],
  dog: [],
  temperaments:[]
}
export default function rootReducer (state= initialState, action){

	switch (action.type){
		case GET_ALL_DOGS:
			return {
				...state,
				dogs: action.payload
			}
		case GET_DOG:
			return {
				...state,
				dog: action.payload 
			}
		
		case GET_TEMPERAMENTS:
			return {
				...state,
				temperaments: [...action.payload]
			}
		case GET_DOG_ID:
			return{
				...state,
				dog:action.payload
			}
		case CLEAN_DOG:
			return{
				...state,
				dog:[],
			}		
		default: return state   		
	};
}