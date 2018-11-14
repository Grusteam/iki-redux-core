import React, { Component } from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'

/* reducers */
import main from './redux/main'
import graph from './redux/graph'
import cloud from './redux/cloud'

/* tools */
import CONSTANTS, {  } from './Constants';
import UTILS, { getInitialState } from './Utils';

/* components */
import App from './App'

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