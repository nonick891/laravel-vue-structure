import Toast from './toast'
import Loader from './loader'
import { get } from 'lodash'
let axios = window.axios;

export const getHandler = function(handler) {
	const launchFunction = typeof handler === 'function'
		? handler
		: function() {};
	return function(response) {
		Loader.hide.call(Loader);
		let error = get(response, 'response', false);
		if (get(error, 'status', 0) >= 400) {
			console.log(get(error, 'status', 0));
			Toast.showError.call(Toast, 'Error: '.concat(error.statusText));
		} else {
			Toast.show.call(Toast, get(response, 'data.message', null));
		}
		launchFunction(response)
	}
};

export const request = function(method, url, data) {
	Loader.show.call(Loader);
	data = data ? data : {};
	return axios({ method, url, data: data.data })
		.then(getHandler(data.handler))
		.catch(getHandler(data.error));
};

export const api = (method, url, data) => {
	request(method, '/api/v1/'.concat(url), data)
}
