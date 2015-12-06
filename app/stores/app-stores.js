'use strict';
import AppConstants from '../constants/app-constants';
import AppDispatcher from '../dispatcher/app-dispatcher';
import { EventEmitter } from 'events';
import objAssign from 'react/lib/Object.assign';

const CHANGE_EVENT = 'change';

let _store = {
	list: []
};

//Setters method to _store
let _addItem = item => {
	_store.list.push(item);
};

let _removeItem = index => {
	_store.list.splice(index, 1);
};

class AppStore extends EventEmitter {
	constructor() {
		super();
	}

	addListener(cb) {
		this.on(CHANGE_EVENT, cb);
	}

	removeListener(cb) {
		this.remove(CHANGE_EVENT, cb);
	}

	getList() {
		return _store.list;
	}
}

var appStore = new AppStore();

AppDispatcher.register(payload => {
	let { action } = payload;

	switch (action.actionType) {
		case AppConstants.ADD_ITEM:
			_addItem(action.data);
			appStore.emit(CHANGE_EVENT);
			break;

		case AppConstants.REMOVE_ITEM:
			_removeItem(action.data);
			appStore.emit(CHANGE_EVENT);
			break;

		default:
			return true;
	}
});

export default appStore;