<template>
	<div v-loading="loading" class="bookInfo">
		<el-card class="box-card leftInfo">
			<el-image style="height: 310px;" :src="'http://www.xiaoqw.online/img/bookImg/' + this.bookInfo.img">
                <div slot="placeholder" class="image-slot">
                    加载中<span class="dot">...</span>
                </div>
            </el-image>
			<div style="display: flex; margin-top: 20px; align-items: center;">
				<div style="color: #606266;">推荐程度：</div>
				<el-rate style="margin-top: 4px;" v-model="bookInfo.Commend" :colors="colors" disabled></el-rate>
			</div>
		</el-card>
		<div class="rightInfo" style="position: relative;">
			<div class="bookName">{{ bookInfo.Name }}</div>
			<div class="authorName">{{ bookInfo.Author }} / {{ bookInfo.Publish_name }}</div>
			<div style="display: flex; margin-top: 50px; align-items: center;">
				<div style="color: #606266;">售价：</div>
				<div class="bookPrice">¥ {{ bookInfo.Price }}</div>
			</div>
			<div style="display: flex; margin-top: 50px; align-items: flex-end;">
				<div style="color: #606266;">库存数量：</div>
				<div>{{ bookInfo.Book_Num }}</div>
			</div>
			<div style="position: absolute; bottom: 0;">
				<div style="display: flex; align-items: center;">
					<div style="color: #606266;">数量：</div>
					<el-input-number v-model="num" @change="handleChange" :min="1" :max="bookInfo.Book_Num"></el-input-number>
				</div>
				<div style="display: flex; margin-top: 40px;">
					<el-button class="buyButton1">加入购物车</el-button>
					<el-button class="buyButton2" style="margin-left: 30px;">立即购买</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				loading: true,
				bookInfo: [],
				num: 1,
			}
		},
		created() {
			this.getInfo();
		},
		methods: {
			getInfo() {
				var address = 'http://www.xiaoqw.online/server/BookStore/bookInfo.php';

				axios.post(address, {
					ID: this.$route.query.ID
				}).then(res => {
					this.bookInfo = res.data; //获取数据  
					console.log('success');
					console.log(this.bookInfo);
				})
				this.loading = false;
			},
			handleChange(value) {
				console.log(value);
			}
		}
	}
</script>

<style>
	.bookInfo {
		justify-content: center;
		margin-top: 50px;
        margin-bottom: 80px;
		display: flex;
	}

	.leftInfo {
		margin-left: 0;
		height: 400px;
	}

	.rightInfo {
		width: 400px;
		height: 400px;
		margin-left: 150px;
		padding-left: 30px;
	}

	.bookName {
		font-size: 23px;
		font-weight: 600;
	}

	.authorName {
		margin-top: 20px;
		color: #909399;
	}

	.bookPrice {
		color: #c00000;
		font-size: 23px;
		font-weight: 600;
	}

	.buyButton1 {
		width: 150px;
		background-color: #4F6E9D;
		color: #FFFFFF;
		outline: none;
		border-color: #4F6E9D;
		border-radius: 25px;
	}

	.buyButton1:focus,
	.buyButton1:hover {
		background-color: #7e9dca;
		border-color: #7e9dca;
		color: #FFFFFF;
		outline: none;
	}

	.buyButton2 {
		width: 150px;
		outline: none;
		border-radius: 25px;
		color: #4f6e9d;
	}

	.buyButton2:focus,
	.buyButton2:hover {
		background-color: #7e9dca;
		border-color: #7e9dca;
		color: #FFFFFF;
		outline: none;
	}
</style>
