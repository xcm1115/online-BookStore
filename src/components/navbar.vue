<template>
	<div>
		<el-row class="nav" type="flex" align="middle">
			<el-col :span="2" class="box"><img class="image" src="../../static/bible.png"></img></el-col>
			<el-col :span="2" class="box">BookStore</el-col>
			<el-col :span="13">
				<el-menu :default-active="$router.path" router="true" class="el-menu-demo" mode="horizontal"
				 active-text-color="#4F6E9D">
					<el-menu-item index="/">首页</el-menu-item>
					<el-menu-item index="2">用户列表</el-menu-item>
					<el-menu-item index="3">商品列表</el-menu-item>
					<el-menu-item index="4">查询商品</el-menu-item>
					<el-menu-item index="/category">商品分类</el-menu-item>
					<el-menu-item index="6">新货上架</el-menu-item>
					<el-menu-item index="7">特价市场</el-menu-item>
					<el-menu-item index="8">缺货登记</el-menu-item>

				</el-menu>
			</el-col>
			<el-col :span="3" class="box">
				<el-input class="myInput" placeholder="搜索书籍" active-text-color="#4F6E9D" size="small" prefix-icon="el-icon-search"
				 v-model="input" @focus="InputFocus" @blur="InputBlur" @confirm="toSearch()">
				</el-input>
			</el-col>
			<el-col :span="1" class="box"><label class="el-icon-user"></label></el-col>
			<el-col :span="3">
				<el-menu class="el-menu-demo" mode="horizontal" text-color="#4F6E9D">
					<el-menu-item>购物车</el-menu-item>
					<el-menu-item>订单</el-menu-item>
				</el-menu>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',
				input: '',
			}
		},
		methods: {
			// handleSelect(key, keyPath) {
			// 	console.log(key, keyPath)
			// }
		}
	}
</script>

<style>
	.nav {
		width: 100%;
		margin-top: -10px;
		margin-left: -28px;
		margin-right: -28px;
		background-color: #FFFFFF;
		border-bottom: solid 2px #e6e6e6;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		position: fixed;
		z-index: 999;
	}
	
	.box {
		background-color: #FFFFFF;
		text-align: center;
		color: #4F6E9D;
		font-size: 20px;
	}

	.el-menu-demo {
		margin-left: 30px;
	}

	.image {
		width: 35px;
		height: 35px;
	}
	
	.el-icon-user {
		float: right;
	}
	
	/* 自定义类+内置类 */
	.myInput input.el-input__inner:focus {
	    border-color: #4F6E9D;
	}
</style>
