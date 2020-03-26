<template>
	<div id="app">
		<navbar></navbar>
	</div>
</template>

<script>
    import navbar from './components/frame/navbar.vue'
	
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
    }
</style>
