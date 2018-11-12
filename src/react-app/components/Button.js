import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* tools */
import CONSTANTS, {  } from '../Constants.js';
import UTILS, {  } from '../Utils.js';

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

class Button extends Component {
	constructor(props, context) {
		super(props);

		const
			{  } = this.props; /* parent */
	}
	
	/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
	
	render() {
		const
			{ name, onClick } = this.props; /* parent */
			
		return <button
			className="button"
			type="button"
			onClick={onClick}
		>
			{ name }
		</button>
	}
}

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */


export default Button;