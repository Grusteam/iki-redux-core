import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* redux actions */
import ACTIONS, {  } from '../redux/actions.js';

/* components */
import Button from './Button.js';

/* tools */
import CONSTANTS, { reduxStoreSetup } from '../Constants.js';
import UTILS, { notationModifier, getReduxStateFields } from '../Utils.js';

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

			{Object.keys(reduxStoreSetup).map((branch, i) => {
				return <div className="section" key={`${branch}_${i}`}>
					<div className="section__title">{ branch }</div>
					<div className="section__body">
						{Object.keys(reduxStoreSetup[branch]).map((key, i) => {
							const reduxAction = reduxStoreSetup[branch][key]['action'];

							return <div className="param" key={`${key}_${i}`}>
								<Button
								name={key}
								onClick={() => testButtonClick(reduxAction)}
							/>
								<div className="param__value">
									{`${this.props[key]}`}
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
			...getReduxStateFields(state, reduxStoreSetup)
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