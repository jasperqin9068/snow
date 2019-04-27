<template>
    <div class="hello">
        <Icon name="snow-ios-airplane" size="100" color="red"></Icon>
        <Rate v-model="rate"></Rate>
    </div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		props: {
			msg: String
		},
        data(){
			return {
				rate:3
            }
        }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
