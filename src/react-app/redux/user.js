import UTILS, {  } from '../Utils';
import CONSTANTS, {  } from '../Constants';

const user = (state = {}, { type, payload = {} }) => {
	/* state - это ветка state.user */
	// console.log('state, type, payload', state, type, payload);

	const { 
		value = '',
	} = payload;

	switch (type) {
		case 'SET_USER_NAME':
			return { ...state,
				'USER_NAME': value,
			};
			
		case 'SET_USER_ID':
			return { ...state,
				'USER_ID': value,
			};
		
		/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
			
		default:
			return state;
	}
};

export default user;