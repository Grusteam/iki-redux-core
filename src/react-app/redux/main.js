import UTILS, {  } from '../Utils.js';
import CONSTANTS, {  } from '../Constants.js';

const rootReducer = (state = {}, action) => {
	/* state - это ветка state.main */
	const {
		value = '',
	} = action;
	
	switch (action.type) {
		
		case 'SHOW_SPLASH':
			return { ...state,
				'SHOW_SPLASH': !state['SHOW_SPLASH'],
			};
		
		case 'SHOW_LOADER':
			return { ...state,
				'SHOW_LOADER': !state['SHOW_LOADER'],
			};
		
		/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
			
		default:
			return state;
	}
};

export default rootReducer;