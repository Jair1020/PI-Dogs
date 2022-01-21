import { GET_ALL_DOGS, GET_DOG, GET_TEMPERAMENTS } from '../actions';


const initialState={
  dogs: [],
  dog: [],
  detail:[],
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
				temperaments: action.payload
			}
		default: return state   		
	};
}