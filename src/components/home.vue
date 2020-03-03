<template>
	<div class="top">
		<el-carousel :interval="4000" type="card" height="250px">
		    <el-carousel-item>
				<img class="myImg" src="../../static/rotation/1.jpg"></img>
		    </el-carousel-item>
			<el-carousel-item>
				<img class="myImg" src="../../static/rotation/2.jpg"></img>
			</el-carousel-item>
			<el-carousel-item>
				<img class="myImg" src="../../static/rotation/3.jpg"></img>
			</el-carousel-item>
			<el-carousel-item>
				<img class="myImg" src="../../static/rotation/4.jpg"></img>
			</el-carousel-item>
		  </el-carousel>
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
	}
	
	.myImg {
		width: 100%;
		/* height: 250px; */
		padding: 0 auto;
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
