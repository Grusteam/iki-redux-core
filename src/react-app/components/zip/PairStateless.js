import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/* components */
import Button from './Button.js';

/* tools */
import CONSTANTS, {  } from '../Constants';
import UTILS, {  } from '../Utils';

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

const PairPure = ({ onClick, value, field }) => <div className="param">
		<Button
		name={field}
		onClick={onClick}
	/>
		<div className="param__value">
			{value}
		</div>
	</div>;

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

PairPure.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
};


export default PairPure;