<template>
	<div>
		<el-row type="flex" justify="space-between" align="middle">
			<el-col :span="8" class="title-left">
				<i class="el-icon-menu"></i>
				<span> CATEGORIES</span>
			</el-col>
			<el-col :span="6">
				<el-input class="myInput1 myInput2 search" placeholder="搜索书籍" active-text-color="#4F6E9D" prefix-icon="el-icon-search"
				 v-model="searchText" @confirm="toSearch()">
				</el-input>
			</el-col>
			<el-col :span="2">
				<el-button class="cateButton myButton" @tap="toSearch()">Search</el-button>
			</el-col>
			<el-col :span="8" class="title-right">
				<el-tag type="warning" size="medium">Books</el-tag>
			</el-col>
		</el-row>
		<el-container>
			<el-row>
				<el-col :span="4">
					<div style="color: #FFFFFF;">占位</div>
					<el-card class="leftNav">
                        <img src="/static/cateNav.png" class="leftImg">
						<div class="navItem" :class="index==showCategoryIndex?'cur':''" v-for="(item, index) in navItems" :key="index" @click="showCategory(index)">{{ item }}</div>
					</el-card>
				</el-col>
				<el-col :span="20">
					<el-row v-show="showCategoryIndex === 0" type="flex" justify="center" v-for="(books, index) in transAllBooks" :key="index">
						<el-col :span="3" :offset="index > 0 ? 1 : 0" v-for="(book, index) in books" :key="index">
							<el-card class="row" :body-style="{ padding: '0px' }">
								<img class="img" @click="toInfo(book)" :src="'http://120.55.87.80/img/bookImg/' + book.img">
								<el-link class="name" @click="toInfo(book)" :underline="false">
									<i class="el-icon-reading readIcon"></i>{{ book.Name }}
								</el-link>
								<div class="author">{{ book.Author }}</div>
								<el-row type="flex" align="middle">
									<el-col :span="12" class="price">¥ {{ book.Price }}</el-col>
									<el-col :span="12">
										<button class="shop" @click="open()"><i class="el-icon-shopping-bag-1 icon"></i></button>
									</el-col>
								</el-row>
								<el-rate class="rate" v-model="book.Commend" :colors="colors" disabled></el-rate>
							</el-card>
						</el-col>
					</el-row>

					<el-row v-show="showCategoryIndex === 1" type="flex" justify="center" v-for="(books, index) in transPcBooks" :key="index">
						<el-col :span="3" :offset="index > 0 ? 1 : 0" v-for="(book, index) in books" :key="index">
							<el-card class="row" :body-style="{ padding: '0px' }">
								<img class="img" @click="toInfo(book)" :src="'http://120.55.87.80/img/bookImg/' + book.img">
								<el-link class="name" @click="toInfo(book)" :underline="false">
									<i class="el-icon-reading readIcon"></i>{{ book.Name }}
								</el-link>
								<div class="author">{{ book.Author }}</div>
								<el-row type="flex" align="middle">
									<el-col :span="12" class="price">¥ {{ book.Price }}</el-col>
									<el-col :span="12">
										<button class="shop" @click="open()"><i class="el-icon-shopping-bag-1 icon"></i></button>
									</el-col>
								</el-row>
								<el-rate class="rate" v-model="book.Commend" :colors="colors" disabled></el-rate>
							</el-card>
						</el-col>
					</el-row>

					<el-row v-show="showCategoryIndex === 2" type="flex" justify="center" v-for="(books, index) in transEnBooks" :key="index">
						<el-col :span="3" :offset="index > 0 ? 1 : 0" v-for="(book, index) in books" :key="index">
							<el-card class="row" :body-style="{ padding: '0px' }">
								<img class="img" @click="toInfo(book)" :src="'http://120.55.87.80/img/bookImg/' + book.img">
								<el-link class="name" @click="toInfo(book)" :underline="false">
									<i class="el-icon-reading readIcon"></i>{{ book.Name }}
								</el-link>
								<div class="author">{{ book.Author }}</div>
								<el-row type="flex" align="middle">
									<el-col :span="12" class="price">¥ {{ book.Price }}</el-col>
									<el-col :span="12">
										<button class="shop" @click="open()"><i class="el-icon-shopping-bag-1 icon"></i></button>
									</el-col>
								</el-row>
								<el-rate class="rate" v-model="book.Commend" :colors="colors" disabled></el-rate>
							</el-card>
						</el-col>
					</el-row>

					<el-row v-show="showCategoryIndex === 3" type="flex" justify="center" v-for="(books, index) in transOtherBooks" :key="index">
						<el-col :span="3" :offset="index > 0 ? 1 : 0" v-for="(book, index) in books" :key="index">
							<el-card class="row" :body-style="{ padding: '0px' }">
								<img class="img" @click="toInfo(book)" :src="'http://120.55.87.80/img/bookImg/' + book.img">
								<el-link class="name" @click="toInfo(book)" :underline="false">
									<i class="el-icon-reading readIcon"></i>{{ book.Name }}
								</el-link>
								<div class="author">{{ book.Author }}</div>
								<el-row type="flex" align="middle">
									<el-col :span="12" class="price">¥ {{ book.Price }}</el-col>
									<el-col :span="12">
										<button class="shop" @click="open()"><i class="el-icon-shopping-bag-1 icon"></i></button>
									</el-col>
								</el-row>
								<el-rate class="rate" v-model="book.Commend" :colors="colors" disabled></el-rate>
							</el-card>
						</el-col>
					</el-row>
				</el-col>
			</el-row>
		</el-container>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				loading: true,
				activeIndex: '1',
				bookPath: 1,
				searchText: '', //搜索关键字
				showCategoryIndex: 0,
				navItems: ['全部书籍', '计算机类', '英语类', '其他类'],
				allBooks: [],
				pcBooks: [],
				enBooks: [],
				otherBooks: [],
				transAllBooks: [],
				transPcBooks: [],
				transEnBooks: [],
				transOtherBooks: [],
			};
		},
		created() {
			var address1 = 'http://120.55.87.80/server/BookStore/allBooks.php';
			var address2 = 'http://120.55.87.80/server/BookStore/pcBooks.php';
			var address3 = 'http://120.55.87.80/server/BookStore/enBooks.php';
			var address4 = 'http://120.55.87.80/server/BookStore/otherBooks.php';

			axios.post(address1).then(res => {
					//这里是ES6的写法，get请求的地址
					this.allBooks = res.data; //获取数据  
					console.log('success');
					console.log(this.allBooks);
					this.transAll();
				}),
				axios.post(address2).then(res => {
					//这里是ES6的写法，get请求的地址
					this.pcBooks = res.data; //获取数据  
					console.log('success');
					console.log(this.pcBooks);
					this.transPc();
				}),
				axios.post(address3).then(res => {
					//这里是ES6的写法，get请求的地址
					this.enBooks = res.data; //获取数据  
					console.log('success');
					console.log(this.enBooks);
					this.transEn();
				}),
				axios.post(address4).then(res => {
					//这里是ES6的写法，get请求的地址
					this.otherBooks = res.data; //获取数据  
					console.log('success');
					console.log(this.otherBooks);
					this.transOther();
				}),
				this.loading = false;
		},
		methods: {
			transAll() {
				var Arr = [];
				for (var i = 0, idx = -1; i < this.allBooks.length; i++) {
					i % 5 == 0 && (idx++);
					if (Object.prototype.toString.call(Arr[idx]) != '[object Array]')
						Arr[idx] = [];
					Arr[idx].push(this.allBooks[i]);
				}
				this.transAllBooks = Arr;
			},
			transPc() {
				var Arr1 = [];
				for (var i = 0, idx = -1; i < this.pcBooks.length; i++) {
					i % 5 == 0 && (idx++);
					if (Object.prototype.toString.call(Arr1[idx]) != '[object Array]')
						Arr1[idx] = [];
					Arr1[idx].push(this.pcBooks[i]);
				}
				this.transPcBooks = Arr1;
			},
			transEn() {
				var Arr2 = [];
				for (var i = 0, idx = -1; i < this.enBooks.length; i++) {
					i % 5 == 0 && (idx++);
					if (Object.prototype.toString.call(Arr2[idx]) != '[object Array]')
						Arr2[idx] = [];
					Arr2[idx].push(this.enBooks[i]);
				}
				this.transEnBooks = Arr2;
			},
			transOther() {
				var Arr3 = [];
				for (var i = 0, idx = -1; i < this.otherBooks.length; i++) {
					i % 5 == 0 && (idx++);
					if (Object.prototype.toString.call(Arr3[idx]) != '[object Array]')
						Arr3[idx] = [];
					Arr3[idx].push(this.otherBooks[i]);
				}
				this.transOtherBooks = Arr3;
			},
			toInfo(e) {
				this.$router.push({
					path: '/bookInfo',
					query: {
						ID: e.ID
					}
				})
			},
			showCategory(index) {
				this.showCategoryIndex = index;
			},
			open() {
				this.$confirm('确定将此书加入购物车?', 'BookStore', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$notify({
						title: 'SHOP',
						message: '成功加入购物车!',
						type: 'success'
					});
				}).catch(() => {

				});
			}
		}
	}
