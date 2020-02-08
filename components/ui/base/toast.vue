<template>
	<div v-if="toast.wrapper" class="Polaris-Frame-ToastManager" aria-live="polite" style="z-index: 1082">
		<div class="Polaris-Frame-ToastManager__ToastWrapper"
			 :class="toast.show && toast.message ? 'Polaris-Frame-ToastManager--toastWrapperEnterDone' : ''"
			 style="--toast-translate-y-in:-80px; --toast-translate-y-out:70px;"
		>
			<div
				class="Polaris-Frame-Toast"
				:class="{ 'Polaris-Frame-Toast--error': toast.error }"
			>
				{{ toast.message }}
				<button @click="close" type="button" class="Polaris-Frame-Toast__CloseButton">
					<span class="Polaris-Icon">
						<svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
							<path d="M11.414 10l6.293-6.293a.999.999 0 1 0-1.414-1.414L10 8.586 3.707 2.293a.999.999 0 1 0-1.414 1.414L8.586 10l-6.293 6.293a.999.999 0 1 0 1.414 1.414L10 11.414l6.293 6.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L11.414 10z" fill-rule="evenodd"></path>
						</svg>
					</span>
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import Toast from '../../../project-folder/modal/toast'

export default {

	data: () => ({
		toast: Toast.state
	}),

	methods: {
		close() {
			Toast.hide()
		}
	}
}
</script>
