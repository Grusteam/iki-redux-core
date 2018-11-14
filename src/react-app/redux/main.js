import UTILS, {  } from '../Utils';
import CONSTANTS, {  } from '../Constants';

const main = (state = {}, action) => {
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

export default main;