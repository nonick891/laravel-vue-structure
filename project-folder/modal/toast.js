/**
 * Control object for toast.vue component
 */
export default {
	
	state: {
		wrapper: false,
		show: false,
		message: null,
		timeId: null,
		error: false
	},
	
	show(message) {
		if (!message) return false;
		this.clearTimeout();
		this.clear();
		this.state.wrapper = true;
		this.state.message = message;
		setTimeout(this.open.bind(this), 50);
	},
	
	showError(message) {
		this.show(message);
		this.state.error = true;
	},
	
	open() {
		this.state.show = true;
		this.state.timeId = setTimeout(this.hide.bind(this), 5000);
	},
	
	hide() {
		this.clearTimeout();
		this.setShow(false);
		setTimeout(this.clear.bind(this), 300);
	},
	
	clearTimeout() {
		clearTimeout(this.state.timeId);
		this.state.timeId = null
	},
	
	setShow(value) {
		this.state.show = value;
	},
	
	clear() {
		this.clearMessage();
		this.clearError();
		this.hideWrapper();
	},
	
	clearMessage() {
		this.state.message = null
	},
	
	hideWrapper() {
		this.state.wrapper = false;
	},
	
	clearError() {
		this.state.error = false;
	}
}
