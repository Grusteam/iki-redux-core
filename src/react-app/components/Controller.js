import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* redux actions */
import ACTIONS, {  } from '../redux/actions.js'

/* components */
import Button from './Button.js'

/* tools */
import CONSTANTS, { controllerSetup } from '../Constants.js';
import UTILS, {  } from '../Utils.js';

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

class Controller extends Component {
	constructor(props, context) {
		super(props);

		const
			{  } = this.props, /* redux */
			{  } = this.props; /* parent */

	}
	
	componentWillReceiveProps({ STEP }) {
		if ( false ) {
		}
	}
	
	onButtonClick() {
		const
			{  } = this.props, /* redux */
			{  } = this.props; /* parent */
	}
	
	/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
	
	render() {
		const
			{ testButtonClick } = this.props, /* redux */
			{  } = this.props; /* parent */
			
		return <div>
			<div>Controller</div>

			{controllerSetup.map(({name, setup}, i) => {
				return <div key={i}>
					<div>{ name }</div>
					<div>
						{setup.map(({name, key}, i) => {
							return <Button
								key={i}
								name={name}
								onClick={() => testButtonClick(key)}
							/>
						})}	
					</div>
				</div>
			})}
		</div>
	}
}

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

const
	mapStateToProps = ({  }) => {
		return {
		};
	},
	mapDispatchToProps = dispatch => ({
		testButtonClick: (key) => dispatch(ACTIONS[key]()), 
	});

const ControllerRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(Controller);

export default ControllerRedux;