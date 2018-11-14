/*tools*/
import { forEach } from 'lodash';
import CONSTANTS, {  } from './Constants';

export const
	getInitialState = (setup) => {
		const s = {};

		forEach(setup, (branch, branchKey) => {
			forEach(branch, ({ action, constant, defaultState }, key, all) => {
				if (!s[branchKey]) s[branchKey] = {};
				
				s[branchKey][key] = defaultState;
			})
		})

		return s;
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

		forEach(setup, (branch, branchVal) => {
			forEach(branch, (key, keyVal) => {
				a.push({ branch: branchVal, key: keyVal });
			})
		})

		return a;
	},
	getReduxStateFields = (state, setup) => {
		const o = {};

		getSetupFields(setup).forEach(({ branch, key }) => {
			o[key] = state[branch][key];
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