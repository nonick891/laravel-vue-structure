<template>
	<div
		v-if="state.show"
		class="lds-dual-ring"
		:class="state.class"
	></div>
</template>
<script>
import Loader from '../../../project-folder/modal/loader'
export default {
	data: () => ({
		state: Loader.state
	})
}
</script>
