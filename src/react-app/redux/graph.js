import UTILS, {  } from '../Utils';
import CONSTANTS, {  } from '../Constants';

const graph = (state = {}, { type, payload = {} }) => {
	/* state - это ветка state.graph */
	// console.log('state, type, payload', state, type, payload);

	const { 
		value = '',
	} = payload;
	
	switch (type) {
		case 'SET_GRAPH_TYPE':
			return { ...state,
				'GRAPH_TYPE': !state['GRAPH_TYPE'],
			};
		
		case 'SET_GRAPH_PATH_STATE':
			return { ...state,
				'GRAPH_PATH': !state['GRAPH_PATH'],
			};
			
		/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
			
		default:
			return state;
	}
};

export default graph;