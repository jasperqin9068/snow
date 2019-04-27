<template>
    <i :class="name" :style="style" @click="onClick"></i>
</template>

<script>
	export default {
		name: "Icon",
		props: {
			name: String,
			size: [Number, String],
			color: String,
		},
		computed: {
			style() {
				return {
					fontSize: this.size + 'px',
					color: this.color
				}
			}
		},
		methods: {
			onClick(e) {
				this.$emit('click', e)
			}
		}
	}
</script>

<style scoped>

</style>