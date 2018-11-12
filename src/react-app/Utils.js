import CONSTANTS, { initialState } from './Constants.js';

export const
	getInitialState = () => {
		const tests = [2];

		tests.forEach(val => {
			initialState.main[`test_${val}_key`] = `test_${val}_val`;
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

		setup.forEach(({ name, branch, setup }) => {
			setup.forEach(({ name, reducer, field }) => {
				const camel = notationModifier(field);

				a.push({ branch, field });
			});
		});
			
		return a;
	},
	getReduxStateFields = (state, fields) => {
		const o = {};

		fields.forEach(({ branch, reducer, field }) => {
			o[field] = state[branch][field];
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

export default UTILS;