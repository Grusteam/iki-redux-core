import UTILS, {  } from '../Utils.js';
import CONSTANTS, {  } from '../Constants.js';

const rootReducer = (state = {}, action) => {
	const {
		value = '',
	} = action;
	
	switch (action.type) {
		/* TEST_ACTION */	
		case 'TEST_ACTION':
			console.log('TEST_ACTION');

			return Object.assign({}, state, {
				'TEST_COUNTER': state['TEST_COUNTER'] + 1
			});
			
		/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
			
		default:
			return state;
	}
};

export default rootReducer;