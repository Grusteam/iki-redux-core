import UTILS, {  } from '../Utils';
import CONSTANTS, {  } from '../Constants';

const rootReducer = (state = {}, { type, payload = {} }) => {
	/* state - это ветка state.cloud */
	const { nodes } = payload;
	
	switch (type) {
		case 'CHANGE_SELECTION':
			return { ...state,
				'SELECTION': [...state['SELECTION'], nodes],
			};
		
		/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
			
		default:
			return state;
	}
};

export default rootReducer;