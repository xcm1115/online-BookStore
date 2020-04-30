<template>
    <div>
        <el-row type="flex" align="middle">
            <el-col :span="4">
                <img class="bannerLogo" src="../../../static/shoppingCart.jpg">
            </el-col>
            <el-col :span="20">
                <div class="banner">
                    <div class="prompt_a">购物车</div>
                    <div class="prompt_b">温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</div>
                </div>
            </el-col>
        </el-row>
        <div class="cart_line"></div>

        <div v-if="this.cart[0]">
            <div class="list">
                <el-row type="flex" align="middle">
                    <el-col :span="3" class="title">商品图片</el-col>
                    <el-col :span="9" class="title">商品名称</el-col>
                    <el-col :span="3" class="title">单价</el-col>
                    <el-col :span="3" class="title">数量</el-col>
                    <el-col :span="3" class="title">小计</el-col>
                    <el-col :span="3" class="title">操作</el-col>
                </el-row>

                <div v-for="(book, index) in cart" :key="index">
                    <el-row type="flex" align="middle">
                        <el-col :span="3" class="bookRow">
                            <img class="bookImg" :src="'https://www.xiaoqw.online/smallFrog-bookstore/img/' + book.book_Img">
                        </el-col>
                        <el-col :span="9" class="bookRow">{{ book.book_Name }}</el-col>
                        <el-col :span="3" class="bookRow">{{ book.unit_Price }}</el-col>
                        <el-col :span="3" class="bookRow">{{ book.count }}</el-col>
                        <el-col :span="3" class="bookRow">{{ book.unit_Price * book.count }}</el-col>
                        <el-col :span="3" class="bookRow">
                            <el-button type="danger" icon="el-icon-delete" @click="cartDelete(book)" circle></el-button>
                        </el-col>
                    </el-row>
                </div>
            </div>

            <div class="summary">
                <el-row type="flex" align="middle">
                    <el-col :span="6">
                        <div class="number">共 {{ count }} 件商品</div>
                    </el-col>
                    <el-col :span="14">
                        <div class="price">合计（不含运费）：{{ totalPrice }} 元</div>
                    </el-col>
                    <el-col :span="4" class="settlement">
                        <div @click="toSettle()">结算</div>
                    </el-col>
                </el-row>
            </div>
        </div>

        <div v-if="!this.cart[0]">
            <div class="list">
                <el-row type="flex" align="middle">
                    <el-col :span="3" class="title">商品图片</el-col>
                    <el-col :span="9" class="title">商品名称</el-col>
                    <el-col :span="3" class="title">单价</el-col>
                    <el-col :span="3" class="title">数量</el-col>
                    <el-col :span="3" class="title">小计</el-col>
                    <el-col :span="3" class="title">操作</el-col>
                </el-row>

                <el-row type="flex" align="middle">
                    <el-col :span="24" class="title">暂无商品噢，赶紧去添加吧！</el-col>
                </el-row>
            </div>

            <div class="summary">
                <el-row type="flex" align="middle">
                    <el-col :span="6">
                        <div class="number">共 0 件商品</div>
                    </el-col>
                    <el-col :span="14">
                        <div class="price">合计（不含运费）：0 元</div>
                    </el-col>
                    <el-col :span="4" class="settlement">
                        <div @click="toSettle()">结算</div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        inject: ['reload'],
        data() {
            return {
                cart: [],
                count: 0,
                totalPrice: 0
            }
        },
        created() {
            var address = "https://www.xiaoqw.online/smallFrog-bookstore/server/userCart.php";
            var user_ID = this.$cookies.get('user_ID');
            var count = 0;
            var totalPrice = 0;

            axios.post(address, user_ID).then(res => {
                this.cart = res.data; //获取数据
                console.log("success");
                console.log(this.cart);

                for (let i = 0; i < this.cart.length; i++) {
                    count += parseFloat(this.cart[i].count);
                    totalPrice += parseFloat(this.cart[i].unit_Price * this.cart[i].count);
                }
                this.count = count;
                this.totalPrice = totalPrice;
            });
        },
        methods: {
            cartDelete(e) {
                var address = "https://www.xiaoqw.online/smallFrog-bookstore/server/cartDelete.php";

                axios.post(address, {
                    user_ID: e.user_ID,
                    book_ID: e.book_ID
                }).then(response => {
                    console.log('删除成功');
                    this.$message({
                        showClose: true,
                        message: '删除成功！',
                        type: 'success',
                        center: true
                    });
                    this.reload();
                    // let res = response.data;
                    // if (res.status == '1') {            
                    //     console.log('删除成功');
                    //     this.$message({
                    //         showClose: true,
                    //         message: '删除成功！',
                    //         type: 'success',
                    //         center: true
                    //     });
                    //     this.reload();
                    // } else {
                    //     console.log('删除失败！');
                    //     this.$message({
                    //         showClose: true,
                    //         message: '删除失败！',
                    //         type: 'error',
                    //         center: true
                    //     });
                    // }
                });
            },
            toSettle() {
                if (!this.cart[0]) {
                    this.$message({
                        showClose: true,
                        message: '购物车里还没有商品噢！',
                        type: 'warning',
                        center: true
                    });
                }
                else {
                    this.$router.push({
                        path: "/shopping/settle",
                        query: {
                            cart: this.cart
                        }
                    });
                }
            }
        }
    }
</script>

<style scoped>
    .bannerLogo {
        width: 60%;
        margin-left: 100px;
        margin-top: -25px;
    }

    .banner {
        width: 100%;
        height: 80px;
        display: flex;
        margin-bottom: 20px;
    }

    .banner .prompt_a {
        height: 80px;
        line-height: 80px;
        font-weight: bold;
        font-size: 24px;
        margin-left: 40px;
    }

    .banner .prompt_b {
        height: 80px;
        line-height: 90px;
        font-size: 14px;
        color: #777;
        margin-left: 40px;
    }

    .cart_line {
        width: 100%;
        height: 2px;
        background: #4f6e9d;
    }

    .list {
        width: 85%;
        margin: 0 auto;
        background-color: #f5f5f5;
        text-align: center;
    }

    .list .title {
        height: 100px;
        line-height: 100px;
        font-weight: bold;
    }

    .list .bookRow {
        height: 120px;
        line-height: 90px;
    }

    .list .bookRow .bookImg {
        width: 60px;
    }

    .summary {
        width: 85%;
        margin: 0 auto;
        height: 60px;
        line-height: 60px;
        background-color: #f5f5f5;
        text-align: center;
        margin-top: 20px;
    }

    .summary .number {
        color: #4f6e9d;
    }

    .summary .price {
        margin-right: 40px;
        float: right;
    }

    .summary .settlement {
        height: 60px;
        background-color: #4f6e9d;
        color: #ffffff;
        cursor: pointer;
    }

    .summary .settlement:hover {
        background-color: #7E9DCA;
    }
</style>