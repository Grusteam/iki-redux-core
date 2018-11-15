import React, { Component } from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';

/* reducers */
import cloud from './redux/cloud';
import controlled from './redux/controlled';
import graph from './redux/graph';
import main from './redux/main';
import user from './redux/user';

/* tools */
import CONSTANTS, { reduxStoreSetup } from './Constants';
import UTILS, { getInitialState } from './Utils';

/* components */
import App from './App'

/* redux store creation */
const store = createStore(
	combineReducers({
		cloud,
		controlled,
		graph,
		main,
		user,
	}),
	getInitialState(reduxStoreSetup),
	compose(
		// applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	),
);

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */

class ReduxApp extends Component {
	render() {
		return <Provider store={store}>
			<App />
		</Provider>;
	}
}

export default ReduxApp;