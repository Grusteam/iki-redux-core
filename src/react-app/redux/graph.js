import UTILS, {  } from '../Utils';
import CONSTANTS, {  } from '../Constants';

const rootReducer = (state = {}, action) => {
	/* state - это ветка state.graph */
	const {
		value = '',
	} = action;
	
	switch (action.type) {
		case 'GRAPH_TYPE':
			return { ...state,
				'GRAPH_TYPE': !state['GRAPH_TYPE'],
			};
		
		case 'GRAPH_PATH':
			return { ...state,
				'GRAPH_PATH': !state['GRAPH_PATH'],
			};
			
		/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
			
		default:
			return state;
	}
};

export default rootReducer;