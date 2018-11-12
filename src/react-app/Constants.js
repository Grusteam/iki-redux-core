import UTILS, {  } from './Utils.js';

const
	controllerSetup = [
		{
			name: 'main',
			setup: [
				{
					name: 'splash',
					key: 'testAction',
				},
			]
		}
	],
	initialState = {
		test_1_key: 'test_1_val',
		TEST_COUNTER: 0,
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