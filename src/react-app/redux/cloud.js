import UTILS, {  } from '../Utils';
import CONSTANTS, {  } from '../Constants';

const cloud = (state = {}, { type, payload = {} }) => {
	/* state - это ветка state.cloud */
	// console.log('state, type, payload', state, type, payload);

	const { 
		nodes = [],
	} = payload;

	switch (type) {
		case 'SET_CLOUD_SELECTED_TAGS':
			return { ...state,
				'CLOUD_SELECTED_TAGS': [...state['CLOUD_SELECTED_TAGS'], ...nodes],
			};
		
		/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
			
		default:
			return state;
	}
};

export default cloud;