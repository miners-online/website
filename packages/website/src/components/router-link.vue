<template>
	<a
		:href="computedHref"
	>
		<slot></slot>
	</a>
</template>

<script>
export default {
	name: 'RouterLink',
	props: {
		to: {
			type: String,
			required: true
		},
		exact: {
			type: Boolean,
			default: false
		},
		activeClass: {
			type: String,
			default: 'router-link-active'
		},
		replace: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		// Compute the href attribute based on the route
		computedHref() {
			return this.to; // In a real implementation, you would resolve the path
		},
	},
};
</script>
