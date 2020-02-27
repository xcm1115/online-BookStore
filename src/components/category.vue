<template>
	<div>
		<el-row type="flex" justify="space-between" align="middle">
			<el-col :span="8" class="title-left">
				<i class="el-icon-menu"></i>
				<span> Categories</span>
			</el-col>
			<el-col :span="8">
				<el-input class="myInput search" placeholder="搜索书籍" active-text-color="#4F6E9D" prefix-icon="el-icon-search"
				 v-model="searchText" @confirm="toSearch()">
				</el-input>
				<button class="myButton" @tap="toSearch()">Search</button>
			</el-col>
			<el-col :span="8" class="title-right">
				<el-tag type="warning" size="medium">Books</el-tag>
			</el-col>
		</el-row>
		<el-container>
			<el-aside width="200px">
				<el-menu class="el-menu-vertical-demo" active-text-color="#4F6E9D">
					<el-menu-item @click="allBooks">
						<i class="el-icon-notebook-2"></i>
						<span slot="title">全部书籍</span>
					</el-menu-item>
					<el-menu-item @click="pcBooks">
						<i class="el-icon-mouse"></i>
						<span slot="title">计算机类</span>
					</el-menu-item>
					<el-menu-item @click="enBooks">
						<i class="el-icon-chat-line-round"></i>
						<span slot="title">英语类</span>
					</el-menu-item>
					<el-menu-item @click="otherBooks">
						<i class="el-icon-reading"></i>
						<span slot="title">其他类</span>
					</el-menu-item>
				</el-menu>
			</el-aside>
			<el-main class="main">
				<block v-if="bookPath == 0">
					<el-row type="flex" justify="center">
						<el-col :span="3" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 2 : 0">
							<el-card :body-style="{ padding: '0px' }">
								<img class="img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582800227641&di=33d3e439c7a453a3dbf42216dd50b790&imgtype=0&src=http%3A%2F%2Fd6.yihaodianimg.com%2FN00%2FM00%2F64%2FFF%2FCgQCtlGoHjuAE9-qAAEbf3_eS0g53100_380x380.jpg">
								<div class="name">挪威的森林</div>
								<el-row type="flex" align="middle">
									<el-col :span="12" class="price">¥ 79</el-col>
									<el-col :span="12">
										<el-button class="shop" style="float: right;" type="text" icon="el-icon-shopping-bag-1" circle></el-button>
									</el-col>
								</el-row>
								<el-rate class="rate" v-model="value" :colors="colors" disabled></el-rate>
							</el-card>
						</el-col>
					</el-row>
				</block>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bookPath: null,
				value: 4,
				searchText: '', //搜索关键字
			};
		},
		methods: {
			allBooks() {
				this.bookPath = 0;
			},
			pcBooks() {
				this.bookPath = 1;
			},
			enBooks() {
				this.bookPath = 2;
			},
			otherBooks() {
				this.bookPath = 3;
			},
		}
	}
</script>

<style scope>
	.title-left {
		line-height: 100px;
		margin-left: 20px;
		font-size: 25px;
		color: #4F6E9D;
	}

	.title-right {
		line-height: 100px;
		text-align: end;
		margin-right: 20px;
		color: #4F6E9D;
	}

	.search {
		width: 300px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}

	.search input.el-input__inner {
		height: 40px;
	}

	.myButton {
		width: 70px;
		height: 38px;
		border-radius: 4px;
		border: none;
		outline: none;
		background-color: #53a8ff;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		color: #FFFFFF;
	}

	.el-menu-vertical-demo {
		border-right: 0;
	}

	.el-menu-item:focus,
	.el-menu-item:hover {
		background-color: #F5F6FA;
	}

	.el-menu-item.is-active {
		background-color: #F5F6FA;
	}

	/* main里的样式 */
	.main {
		/* margin-top: -8px; */
		/* margin-right: -8px; */
		background-color: #F5F6FA;
	}
	
	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}
	
	.img {
		width: 100%;
		height: 100%;
		display: block;
	}
	
	.name {
		text-align: center;
		padding-top: 14px;
	}
	
	.price {
		font-size: 15px;
		padding-left: 15px;
		padding-top: 4px;
	}
	
	.shop {
		font-size: 20px;
	}
	
	.rate {
		text-align: center;
		padding: 0 14px 14px 14px;
	}
	
	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}
	
	.clearfix:after {
		clear: both
	}
</style>
