import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* redux actions */
import ACTIONS, {  } from '../redux/actions.js';

/* components */
import Button from './Button.js';

/* tools */
import CONSTANTS, { controllerSetup } from '../Constants.js';
import UTILS, { notationModifier, getReduxStateFields, getSetupFields } from '../Utils.js';

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

class Controller extends PureComponent {
	constructor(props, context) {
		super(props);

		const
			{  } = this.props, /* redux */
			{  } = this.props; /* parent */
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
				return <div className="section" key={`${name}_${i}`}>
					<div className="section__title">{ name }</div>
					<div className="section__body">
						{setup.map(({name, reducer, field}, i) => {
							const camel = notationModifier(reducer);

							return <div className="param" key={`${reducer}_${i}`}>
								<Button
								name={name}
								onClick={() => testButtonClick(camel)}
							/>
								<div className="param__value">
									{`${this.props[field]}`}
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
			return ACTIONS[key] ? dispatch(ACTIONS[key](Math.floor(Math.random() * 10))) : console.warn(`no action "${key}" in actions`);
		}, 
	});

const ControllerRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(Controller);

export default ControllerRedux;