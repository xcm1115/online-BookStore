<template>
    <div class="footer">
		<el-divider></el-divider>
        <el-row class="border" type="flex" align="middle">
			<el-col :span="12">
				<div class="contact">© 联系方式：OnlineBookStore@163.com</div>
			</el-col>
			<el-col :span="12">
				<div class="name">Online-BookStore</div>
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
		margin-top: 50px;
	}
	
    .border {
		line-height: 40px;
		margin: 0 auto;
    }
	
	.contact {
		color: #909399;
		margin-left: 30px;
	}
	
	.name {
		color: #909399;
		float: right;
		margin-right: 30px;
	}
</style>