</script>

<style>
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

	.search input.el-input__inner {
		width: 320px;
		height: 40px;
	}

	.cateButton {
		border-radius: 25px;
		border: none;
		outline: none;
		background-color: #4F6E9D;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
		color: #FFFFFF;
	}


	/* main里的样式 */
	.leftNav {
		top: 50%;
		width: 150px;
		height: 380px;
		margin-top: -170px;
		margin-left: 70px;
		position: fixed;
		border-radius: 15px;
		background-color: #4F6E9D;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
	}

    .leftNav .leftImg {
		width: 100%;
        margin-bottom: 20px;
		color: #FFFFFF;
		position: relative;
        border-radius: 12px;
	}

	.leftNav .navItem {
		text-align: center;
		height: 70px;
		cursor: pointer;
		color: #FFFFFF;
		cursor: pointer;
		position: relative;
	}

	.leftNav .navItem:hover {
		transform: scale(1.05);
	}
	
	.leftNav .navItem.cur::after {
		color: #FFFFFF;
		content: "";
		width: 5px;
		height: 22px;
		border-radius: 10px 10px 10px 10px;
		position: absolute;
		background-color: currentColor;
		top: 0;
		right: 0;
		margin: auto;
	}

	.row {
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.img {
		width: 100%;
		height: 100%;
		display: block;
		cursor: pointer;
		transition: all 0.6s;
	}

	.img:hover {
		transform: scale(1.1);
	}

	.name {
		padding-top: 14px;
		padding-left: 15px;
		padding-right: 15px;
		font-size: 16px;
	}

	.el-link.el-link--default {
		color: #4F6E9D;
	}

	.el-link.el-link--default:hover {
		color: #7E9DCA;
	}

	.readIcon {
		text-align: left;
		padding-right: 5px;
	}

	.author {
		text-align: left;
		color: #909399;
		padding-top: 14px;
		padding-left: 15px;
		padding-right: 15px;
		font-size: 15px;
	}

	.price {
		margin-top: 10px;
		margin-bottom: 10px;
		font-size: 15px;
		padding-left: 15px;
		padding-top: 4px;
	}

	.shop {
		margin-top: 10px;
		margin-bottom: 10px;
		border: none;
		outline: none;
		background-color: #FFFFFF;
		font-size: 20px;
		float: right;
		padding-right: 15px;
	}

	.icon {
		color: #4F6E9D;
		cursor: pointer;
		transition: all 0.3s;
	}

	.icon:hover {
		transform: scale(1.1);
	}

	.rate {
		text-align: center;
		padding: 0 10px 14px 10px;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.pageBottom {
		margin-top: 30px;
		margin-bottom: 30px;
		text-align: center;
		color: #C0C4CC;
	}
</style>
