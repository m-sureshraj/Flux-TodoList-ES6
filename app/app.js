'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import ListContainer from './components/list-container';

class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<ListContainer />
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#app'));