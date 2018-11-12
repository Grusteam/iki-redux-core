import CONSTANTS, { initialState } from './Constants.js';

const
	getInitialState = () => {
		const tests = [2];

		tests.forEach(val => {
			initialState[`test_${val}_key`] = `test_${val}_val`;
		});

		return initialState;
	},
	/* snake-case to camelCase to snake-case */
	notationModifier = (input = '') => {
		if (input.includes('_')) {
			/* to camelCase */
			return input.toLowerCase().replace(/(\_\w)/g, m => m[1].toUpperCase());
		} else {
			/* to snake-case */
			return input.replace(/([a-z])([A-Z])/g, '$1_$2').toUpperCase();
		}
	},
	getSetupFields = setup => {
		const a = [];

		setup.forEach(({ name, setup }) => {
			setup.forEach(({ name, snake }) => {
				const camel = notationModifier(snake);

				a.push(snake);
			});
		});
			
		return a;
	},
	getReduxStateFields = (state, fields) => {
		const o = {};

		fields.forEach(field => {
			o[field] = state[field];
		});

		return o;
	};
	
/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
	
const UTILS = {
	getInitialState,
	notationModifier,
	getSetupFields,
	getReduxStateFields,
};

export {
	getInitialState,
	notationModifier,
	getSetupFields,
	getReduxStateFields,
};

export default UTILS;