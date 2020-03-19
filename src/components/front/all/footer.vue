<template>
    <div class="footer">
        <el-row class="border" type="flex">
			<el-col :span="24">
				<div class="contact">© 联系方式：OnlineBookStore@163.com</div>
			</el-col>
        </el-row>
    </div>
</template>

<script>
	export default {
		
	}
</script>
	
<style scope>
	.footer {
        background-color: #4F6E9D;
	}
	
    .border {
		line-height: 100px;
		margin: 0 auto;
    }
	
	.contact {
		color: #FFFFFF;
		margin-left: 30px;
        text-align: center;
	}
</style>