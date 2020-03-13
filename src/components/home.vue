<template>
	<div class="top">
        <h1 class="homeTitle">BookStore</h1>
        <p class="content">我希望政通人和，使大家能安安静静坐下来，想一点事，读一点书，写一点文章。</p>
        <div style="margin-top: 30px;"><img style="width: 800px;" src="/static/background1.png"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.top {
		margin-top: 30px;
        text-align: center;
	}
	
	.myImg {
		width: 100%;
		/* height: 250px; */
		padding: 0 auto;
	}

    .homeTitle {
        color: #333333;
        font-size: 40px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 30px;
    }

    .content {
        width: 400px;
        color: #333333;
        margin: 0 auto;
        font-size: 18px;
        text-align: center;
        line-height: 35px;
    }
	
	.el-carousel__item h3 {
	    color: #475669;
	    font-size: 14px;
	    opacity: 0.75;
	    line-height: 200px;
	    margin: 0;
	  }
	  
	  .el-carousel__item:nth-child(2n) {
	    background-color: #99a9bf;
	  }
	  
	  .el-carousel__item:nth-child(2n+1) {
	    background-color: #d3dce6;
	  }
</style>
