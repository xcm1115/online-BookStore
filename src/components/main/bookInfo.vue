<template>
    <div>
        <div class="pageHeader">
            <el-page-header @back="goBack" content="书籍详情"></el-page-header>
        </div>
        <div v-loading="loading" class="bookInfo">
            <el-card class="box-card leftInfo">
                <img style="height: 310px;" :src="'https://www.xiaoqw.online/smallFrog-bookstore/img/' + this.bookInfo.img">
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
                        <el-button class="buyButton1" @click="addToCart(bookInfo)">加入购物车</el-button>
                        <el-button class="buyButton2" style="margin-left: 30px;" @click="toSettle(bookInfo)">立即购买</el-button>
                    </div>
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
                cart: [[]]
            }
        },
        created() {
            this.getInfo();
        },
        methods: {
            getInfo() {
                var address = 'https://www.xiaoqw.online/smallFrog-bookstore/server/bookInfo.php';

                axios.post(address, {
                    ID: this.$route.query.ID
                }).then(res => {
                    this.bookInfo = res.data; //获取数据  
                    console.log('success');
                    console.log(this.bookInfo);
                });
                this.loading = false;
            },
            handleChange(value) {
                console.log(value);
            },
            goBack() {
                this.$router.go(-1);
            },
            addToCart(e) {
                var address = "https://www.xiaoqw.online/smallFrog-bookstore/server/addToCart.php";

                if (this.$cookies.get('status') == 'logined') {
                    axios.post(address, {
                        user_ID: this.$cookies.get('user_ID'),
                        book_ID: e.ID,
                        book_Img: e.img,
                        book_Name: e.Name,
                        unit_Price: e.Price,
                        count: this.num
                    }).then(res => {
                        console.log("success");
                        this.$message({
                            type: 'success',
                            message: '成功加入购物车！'
                        });
                    });
                } else {
                    this.$confirm('您尚未登录！', 'smallFrog', {
                        confirmButtonText: '去登陆',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$router.push({
                            path: '/login'
                        })
                    });
                }
            },
            setCart() {
                this.cart[0]['user_ID'] = this.$cookies.get('user_ID');
                this.cart[0]['book_ID'] = this.bookInfo.ID;
                this.cart[0]['book_Name'] = this.bookInfo.Name;
                this.cart[0]['book_Img'] = this.bookInfo.img;
                this.cart[0]['unit_Price'] = this.bookInfo.Price;
                this.cart[0]['count'] = this.num;
            },
            toSettle() {
                if (this.$cookies.get('status') == 'logined') {
                    this.setCart();
                
                    this.$router.push({
                        path: "/shopping/settle",
                        query: {
                            cart: this.cart
                        }
                    });
                } else {
                    this.$confirm('您尚未登录！', 'smallFrog', {
                        confirmButtonText: '去登陆',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$router.push({
                            path: '/login'
                        })
                    });
                }   
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
        border-radius: 0;
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
        border-radius: 0;
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