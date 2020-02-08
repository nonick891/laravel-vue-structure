<template>
	<label class="switch">
		<input
			type="checkbox"
			v-bind:value="value"
			v-bind:checked="value"
			v-on:input="updateValue($event.target.checked)"
		/>
		<span class="slider round"></span>
	</label>
</template>
<script>
export default {
	props: {
		value: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		updateValue(value) {
			this.$emit('input', !!(value))
		}
	}
}
</script>
