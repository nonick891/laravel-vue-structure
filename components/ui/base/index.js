import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
const requireComponent = require.context(`./`, false, /[\w-]+\.vue$/);

requireComponent.keys().forEach(fileName => {
	if (fileName === './index.js') return;
	const componentConfig = requireComponent(fileName);
	const componentName = upperFirst(
		camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
	);
	Vue.component('Base' + componentName, componentConfig.default || componentConfig)
});
