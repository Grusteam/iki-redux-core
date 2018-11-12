import React, { Component } from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'

/* reducers */
import main from './redux/main.js'
import graph from './redux/graph.js'
import cloud from './redux/cloud.js'

/* tools */
import CONSTANTS, {  } from './Constants.js';
import UTILS, { getInitialState } from './Utils.js';

/* components */
import App from './App.js'

/* redux store creation */
const store = createStore(
	combineReducers({
		main,
		graph,
		cloud,
	}),
	getInitialState(),
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