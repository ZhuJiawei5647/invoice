<template>
	<div class="main">
		<div class="box">
			<img class="bg" src="@/assets/p0.png">
			<router-link to="/bills">
				<img class="item" src="@/assets/p12.png">
			</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				
			}
		},
		methods: {

		},
		created () {

		}
	}
</script>
<style lang="less" scoped>
	.box {
		margin: 50px 100px;
		position: absolute;
		top: 100px;
		left: 160px;
		width: 760px;


		.bg {
			width: 100%;
		}

		.item {
			position: absolute;
			top: 86px;
			left: 524px;
			width: 70px;
			cursor: pointer;
		}
	}
</style>