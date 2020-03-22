<template>
	<div id="app">
		<navbar></navbar>
	</div>
</template>

<script>
    import navbar from './components/framework/navbar.vue'
	
    export default {
        name: "App",
        components: {
            navbar
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
