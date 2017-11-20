import { FETCH_DATA } from '../actions/index';


export default function(state = [], action) {
	// console.log('Action received', action);
	switch(action.type) {
		case FETCH_DATA:
		
			return [ action.payload.data];
			console.log('payload', action.payload.data);
	}
	return state; 
} 

