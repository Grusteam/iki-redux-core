import UTILS, {  } from './Utils';

export const
	reduxStoreSetup = {
	/* CLOUD OF TAGS */
	cloud: {
		'CLOUD_SELECTED_TAGS': {
			action: 'setCloudSelectedTags',
			constant: 'SET_CLOUD_SELECTED_TAGS',
			defaultState: [],
		},
	},

	/* CONROLLED ELEMENTS */
	controlled: {
		'INPUT_VALUE': {
			action: 'setInputValue',
			constant: 'SET_INPUT_VALUE',
			defaultState: '',
		},
	},
	
	/* GRAPH */
	graph: {
		'GRAPH_TYPE': {
			action: 'setGraphType',
			constant: 'SET_GRAPH_TYPE',
			defaultState: false,
		},
		'GRAPH_PATH': {
			action: 'setGraphPathState',
			constant: 'SET_GRAPH_PATH_STATE',
			defaultState: false,
		},
	},

	/* MAIN STATES */
	main: {
		'SHOW_SPLASH': {
			action: 'setSplashVisibility',
			constant: 'SET_SPLASH_VISIBILITY',
			defaultState: false,
		},
		'SHOW_LOADER': {
			action: 'setLoaderVisibility',
			constant: 'SET_LOADER_VISIBILITY',
			defaultState: true,
		},
	},
};

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
	
const CONSTANTS = {
	reduxStoreSetup
};

export default CONSTANTS;