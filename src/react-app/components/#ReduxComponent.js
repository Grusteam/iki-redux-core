import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/* redux actions */
import ACTIONS, {  } from '../redux/actions.js'

/* components */
import Button from './Button.js'

/* tools */
import CONSTANTS, {  } from '../Constants.js';
import UTILS, {  } from '../Utils.js';

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

class ReduxComponent extends Component {
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
			{  } = this.props, /* redux */
			{  } = this.props; /* parent */
			
		return <Button

		/>
	}
}

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

const
	mapStateToProps = ({  }) => {
		return {
		};
	},
	mapDispatchToProps = dispatch => ({
		// onNextStepClickRedux: () => dispatch(changeStep()),
	});

const ReduxComponentRedux = connect(
	mapStateToProps,
	mapDispatchToProps
)(ReduxComponent);

export default ReduxComponentRedux;