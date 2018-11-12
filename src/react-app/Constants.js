import UTILS, {  } from './Utils.js';

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