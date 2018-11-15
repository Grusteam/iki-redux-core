import UTILS, {  } from './Utils';

export const
	reduxStoreSetup = {
	/* CLOUD OF TAGS */
	cloud: {
		'CLOUD_SELECTED_TAGS': {
			action: 'setCloudSelectedTags',
			constant: 'SET_CLOUD_SELECTED_TAGS',
			defaultState: ['tag'],
		},
	},

	/* CONROLLED ELEMENTS */
	controlled: {
		'INPUT_VALUE': {
			action: 'setInputValue',
			constant: 'SET_INPUT_VALUE',
			defaultState: 'input',
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
			defaultState: true,
		},
		'SHOW_LOADER': {
			action: 'setLoaderVisibility',
			constant: 'SET_LOADER_VISIBILITY',
			defaultState: false,
		},
	},

	/* USER */
	user: {
		'USER_NAME': {
			action: 'setUserName',
			constant: 'SET_USER_NAME',
			defaultState: 'USER_NAME',
		},
		'USER_ID': {
			action: 'setUserId',
			constant: 'SET_USER_ID',
			defaultState: 'USER_ID',
		},
	},
};

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
	
const CONSTANTS = {
	reduxStoreSetup
};

export default CONSTANTS;