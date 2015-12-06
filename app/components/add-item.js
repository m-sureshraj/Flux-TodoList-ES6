'use strict';
import React from 'react';

export default class AddItem extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(e) {
		if (e.keyCode === 13) { //13 = enter key
			let { textField } = this.refs;
			this.props.add(textField.value);
			textField.value = '';
		}
	}

	render() {
		return (
			<input 
				type='text' 
				ref='textField' 
				className='form-control' 
				placeholder='Add new item'
				onKeyDown={this.handleSubmit.bind(this)} 
			/>
		);
	}
}