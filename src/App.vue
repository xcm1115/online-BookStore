<template>
	<el-container id="app">
		<el-header>
			<navbar></navbar>
		</el-header>
		<router-view></router-view>
		<!-- <myfooter></myfooter> -->
	</el-container>
</template>

<script>
    import navbar from './components/navbar.vue'
	import myfooter from './components/footer.vue'
	
    export default {
        name: "App",
        components: {
            navbar,
			// myfooter
        }
    };
</script>

<style>
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
</style>
