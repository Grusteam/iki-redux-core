import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* redux actions */
import ACTIONS, {  } from '../redux/actions.js'

/* components */
import Button from './Button.js'

/* tools */
import CONSTANTS, { controllerSetup } from '../Constants.js';
import UTILS, { notationModifier, getReduxStateFields, getSetupFields } from '../Utils.js';

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
			
		return <div className="controller">
			<div className="controller__title">Controller</div>

			{controllerSetup.map(({name, setup}, i) => {
				return <div className="section" key={i}>
					<div className="section__title">{ name }</div>
					<div className="section__body">
						{setup.map(({name, snake}, i) => {
							const camel = notationModifier(snake);

							return <div className="param" key={i}>
								<Button
								name={name}
								onClick={() => testButtonClick(camel)}
							/>
								<div className="param__value">
									{`${this.props[snake]}`}
								</div>
							</div>
						})}	
					</div>
				</div>
			})}
		</div>
	}
}

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

const
	mapStateToProps = (state) => {
		
		return {
			...getReduxStateFields(state, getSetupFields(controllerSetup))
		};
	},
	mapDispatchToProps = dispatch => ({
		testButtonClick: (key) => {
			return ACTIONS[key] ? dispatch(ACTIONS[key]()) : console.log(`no action "${key}" in actions`);
		}, 
	});

const ControllerRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(Controller);

export default ControllerRedux;