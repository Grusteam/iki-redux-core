import CONSTANTS, { initialState } from './Constants.js';

const
	getInitialState = () => {
		const tests = [2];

		tests.forEach(val => {
			initialState[`test_${val}_key`] = `test_${val}_val`;
		});

		return initialState;
	};
	
/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
	
const UTILS = {
	getInitialState,
};

export {
	getInitialState,
};

export default UTILS;