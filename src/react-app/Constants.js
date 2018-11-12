import UTILS, {  } from './Utils.js';

const
	controllerSetup = [
		{
			name: 'Main',
			setup: [
				{
					name: 'splash',
					snake: 'SHOW_SPLASH',
				},
				{
					name: 'loader',
					snake: 'SHOW_LOADER',
				},
			]
		},
		{
			name: 'Graph',
			setup: [
				{
					name: 'type',
					snake: 'GRAPH_TYPE',
				},
				{
					name: 'path',
					snake: 'GRAPH_PATH',
				},
			]
		},
	],
	initialState = {
		test_1_key: 'test_1_val',
		TEST_COUNTER: 0,
		SHOW_SPLASH: false,
		SHOW_LOADER: false,
		GRAPH_TYPE: false,
		GRAPH_PATH: false,
	};

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
	
const CONSTANTS = {
	controllerSetup,
	initialState,
};

export {
	controllerSetup,
	initialState,
};

export default CONSTANTS;