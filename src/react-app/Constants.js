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

const dummyActions = {
	USER: [
		'SET_USER_NAME',
		'SET_USER_ID',
	],
	CLOUD: [
		'SET_CLOUD_SELECTED_TAGS',
		'SET_INPUT_VALUE',
	],
	GRAPH: [
		'SET_GRAPH_TYPE',
		'SET_GRAPH_PATH_STATE',
	],
	GOALS: [
	],
	PROFILE: [
		'SAVE_PROFILE_CHANGES',
		'DELETE_SKILL',
		'ADD_SKILL',
		'BIND_SOCIAL_NETWORK',
		'ADD_NEW_PLACE',
	],
	MAIN: [
		'SET_SPLASH_VISIBILITY',
		'SET_LOADER_VISIBILITY',
		'LOG_OUT',
		'SET_LIST_CHUNKS_LIMIT_COUNT',
	],
	CARD: [
		'SET_CARD_PUPUP_VISIBILITY',
		'SET_CARD_MENU_VISIBILITY',
		'SHARE_CARD',
	],
};

const dummyConstants = {
	INPUTS: [
		'LOGIN_EMAIL',
		'LOGIN_PASSWORD',
	],
	USER: [
		'USER_NAME',
		'USER_SURNAME',
		'USER_ID',
	],
	MAIN: [
		'SHOW_SPLASH',
		'SHOW_LOADER',
	],
};