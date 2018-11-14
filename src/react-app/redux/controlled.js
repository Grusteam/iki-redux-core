import UTILS, {  } from '../Utils';
import CONSTANTS, {  } from '../Constants';

const controlled = (state = {}, action) => {
	/* state - это ветка state.controlled */
	const {
		value = '',
	} = action;
	
	switch (action.type) {
		
		case 'SET_INPUT_VALUE':
			return { ...state,
				'INPUT_VALUE': value,
			};
		
		/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
			
		default:
			return state;
	}
};

export default controlled;