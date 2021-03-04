<template>
	<div id="app">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	export default {
		name: 'app',
		mounted() {
			this.$router.push({
				path: '/login'
			})
		}
	}
</script>

<style>
</style>
