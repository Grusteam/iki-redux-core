import UTILS, {  } from './Utils';

export const
	controllerSetup = [
		{
			name: 'Main',
			branch: 'main',
			setup: [
				{
					name: 'splash',
					reducer: 'SHOW_SPLASH',
					field: 'SHOW_SPLASH',
				},
				{
					name: 'loader',
					reducer: 'SHOW_LOADER',
					field: 'SHOW_LOADER',
				},
			]
		},
		{
			name: 'Graph',
			branch: 'graph',
			setup: [
				{
					name: 'type',
					reducer: 'GRAPH_TYPE',
					field: 'GRAPH_TYPE',
				},
				{
					name: 'path',
					reducer: 'GRAPH_PATH',
					field: 'GRAPH_PATH',
				},
			]
		},
		{
			name: 'Cloud',
			branch: 'cloud',
			setup: [
				{
					name: 'selection',
					reducer: 'CHANGE_SELECTION',
					field: 'SELECTION',
				},
			]
		},
	],
	initialState = {
		auth: {
			
		},
		main: {
			test_1_key: 'test_1_val',
			TEST_COUNTER: 0,
			SHOW_SPLASH: false,
			SHOW_LOADER: false,
			USER: {
				
			},
		},
		graph: {
			GRAPH_TYPE: false,
			GRAPH_PATH: false,
		},
		cloud: {
			SELECTION: [0],
		},
	};

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
	
const CONSTANTS = {
	controllerSetup,
	initialState,
};

export default CONSTANTS;

const reduxStoreSetup = {
	/* MAIN STATES */
	'SHOW_SPLASH': {
		action: 'SET_SPLASH_VISIBILITY',
		defaultState: false,
	},
	'SHOW_LOADER': {
		action: 'SET_LOADER_VISIBILITY',
		defaultState: true,
	},

	/* CONROLLED ELEMENTS */
	'INPUT_VALUE': {
		action: 'SET_INPUT_VALUE',
		defaultState: '',
	},
	
	/* GRAPH */
	'GRAPH_TYPE': {
		action: 'SET_GRAPH_TYPE',
		defaultState: false,
	},
	'GRAPH_PATH': {
		action: 'SET_GRAPH_PATH_STATE',
		defaultState: false,
	},

	/* CLOUD */
	'CLOUD_SELECTED_TAGS': {
		action: 'SET_CLOUD_SELECTED_TAGS',
		defaultState: [],
	},

}

// const reduxStore = {
// 	/* MAIN STATES */
// 	SHOW_SPLASH
// 	SHOW_LOADER

// 	/* CONROLLED ELEMENTS */
// 	INPUT_VALUE
// }