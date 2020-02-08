export default {
	state: {
		show: false,
		class: '',
		timeId: null
	},
	
	show() {
		clearTimeout(this.state.timeId);
		this.state.class = 'fadeOut';
		this.state.show = true;
	},
	
	hide() {
		this.state.class = 'fadeIn';
		this.state.timeId = setTimeout(() => this.state.show = false, 1000);
	}
}
