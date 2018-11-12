import CONSTANTS, {  } from '../Constants.js';

/* TEST_ACTION */
const testAction = () => {
	return {type: 'TEST_ACTION'};
}

const showSplash = () => {
	return {type: 'SHOW_SPLASH'};
}

const showLoader = () => {
	return {type: 'SHOW_LOADER'};
}

const graphType = () => {
	return {type: 'GRAPH_TYPE'};
}

const graphPath = () => {
	return {type: 'GRAPH_PATH'};
}

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

const ACTIONS = {
	testAction,
	showSplash,
	showLoader,
	graphType,
	graphPath,
};

export {
	testAction,
	showSplash,
	showLoader,
	graphType,
	graphPath,
};

export default ACTIONS;