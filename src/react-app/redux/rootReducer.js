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
				'TEST_COUNTER': state['TEST_COUNTER'] + 1,
			});
		
		case 'SHOW_SPLASH':
			return Object.assign({}, state, {
				'SHOW_SPLASH': !state['SHOW_SPLASH'],
			});
		
		case 'SHOW_LOADER':
			return Object.assign({}, state, {
				'SHOW_LOADER': !state['SHOW_LOADER'],
			});
		
		case 'GRAPH_TYPE':
			return Object.assign({}, state, {
				'GRAPH_TYPE': !state['GRAPH_TYPE'],
			});
		
		case 'GRAPH_PATH':
			return Object.assign({}, state, {
				'GRAPH_PATH': !state['GRAPH_PATH'],
			});
			
		/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
			
		default:
			return state;
	}
};

export default rootReducer;