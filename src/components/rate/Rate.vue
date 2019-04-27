<template>
    <div>
        <Icon
                v-for="(rate,index) of rates"
                :name="name"
                :color="rate?color:voidColor"
                :size="size"
                @click="onClick(index)"
        >
        </Icon>
    </div>
</template>

<script>
	export default {
		name: "Rate",
		props: {
			value: [Number, String],
			count: {
				type: [Number, String],
				default: 5
			},
			name: {
				type: String,
				default: 'snow-md-star'
			},
			color: {
				type: String,
				default: '#FFD21E'
			},
			voidColor: {
				type: String,
				default: '#e9e9e9'
			},
			size: {
				type: [Number, String],
				default: 32
			}
		},
		computed: {
			rates() {
				return Array.from({length: this.count}).map((value, index) => index < this.value)
			}
		},
		methods: {
			onClick(index) {
				this.$emit('input', index + 1)
			}
		}
	}
</script>

<style scoped>

</style>