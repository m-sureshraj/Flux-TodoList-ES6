'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import AppActions from '../actions/app-actions';
import AppStores from '../stores/app-stores';
import AddItem from '../components/add-item';
import List from '../components/list';

export default class ListContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			list: AppStores.getList()
		};
		//make sure _onChange always runs in (ListContainer) context
		this._onChange = this._onChange.bind(this);
	}

	_onChange() {
		this.setState({
			list: AppStores.getList()
		});
	}

	componentDidMount() {
		//Register the listener
		AppStores.addListener(this._onChange);
	}

	componentDidUnMount() {
		//Remove the listener
		AppStores.removeListener(this._onChange);
	}

	handleAddItem(item) {
		AppActions.addItem(item);
	}

	handleRemoveItem(index) {
		AppActions.removeItem(index);
	}

	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 col-lg-offset-3'>
						<h3 className='text-center'>Todo List</h3>
						<AddItem add={this.handleAddItem} />
						<List items={this.state.list} remove={this.handleRemoveItem} />
					</div>
				</div>
			</div>
		);
	}
}