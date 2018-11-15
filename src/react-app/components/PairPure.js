import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* components */
import Button from './Button.js';

/* tools */
import CONSTANTS, {  } from '../Constants';
import UTILS, { SCUDecision } from '../Utils';

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

class PairPure extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return SCUDecision(this.props, nextProps, 'value');
	}
	
	render() {
		const
			{ value, field, onClick } = this.props; /* parent */
			
		return <div className="param">
			<Button
			name={field}
			onClick={onClick}
		/>
			<div className="param__value">
				{value}
			</div>
		</div>;
	}
}

PairPure.propTypes = {
	onClick: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	field: PropTypes.string.isRequired,
};

export default PairPure;