import CONSTANTS, {  } from '../Constants.js';

export const

/* main */
	showSplash = () => ({type: 'SHOW_SPLASH'}),
	showLoader = () => ({type: 'SHOW_LOADER'}),

/* graph */
	graphType = () => ({type: 'GRAPH_TYPE'}),
	graphPath = () => ({type: 'GRAPH_PATH'}),

/* cloud */
	changeSelection = (nodes) => ({type: 'CHANGE_SELECTION', payload: { nodes }});

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

const ACTIONS = {
	showSplash,
	showLoader,
	graphType,
	graphPath,
	changeSelection,
};

export default ACTIONS;