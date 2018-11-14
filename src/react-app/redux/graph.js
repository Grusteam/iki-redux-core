import UTILS, {  } from '../Utils';
import CONSTANTS, {  } from '../Constants';

const graph = (state = {}, action) => {
	/* state - это ветка state.graph */
	const {
		value = '',
	} = action;
	
	switch (action.type) {
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